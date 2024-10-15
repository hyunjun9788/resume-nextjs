import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '올인원 면접 서비스 SULSUL',
      githubUrl: 'https://github.com/sulsulsulsul/sulsul',
      deployUrl: 'https://www.sulsul-interview.kr/',
      startedAt: '2024-07',
      endedAt: '2024-10',
      detail: '나의 자소서 기반으로 면접질문 예측 및 면접기출 100선 제공 서비스',
      skill: 'TypeScript, Next.js, Tanstack Query, Zustand, React Hook Form, Tailwind',
      descriptions: [
        {
          content: '기출문제 페이지 개발',
          descriptions: [
            {
              content: 'useInterval 커스텀 훅을 활용한 타이머 리렌더링 개선',
              href:
                'https://velog.io/@hyunjun9788/%ED%83%80%EC%9D%B4%EB%A8%B8-useInterval-%EC%BB%A4%EC%8A%A4%ED%85%80-%ED%9B%85-%ED%99%9C%EC%9A%A9%ED%95%98%EC%97%AC-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0',
            },
            {
              content: 'CDN region 오 설정 이슈를 해결하여 서버 응답 속도 약 93% 개선',
              href:
                'https://velog.io/@hyunjun9788/varcel-%EB%B0%B0%ED%8F%AC-%ED%9B%84-%EC%86%8D%EB%8F%84%EA%B0%80-%EB%8A%90%EB%A0%A4%EC%A7%84-%EC%9D%B4%EC%8A%88',
            },
          ],
          weight: 'MEDIUM',
        },
        {
          content: '답변 등록 및 수정 폼 개발',
          weight: 'MEDIUM',

          descriptions: [
            {
              content:
                '답변 자동 임시 저장 및 불러오기 기능을 세션 동안만 유효하도록 하기 위해 SessionStorage를 사용하여 개발 ',
            },
          ],
        },
        {
          content: '답변 전체 보기 모달 개발',
          weight: 'MEDIUM',

          descriptions: [
            {
              content: '추천 버튼 클릭 시 optimistic Update 적용',
            },
            {
              content:
                '오늘 날짜를 기준으로 최근 4주차 selectBox를 구현하여 주차에 해당하는 데이터 패칭 구현 ',
            },
            {
              content: '전체 답변에 대해 무한 스크롤 적용',
              href:
                'https://velog.io/@hyunjun9788/%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%8B%A4%EC%9D%8C-%ED%8E%98%EC%9D%B4%EC%A7%80%EA%B9%8C%EC%A7%80-%EB%AF%B8%EB%A6%AC-%EA%B0%80%EC%A0%B8%EC%98%A4%EB%8A%94-%EC%9D%B4%EC%8A%88',
            },
          ],
        },
      ],
    },
    {
      title: 'WDYTA (이거어때)',
      githubUrl: 'https://github.com/Codeit-Part4-SFJs/WDYTA',
      deployUrl: 'https://wdyta.vercel.app/',
      startedAt: '2024-05',
      endedAt: '2024-06',
      detail:
        '음악, 식당, 영화, 강의, 여행지, 전자기기, 호텔, 와인, 옷, 앱 등 다양한 분야의 상품을 리뷰하는 플랫폼',
      skill:
        'TypeScript, Next.js, Zustand, Tailwind CSS, Tanstack Query, React-Hook-Form, storybook',
      descriptions: [
        {
          content: '아이콘, 이미지, 상품 카드 공통 컴포넌트 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '팀원들이 효율적으로 사용할 수 있도록 TypeScript와 SVGR 라이브러리를 활용하여 SVG 컴포넌트에 타입 기반 속성을 적용.',
              href: 'https://velog.io/@hyunjun9788/WDYTA-Icon-Image',
            },
          ],
        },
        {
          content: '프로필 페이지 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '상품 카드 로딩 속도 566ms에서 307ms까지 단축하여 약 45% 성능 개선' },
            { content: '다양한 디바이스에서 최적의 반응형 화면을 제공하여 사용성 향상' },
            {
              content: '사용자에게 즉시 반응을 보이기 위해 팔로우 버튼에 Optimistic Update 적용',
            },
          ],
        },
        {
          content: '프로필 편집 모달 개발 ',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '이미지 최적화를 통해 파일 크기를 줄임으로써 로딩 시간 651ms에서 308ms까지 단축 (약 53%의 성능 개선)',
              href:
                'https://velog.io/@hyunjun9788/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B5%9C%EC%A0%81%ED%99%94-prefetch',
            },
          ],
        },
        {
          content: '팔로우 모달 개발 ',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'prefetchQuery를 활용한 팔로워, 팔로잉 유저 목록 로딩 속도 약 52% 개선',
            },
            { content: '무한스크롤 및 스켈레톤 UI 적용' },
          ],
        },
      ],
    },
  ],
};

export default project;
