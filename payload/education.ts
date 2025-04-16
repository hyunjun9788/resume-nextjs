import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: "IT 연합 동아리 'DND'",
      subTitle: [
        '디자이너, 백엔드, 프론트엔드 개발자와 함께 기획 단계부터 협업하며 하나의 팀 프로젝트를 진행했습니다.',
      ],

      startedAt: '2024-12',
      endedAt: '2025-02',
    },
    {
      title: '왓에버 멘토링',
      subTitle: [
        'JavaScript 코어 지식을 학습하고, SPA를 직접 구현하며 SPA에 대한 이해도를 향상시켰습니다.',
        'JavaScript로 Virtual DOM을 구현하며 JSX의 트랜스파일 과정을 이해하고, 동작 원리를 학습했습니다.',
      ],

      startedAt: '2024-12',
      endedAt: '2025-04',
    },
    {
      title: '코드잇 스프린트 프론트엔드 엔지니어 부트캠프 수료',
      subTitle: [
        'GitHub를 통한 협업과 코드 리뷰 과정을 통해 협업 능력을 키웠으며, 프로젝트 배포까지 완료했습니다.',
        '팀 프로젝트에서 Next.js를 활용해 SSR 적용해보며, CSR 차이를 경험하고 이해했습니다.',
      ],

      startedAt: '2023-12',
      endedAt: '2024-06',
    },
    {
      title: '충남대학교 정보통계학과',
      subTitle: [' R 프로그래밍을 활용한 데이터 분석 및 다양한 분석 기법에 대해 학습했습니다.'],
      startedAt: '2021-03',
      endedAt: '2023-08',
    },
    // {
    //   title: '영남대학교 파이버시스템공학과',
    //   subTitle: [],
    //   startedAt: '2017-03',
    //   endedAt: '2018-03',
    // },
  ],
};

export default education;
