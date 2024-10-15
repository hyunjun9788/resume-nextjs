import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '코드잇 스프린트 프론트엔드 엔지니어 부트캠프 수료',
      subTitle:
        '전반적인 프론트엔드 기술(HTML, CSS, JavaScript, TypeScript, Next.js)을 학습하며 팀 프로젝트를 통해 협업 능력을 키우고, 배포까지의 과정을 경험했습니다.',
      startedAt: '2023-12',
      endedAt: '2024-06',
    },
    {
      title: '충남대학교 정보통계학과 (편입)',
      subTitle: 'R 프로그래밍 언어를 통해 다양한 분석 기법을 활용한 데이터 분석을 공부했습니다.',
      startedAt: '2021-03',
      endedAt: '2023-08',
    },
    {
      title: '영남대학교 파이버시스템공학과',
      subTitle: '',
      startedAt: '2017-03',
      endedAt: '2018-03',
    },
  ],
};

export default education;
