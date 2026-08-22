import { Row, Col } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { Style } from '../common/Style';
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

function Component() {
  // const latestUpdated = DateTime.fromFormat(
  //   payload.latestUpdated,
  //   Util.LUXON_DATE_FORMAT.YYYY_LL_DD,
  // );
  // const latestUpdatedByNow = Math.floor(
  //   DateTime.local().diff(latestUpdated).milliseconds / 1000 / 60 / 60 / 24,
  // );

  return (
    // 프로필 이미지 래퍼의 pb-3 가 이미 여백을 만들어 공통 값보다 좁게 잡는다.
    <div style={{ ...Style.section, marginTop: '10px' }}>
      <Row>
        <Col sm={12} md={3}>
          <h2 style={{ ...Style.blue, ...Style.sectionTitle }}>INTRODUCE</h2>
        </Col>
        <Col sm={12} md={9}>
          <h3 style={{ fontWeight: 'bold', fontSize: '20px' }}>
            동료와 사용자의 시간을 아끼는 프론트엔드 개발자{' '}
            <span style={{ color: '#3c78d8' }}>남현준</span>입니다.
          </h3>
          <p style={{ marginTop: '24px', marginBottom: 0 }}>
            제가 개발한 공통 모듈을 동료들이 사용할 때,
            <span style={{ fontStyle: 'italic', color: '#898e96' }}>
              {' '}
              &apos;현준님 덕분에 편하게 개발했어요.&apos;
            </span>
            라는 말을 들으면 큰 보람을 느낍니다.
            <br />
            사용자 입장이 되어 고민하는 것을 좋아하며, 사용자가 멈칫하거나 기다리는 순간을 줄이는
            것을 중요하게 생각합니다.
          </p>
          {/* <p className="text-right">
            <small>Latest Updated</small>{' '}
            <Badge color="secondary">
              {`${latestUpdated.toFormat(Util.LUXON_DATE_FORMAT.YYYY_DOT_LL_DOT_DD)}`}
            </Badge>
          </p>
          <p className="text-right" style={Style.sign}>
            {payload.sign}
          </p> */}
        </Col>
      </Row>
    </div>
  );
}
