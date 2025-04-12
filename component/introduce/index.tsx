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

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  // const latestUpdated = DateTime.fromFormat(
  //   payload.latestUpdated,
  //   Util.LUXON_DATE_FORMAT.YYYY_LL_DD,
  // );
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
              <h3 style={{ fontWeight: 'bold', fontSize: '24px' }}>
                옆에 있는 동료들을 최우선으로 생각하는 프론트엔드 개발자{' '}
                <span style={{ color: '#3c78d8' }}>남현준</span>입니다.
              </h3>
              <br />
              <h3 style={{ fontWeight: 600, fontSize: '20px', color: '#3c78d8' }}>
                동료의 1초를 저의 1초보다 소중하게 생각합니다.
              </h3>
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  padding: '12px 20px',
                }}
              >
                <li>
                  동료들이 제 코드를 이해하고 활용하는 데 들이는 시간을 1초라도 줄이기 위해,
                  <span style={{ fontWeight: 600 }}> 가독성과 직관적인 코드 작성</span>
                  에 대해 <br />
                  꾸준히 고민하며 학습합니다.
                </li>
                <li>
                  제가 개발한 공통 모듈을 동료들이 사용할 때,
                  <span style={{ fontStyle: 'italic', color: '#898e96' }}>
                    {' '}
                    &apos;현준님 덕분에 편하게 개발했어요.&apos;
                  </span>{' '}
                  라는 말을 들으면 큰 보람을 느낍니다.
                </li>
                <li>
                  서비스 운영 중 발생한 문제를 빠르게 찾아내고 해결하기 위해 주도적으로 노력한 결과,{' '}
                  <span style={{ fontWeight: 600 }}>
                    서버 응답 속도를 분석·개선해 전체 서비스 속도를 약 21% 향상
                  </span>
                  시킨 경험이 있습니다.
                </li>
              </ul>
              {/* 네트워크 요청 및 리소스 로딩 시간을 분석한
              결과, 배포 환경에서의 설정이 주요 원인이라는 점을 확인했습니다. 이에 따라 CDN region
              설정을 최적화하여 사용자와 가장 가까운 서버에서 리소스를 제공하도록 구성하였고, 이를
              통해 서비스 전반의 서버 응답 속도를
              <span style={{ fontWeight: 'bold' }}> 약 21%</span> 개선했습니다. 성능 개선 이후,
              사용자들에게 보다 빠르고 최적화된 서비스 환경을 제공할 수 있었습니다. */}
              <br />
              {/* 팀원들의 빠르고 안전한 개발이 가능하도록 공용 컴포넌트 개발 시 고민을 신중하게 하는
              편입니다. 이미지, 아이콘들을 컴포넌트화를 시켜주며, 팀원들은 아이콘 및 이미지 이름을
              속성 값에 추가만 하도록 구현한 경험이 있습니다. 기본 스타일을 PR을 통해 기록하여 코드
              리뷰 시 스타일 가이드를 공유하고, 추가적인 스타일 적용도 가능하도록 유연성을
              확보했습니다. 이를 통해 팀원들로부터 긍정적인 피드백을 받을 수 있었습니다. */}
              <h3 style={{ fontWeight: 600, fontSize: '20px', color: '#3c78d8' }}>
                사용자 경험을 위한 성능 개선을 추구합니다.
              </h3>
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  padding: '12px 20px',
                }}
              >
                <li>
                  사용자 경험이 좋지 않은 것은{' '}
                  <span style={{ fontWeight: 600 }}>불편한 의자에 앉아 있는 것</span>과 같다고
                  생각합니다. 결국 그 의자에서 빨리 일어나는 것처럼, 사용자가 서비스에서 이탈하지
                  않도록 동료들과 함께 고민하고 개선점을 찾아내는 과정을 즐깁니다.
                </li>
                <li>
                  이미지 로딩 시간을 단축하는 것이 사용자 만족도 향상에 중요하다고 판단해 최적화를
                  제안했고, 작업한 결과 <br />
                  <span style={{ fontWeight: 600 }}>약 38%의 성능 개선을 달성했습니다.</span>
                </li>
              </ul>
            </p>
          ))}
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
