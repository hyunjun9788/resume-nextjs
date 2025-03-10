import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '피키토키(Picki Talki)',
      githubUrl: 'https://github.com/dnd-side-project/dnd-12th-4-frontend',
      deployUrl: 'https://picki-talki.site/',
      startedAt: '2024-12',
      endedAt: '2025-02',
      detail: '한때 가까웠지만 서먹해지는 그룹의 관계 유지를 돕는 서비스 (디자이너 2 BE 2 FE 2)',
      skill: 'TypeScript, Next.js, Tanstack Query, Zustand, React Hook Form, Tailwind',
      descriptions: [
        {
          content: 'NextAuth를 활용한 로그인 및 회원가입 기능 구현',
          href: 'https://hjdevlog0.tistory.com/11',
          descriptions: [
            {
              content:
                'OAuth 지원 및 효율적인 토큰 관리 기능을 제공하여 보안성을 강화할 수 있다고 판단해 NextAuth를 도입',
              href: '',
            },
            {
              content:
                '카카오 API에서 받은 accessToken을 백엔드 API로 전달하여, 새로운 accessToken과 refreshToken을 발급받고 이를 세션에서 관리',
              href: '',
            },

            {
              content:
                'getServerSession을 사용하여 서버 사이드에서 사용자 인증을 검증하고, 기존 사용자 여부에 따른 리다이렉트 처리',
              href: '',
            },
            {
              content:
                '토큰 만료 시 refreshToken을 활용해 자동 로그인 유지 기능 구현하며 편리한 사용자 경험 제공',
              href: '',
            },
            {
              content:
                '토큰 여부에 따라 middleware를 활용하여 인증이 필요한 페이지에 대한 접근 제어 구현',
            },
          ],
          weight: 'MEDIUM',
        },
        {
          content: '퍼널(Funnel) 패턴을 활용한 회원가입 과정 플로우 구축',
          href: 'https://hjdevlog0.tistory.com/12',
          descriptions: [
            {
              content:
                '코드 흐름 파악과 전역 상태 관리의 어려움을 개선하고자 퍼널(Funnel)패턴을 도입',
              href: '',
            },
            {
              content:
                '퍼널(Funnel) 패턴을 적용하여 회원 등록 과정(닉네임 설정, 채널 생성, 초대 코드 입력)을 단계별 진행 가능하도록 설계',
              href: '',
            },
            {
              content: '가입 진행 상태를 로컬 상태로 관리',
              href: '',
            },
            {
              content:
                '입력값 검증과 API 요청 최적화를 위해 react-hook-form과 zodResolver를 도입. 이전 페이지의 입력값을 유지하여 단계별 검증을 수행하고, 최종 페이지에서만 API 요청을 보내 불필요한 요청을 방지',
            },
          ],
          weight: 'MEDIUM',
        },
        {
          content: '질문 및 답변 확인 페이지 개발',
          weight: 'MEDIUM',

          descriptions: [
            {
              content:
                '선택한 탭(전체, 친구 시그널, 내 시그널)에 대한 정보는 url로 상태를 관리하였고, startTransition을 활용하여 반응성을 유지함',
            },
          ],
        },
      ],
    },
    {
      title: '올인원 면접 서비스 SULSUL',
      githubUrl: 'https://github.com/sulsulsulsul/sulsul',
      deployUrl: 'https://www.sulsul-interview.kr/',
      startedAt: '2024-07',
      endedAt: '2024-10',
      detail:
        '나의 자소서 기반으로 면접질문 예측 및 면접기출 100선 제공 서비스  (PM/디자이너  1 BE 2 FE 4)',
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
              content:
                'CDN region 설정을 최적화하여 서버 응답 속도 약 21% 개선  (lighthouse 기준 56점 -> 86점)',
              href:
                'https://velog.io/@hyunjun9788/varcel-%EB%B0%B0%ED%8F%AC-%ED%9B%84-%EC%86%8D%EB%8F%84%EA%B0%80-%EB%8A%90%EB%A0%A4%EC%A7%84-%EC%9D%B4%EC%8A%88',
            },
            {
              content: '반응형 디자인 구현을 통한 다양한 기기의 접근성 확보',
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
                '답변 자동 임시 저장 및 불러오기 기능을 세션 동안만 유효하도록 하기 위해 SessionStorage를 사용하여 개발',
            },
          ],
        },
        {
          content: '답변 전체 보기 모달 개발',
          weight: 'MEDIUM',

          descriptions: [
            {
              content: '추천 버튼 클릭 시 Optimistic Update 적용',
            },
            {
              content:
                '현재 날짜를 기준으로 최근 4주차 selectBox를 구현하여 주차에 해당하는 데이터 패칭 구현',
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
      detail: '음악, 식당, 영화, 전자기기 등 다양한 분야의 상품을 리뷰하는 플랫폼 (FE 5)',
      skill:
        'TypeScript, Next.js, Zustand, Tailwind CSS, Tanstack Query, React-Hook-Form, storybook',
      descriptions: [
        {
          content: '아이콘, 이미지, 상품 카드 공통 컴포넌트 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '팀원들이 효율적으로 사용할 수 있도록 TypeScript와 SVGR 라이브러리를 도입하여 SVG 컴포넌트에 타입 기반 속성을 적용',
              href: 'https://velog.io/@hyunjun9788/WDYTA-Icon-Image',
            },
          ],
        },
        {
          content: '프로필 페이지 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'prefetchQuery 도입하여 상품 카드 로딩 속도 566ms에서 307ms까지 단축하여 약 45% 성능 개선',
            },
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
                '이미지 최적화를 통해 파일 크기를 줄임으로써 로딩 시간 1.8s에서 1.1s까지 단축 (약 38%의 성능 개선)',
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
              content: 'prefetchQuery를 도입하여 팔로워, 팔로잉 유저 목록 로딩 속도 약 52% 개선',
            },
            { content: '무한스크롤 및 스켈레톤 UI 적용' },
          ],
        },
        // {
        //   content: 'REST API 엔드포인트 설계',
        //   weight: 'MEDIUM',
        //   descriptions: [
        //     {
        //       content:
        //         'REST API 엔드포인트 설계를 통해 효율적인 데이터 흐름을 구축하고, 클라이언트-서버 간 통신 안정성을 높임',
        //     },
        //   ],
        // },
      ],
    },
  ],
};

export default project;
