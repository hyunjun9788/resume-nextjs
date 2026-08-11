import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { Badge, Col, Row } from 'reactstrap';
import { Style } from '../common/Style';
import Util from '../common/Util';
import { IExperience } from './IExperience';

export default function ExperienceRow({
  item,
  index,
}: PropsWithChildren<{ item: IExperience.Item; index: number }>) {
  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          {createWorkingPeriod(item.startedAt, item.endedAt)}
        </Col>
        <Col sm={12} md={9}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            <h4>{item.title}</h4>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              {createBadges(item.startedAt, item.endedAt)}
            </div>
          </div>
          <i style={Style.gray}>{item.position}</i>
          <div className="pt-3">
            {item.projects ? (
              <>
                {item.projects.map((project, projectIndex) => {
                  const isLastProject = item.projects && projectIndex < item.projects.length - 1;
                  return (
                    <div
                      key={projectIndex.toString()}
                      style={{
                        marginBottom: isLastProject ? '20px' : '0',
                      }}
                    >
                      <h6
                        style={{
                          // fontWeight: 600,
                          marginBottom: '8px',
                          fontFamily: 'Pretendard, sans-serif',
                        }}
                      >
                        {project.url ? (
                          <a href={project.url} target="_blank" rel="noreferrer" style={Style.blue}>
                            {project.title}
                          </a>
                        ) : (
                          project.title
                        )}
                      </h6>
                      <ul style={{ marginLeft: '20px', marginBottom: '0' }}>
                        {project.tasks.map((task, taskIndex) => (
                          <li key={taskIndex.toString()}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
                {createSkillKeywords(item.skillKeywords)}
              </>
            ) : (
              <ul>
                {item.descriptions.map((description, descIndex) => (
                  <li key={descIndex.toString()}>{description}</li>
                ))}
                {createSkillKeywords(item.skillKeywords)}
              </ul>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}

function createSkillKeywords(skillKeywords?: string[]) {
  if (!skillKeywords) {
    return '';
  }
  return (
    <li>
      <strong>Skill Keywords</strong>
      <div>
        {skillKeywords.map((keyword, index) => (
          <Badge
            style={Style.skillKeywordBadge}
            key={index.toString()}
            color="secondary"
            className="mr-1"
          >
            {keyword}
          </Badge>
        ))}
      </div>
    </li>
  );
}

function createWorkingPeriod(startedAtString: string, endedAtString?: string) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(startedAtString, DATE_FORMAT.YYYY_LL).toFormat(
    DATE_FORMAT.YYYY_DOT_LL,
  );

  const periodTitle = (() => {
    if (!endedAtString) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span>{startedAt}</span>
          <span style={{ margin: '0 8px' }}>~</span>
        </div>
      );
    }

    const _endedAt = DateTime.fromFormat(endedAtString, DATE_FORMAT.YYYY_LL).toFormat(
      DATE_FORMAT.YYYY_DOT_LL,
    );
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span>{startedAt}</span>
        <span style={{ margin: '0 8px' }}>~</span>
        <span>{_endedAt}</span>
      </div>
    );
  })();

  return <h4 style={Style.gray}>{periodTitle}</h4>;
}

function createBadges(startedAtString: string, endedAtString?: string) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(startedAtString, DATE_FORMAT.YYYY_LL);
  const isWorking = !endedAtString;
  const endedAt = endedAtString
    ? DateTime.fromFormat(endedAtString, DATE_FORMAT.YYYY_LL)
    : undefined;

  return (
    <>
      {isWorking ? <Badge color="primary">재직 중</Badge> : ''}
      <Badge color="info">{Util.getFormattingDuration(startedAt, endedAt)}</Badge>
    </>
  );
}
