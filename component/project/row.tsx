import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { IProject } from './IProject';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';
import Util from '../common/Util';
import { EmptyRowCol } from '../common';

export default function ProjectRow({ payload }: PropsWithChildren<{ payload: IProject.Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => {
        return (
          <CommonRows
            type="project"
            key={index.toString()}
            payload={serialize(item)}
            index={index}
          />
        );
      })}
    </EmptyRowCol>
  );
}

function serialize(payload: IProject.Item): IRow.Payload {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(payload.startedAt, DATE_FORMAT.YYYY_LL).toFormat(
    DATE_FORMAT.YYYY_DOT_LL,
  );
  const title = (() => {
    if (payload.endedAt) {
      const endedAt = DateTime.fromFormat(payload.endedAt, DATE_FORMAT.YYYY_LL).toFormat(
        DATE_FORMAT.YYYY_DOT_LL,
      );
      return `${startedAt} ~ ${endedAt}`;
    }
    return `${startedAt} ~`;
  })();

  const url: IRow.LeftUrl[] = [];
  if (payload.githubUrl) {
    url.push({ href: payload.githubUrl, label: 'Github', icon: 'github' });
  }
  if (payload.deployUrl) {
    url.push({ href: payload.deployUrl, label: '서비스 URL', logo: payload.deployLogo });
  }

  return {
    left: {
      title,
      url,
    },
    right: {
      title: payload.title,
      detail: payload.detail,
      skill: payload.skill,
      descriptions: payload.descriptions,
    },
  };
}
