import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '코드잇 스프린트 프론트엔드 엔지니어 부트캠프 수료',
      subTitle: [
        '- GitHub를 통한 협업과 코드 리뷰 과정을 통해 협업 능력을 키웠으며, 프로젝트 배포까지 완료했습니다.',
        '- 팀 프로젝트에서 Next.js를 활용해 SSR 적용해보며, CSR 차이를 경험하고 이해했습니다.',
      ],

      startedAt: '2023-12',
      endedAt: '2024-06',
    },
    {
      title: '충남대학교 정보통계학과 (편입)',
      subTitle: [
        '- 편입을 목표로 군 복무동안 전공 공부와 학점은행제를 병행하며, 꾸준한 노력 끝에 2년 동안 140학점을 이수하고 편입에 성공했습니다.',
        '- R 프로그래밍을 활용한 데이터 분석 및 다양한 분석 기법에 대해 학습했습니다.',
      ],
      startedAt: '2021-03',
      endedAt: '2023-08',
    },
    {
      title: '영남대학교 파이버시스템공학과',
      subTitle: [],
      startedAt: '2017-03',
      endedAt: '2018-03',
    },
  ],
};

export default education;
