import { Row, Col, Badge } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { DateTime } from 'luxon';
import { Style } from '../common/Style';
import Util from '../common/Util';
import { IIntroduce } from './IIntroduce';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IIntroduce.Payload;

export const Introduce = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const latestUpdated = DateTime.fromFormat(
    payload.latestUpdated,
    Util.LUXON_DATE_FORMAT.YYYY_LL_DD,
  );
  // const latestUpdatedByNow = Math.floor(
  //   DateTime.local().diff(latestUpdated).milliseconds / 1000 / 60 / 60 / 24,
  // );

  return (
    <div className="mt-5">
      <Row>
        <Col sm={12} md={3}>
          <h2 style={Style.blue}>INTRODUCE</h2>
        </Col>
        <Col sm={12} md={9}>
          {payload.contents.map((_, index) => (
            <p key={index.toString()}>
              <span style={{ fontWeight: 'bold' }}>
                사용자 경험의 가치를 팀과 공유하며 함께 완성해가는 프론트엔드 개발자 ‘남현준’
                입니다.
              </span>
              <br />
              <br /> 사용자 경험(UX)을 최우선으로 고려하며 성능 최적화를 깊이 고민하고 개발에 임하고
              있습니다. 기존 1.8초가 소요되던 이미지 업로드 기능을 Next.js의 이미지 최적화를 적용해
              1.1초로 개선하여 <span style={{ fontWeight: 'bold' }}>약 38.7% </span>
              성능 향상을 이루었습니다.
              <br />
              <br /> 실제 사용자 피드백을 바탕으로 성능을 개선하고, 서비스 운영 중 발생한 문제를
              신속하게 개선한 경험이 있습니다. CDN region 설정을 최적화하여 서비스 전반의 서버 응답
              속도를
              <span style={{ fontWeight: 'bold' }}> 약 21% </span>개선함으로써, 사용자들에게 더
              빠르고 최적화된 서비스를 제공하였습니다.
              <br />
              {/* <br />
              여러 팀 프로젝트를 통해 적극적인 코드 리뷰와 팀원 간 원활한 소통을 바탕으로 효율적인
              개발 문화를 진행해왔습니다. 이를 통해 성공적으로 프로젝트를 완료하며 좋은 성과를 낼 수
              있었습니다.
              <br /> */}
              <br />
              또한, 개발을 진행하면서 마주친 이슈나 학습한 내용을 꾸준히 블로그에 기록하며 성장하는
              습관을 만들어가고 있습니다.
            </p>
          ))}
          <p className="text-right">
            <small>Latest Updated</small>{' '}
            <Badge color="secondary">
              {`${latestUpdated.toFormat(Util.LUXON_DATE_FORMAT.YYYY_DOT_LL_DOT_DD)}`}
            </Badge>
          </p>
          <p className="text-right" style={Style.sign}>
            {payload.sign}
          </p>
        </Col>
      </Row>
    </div>
  );
}
