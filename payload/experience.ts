import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: true,
  list: [
    {
      title: '위니언',
      position: 'FE Developer',
      startedAt: '2025-06',
      endedAt: '2026-04',
      descriptions: [],
      projects: [
        {
          title: '아비쥬 피부과 차트 프로그램 (EMR)',
          tasks: ['영업일 관리 기능 개발', '코드관리 리뉴얼 페이지 개발'],
        },
        {
          title: '아비쥬 피부과 온라인 예약 서비스',
          tasks: ['로그인 · 본인인증 기능 개발', '마이페이지 개발'],
        },
      ],
    },
  ],
};

export default experience;
