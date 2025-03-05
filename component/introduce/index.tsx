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
    <div className="mt-5" style={{ marginBottom: '350px' }}>
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
              있습니다. 기존 1.8초가 소요되던 이미지 업로드 기능을 Next.js의 next/image 최적화
              기능과 함께 sizes 속성을 활용하여 디바이스별로 적절한 해상도의 이미지를 제공하도록
              개선하였습니다. 이를 통해 불필요한 리소스 로딩을 줄이고, 최적화된 이미지를 제공하여
              업로드 속도를 1.1초로 단축(<span style={{ fontWeight: 'bold' }}>약 38.7%</span> 성능
              향상)하였습니다.
              <br />
              <br /> 실제 사용자로부터 서비스 이용 속도가 느리다는 피드백을 받아, 이에 대한 원인을
              분석하여 성능을 개선한 경험이 있습니다. 네트워크 요청 및 리소스 로딩 시간을 분석한
              결과, 배포 환경에서의 설정이 주요 원인이라는 점을 확인했습니다. 이에 따라 CDN region
              설정을 최적화하여 사용자와 가장 가까운 서버에서 리소스를 제공하도록 구성하였고, 이를
              통해 서비스 전반의 서버 응답 속도를
              <span style={{ fontWeight: 'bold' }}> 약 21%</span> 개선했습니다. 성능 개선 이후,
              사용자들에게 보다 빠르고 최적화된 서비스 환경을 제공할 수 있었습니다.
              <br />
              <br />
              팀원들의 빠르고 안전한 개발이 가능하도록 공용 컴포넌트 개발 시 고민을 신중하게 하는
              편입니다. 이미지, 아이콘들을 컴포넌트화를 시켜주며, 팀원들은 아이콘 및 이미지 이름을
              속성 값에 추가만 하도록 구현한 경험이 있습니다. 기본 스타일을 PR을 통해 기록하여 코드
              리뷰 시 스타일 가이드를 공유하고, 추가적인 스타일 적용도 가능하도록 유연성을
              확보했습니다. 이를 통해 팀원들로부터 긍정적인 피드백을 받을 수 있었습니다.
              <br />
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
