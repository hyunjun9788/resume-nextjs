import { IProject } from '../component/project/IProject';
import abijou from '../asset/abijou_logo.png';
import wdyta from '../asset/wdyta.jpg';
import sulsul from '../asset/sulsul.jpg';
import pikiTalki from '../asset/piki_talki.jpg';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '아비쥬 온라인 예약센터',
      deployUrl: 'https://abijouonline.com',
      deployLogo: abijou,
      startedAt: '2025-12',
      endedAt: '2026-04',
      detail: '피부과 온라인 예약 서비스 - 본인인증 로그인 · 마이페이지 담당',
      skill: [
        'Next.js (App Router)',
        'React',
        'TypeScript',
        'TanStack Query',
        'Zustand',
        'React Hook Form',
        'Zod',
        'Axios',
        'Tailwind',
      ],
      descriptions: [
        {
          content: '휴대폰 SMS 본인인증 로그인 플로우 전담 개발',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                '별도 회원가입 없이 고객명 + 휴대폰 인증만으로 진입하는 구조로,\nreact-hook-form과 Zod 스키마를 활용해 필드별 검증 규칙을 구현',
            },
            {
              content:
                '인증번호 유효시간 카운트다운과 만료 처리, 언마운트 시 인터벌 정리를 커스텀 훅으로 분리',
            },
            {
              content:
                'SMS 요청 제한 에러코드를 파싱해 서버가 내려준 잔여시간으로 재전송 타이머를 동기화하고,\n제한 상태 동안 인증 입력을 비활성화',
            },
            {
              content:
                'mode prop 하나로 독립 로그인 페이지와 예약 플로우 내 간이 인증 팝업에서 동일 폼 컴포넌트를 재사용',
            },
          ],
        },
        {
          content: '동시 요청 중복 갱신을 방지하는 액세스 토큰 자동 재발급 구조 설계',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                'Axios 인터셉터에서 401 응답 시 HttpOnly 쿠키의 refreshToken으로 재발급한 뒤 원 요청을 자동 재시도',
            },
            {
              content:
                '여러 요청이 동시에 401을 받을 경우 refresh API가 중복 호출되는 문제를 확인, isRefreshing 플래그와 대기열을 도입해 재발급은 1회만 수행하고 나머지 요청은 신규 토큰으로 일괄 재개',
            },
            {
              content:
                '갱신 실패 시 자동 로그아웃 처리 - 개인정보 관련 쿼리 캐시만 선별 제거해 잔여 refetch로 인한 401 연쇄를 차단',
            },
            {
              content:
                'Zustand persist의 hydration 완료 시점을 기다려 렌더하는 라우트 가드로 새로고침 시 화면 깜빡임과 오리다이렉트를 제거',
            },
          ],
        },
        {
          content: '마이페이지 전체를 폴더 구조 설계부터 API 연동까지 단독 담당',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                '공통 레이아웃(데스크탑 sticky 사이드바 / 모바일 바텀시트)과 4개 서브페이지(계정 정보, 예약 확인·취소, 지난 예약 조회, 보유 시술) 구현',
            },
            // {
            //   content:
            //     '지난 예약 조회의 필터·페이지 상태를 URL 쿼리 파라미터와 동기화해 새로고침·뒤로가기·공유 시에도 조회 조건이 유지되도록 구현',
            // },
            {
              content:
                '데스크탑 무한 스크롤(useInfiniteQuery)과 모바일 페이지네이션(useQuery + keepPreviousData)을 단일 훅 인터페이스로 통합해 디바이스별 페이징 전략을 분리',
            },
            // {
            //   content:
            //     '동일 일자 내 예약 순서가 뒤섞이는 문제를 다중 정렬 파라미터(date → time → id) 적용으로 해결',
            // },
            // {
            //   content: '당일 예약 취소 방어 로직을 UI 노출 조건과 함수 레벨에 이중으로 적용',
            // },
          ],
        },
        {
          content: 'FSD 아키텍처 레이어 정합성 리팩토링 및 공통 기반 정비',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                'pages/widgets/features/entities/shared 계층 위반을 정리하고 로그인·마이페이지 폴더 구조를 재설계',
            },
            {
              content:
                '공통 컴포넌트(Input, Checkbox, Popup, Pagination 등)와 재사용 커스텀 훅을 분리하고, 매직 스트링 상수화 및 any 타입 제거',
            },
            {
              content: '백엔드 에러 응답 공통 처리 로직 추가 및 prod CI/CD 파이프라인 구축 참여',
            },
          ],
        },
      ],
    },
    {
      title: '아비쥬 차트 프로그램 (EMR)',
      startedAt: '2025-07',
      endedAt: '2026-04',
      detail: '피부과 전자차트 프로그램 - 접수 현황 보드 · 코드 관리 · 영업일 관리 담당',
      skill: [
        'TypeScript',
        'React',
        'Next.js',
        'GraphQL (codegen)',
        'TanStack Query',
        'Recoil',
        'Tailwind',
      ],
      descriptions: [
        {
          content: '접수 현황 보드 신규 개발',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                '예약·접수·상담·시술·퇴원 5단계 컬럼형 보드를 설계부터 구현까지 담당. 보드를 컬럼 → 카드 리스트 → 환자 카드 단위로, 사이드바를 날짜 선택 / 근무자 현황 / 공지 영역으로 나눠 구성',
            },
            {
              content:
                '카드의 현재 위치를 탭으로 전환하면 상태 변경 API를 호출하고 보드를 리페치하도록 구현해, 화면에 보이는 접수 상태가 실제 데이터와 어긋나지 않도록 처리',
            },
            {
              content:
                '날짜 선택·직접 입력 캘린더와 고객명 검색을 조회 조건으로 묶어, 조건 변경 시 보드 카드와 근무자 현황이 함께 갱신되도록 데이터 흐름 구성',
            },
          ],
        },
        {
          content: '코드 관리 페이지 리뉴얼 및 영업일 · 예약 허용량 관리 기능 개발',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                '시술 · 선수금 · 할인 · 상품 · 멤버십 5종 코드를 한 화면에서 관리하도록 통합하고,\n코드 유형별 분기 렌더링과 대분류 · 중분류 매핑, 조회/수정 모드 및 관리자 권한별 UI 분기를 구현',
            },
            {
              content:
                '캘린더 기반 영업일 · 휴무 · 예외 관리와 요일별 · 날짜별 예약 허용량 템플릿 시스템을 구현하고,\n공휴일 템플릿 자동 매핑을 적용',
            },
          ],
        },
        // {
        //   content: '데이터 정합성과 사용자 실수를 방지하는 저장 플로우 설계',
        //   weight: 'SEMI_BOLD',
        //   descriptions: [
        //     {
        //       content:
        //         '저장 없이 페이지를 벗어날 때 경고를 노출하는 커스텀 훅을 Recoil 전역 상태와 함께 설계, 이후 팀 공통 훅으로 채택되어 다른 화면에도 적용',
        //     },
        //     {
        //       content:
        //         '팝업 언마운트 시 쿼리 캐시를 정리해 stale 데이터 노출을 차단하고, 필드 단위 유효성 검증과 개별 toast 피드백 체계를 수립',
        //     },
        //     {
        //       content:
        //         '초과결제 · 지급예정 선수금 타입별 분기 처리와 환불 동시성 체크 파라미터를 적용해 결제 도메인의 금액 오처리를 방지',
        //     },
        //     {
        //       content:
        //         '예약 허용량 저장 시 수정된 템플릿만 필터링해 요청하도록 처리, 불필요한 저장 트래픽 제거',
        //     },
        //   ],
        // },
        {
          content: '공통화 리팩토링을 통한 중복 제거',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                '화면마다 중복 구현돼 있던 고객 검색 UI를 단일 공통 컴포넌트로 통합,\n예약 등록 · 컴플레인 상담 · 멤버십 양도 · 고객 등록 · 현장 접수 등 6개 이상 화면에서 재사용',
            },
            {
              content:
                'props drilling 으로 전달되던 본원 여부(isHeadOffice) 판별 값을 Recoil atom 으로 대체해\n고객 · 컴플레인 · 예약현황 페이지의 의존 구조를 정리',
            },
          ],
        },
      ],
    },
    {
      title: '피키토키(Picki Talki)',
      githubUrl: 'https://github.com/dnd-side-project/dnd-12th-4-frontend',
      deployUrl: 'https://picki-talki.site/',
      deployLogo: pikiTalki,
      startedAt: '2024-12',
      endedAt: '2025-02',
      detail:
        '한때 가까웠지만 소원해진 그룹을 자연스럽게 다시 연결하고 추억을 함께 쌓는 관계 회복 서비스 ​ (디자이너 2 BE 2 FE 2)',
      skill: [
        'TypeScript',
        'Next.js',
        'NextAuth',
        'Tanstack Query',
        'Zustand',
        'React Hook Form',
        'Tailwind',
      ],
      descriptions: [
        {
          content: 'NextAuth 토큰 갱신 로직 개선하여 끊김 없는 사용자 경험 제공',
          postHref: 'https://hjdevlog0.tistory.com/11',
          descriptions: [
            // {
            //   content: 'NextAuth를 활용하여 카카오 소셜 로그인을 구현했으며, 서버 사이드에서 사용자 인증과 채널 정보를 검증해 상황에 따라 리다이렉트 처리',
            //   postHref: '',
            // },
            // {
            //   content: 'OAuth 지원 및 효율적인 토큰 관리 기능을 제공하는 NextAuth를 도입',
            //   postHref: '',
            // },

            // {
            //   content:
            //     'getServerSession을 사용하여 서버 사이드에서 기존 사용자 여부 및 채널 개수를 검증하고, 상황에 따른 리다이렉트 처리',
            //   postHref: '',
            // },
            // {
            //   content:
            //     '토큰 만료 시 refreshToken을 활용해 자동 로그인 유지 기능 구현하며 편리한 사용자 경험을 제공',
            //   postHref: '',
            // },
            // {
            //   content:
            //     '토큰 여부에 따라 middleware를 활용하여 인증이 필요한 페이지에 대한 접근 제어 구현',
            // },
            {
              content:
                '카카오 소셜 로그인을 구현하며, 서버 사이드에서 사용자 인증과 채널 정보를 검증해 상황에 따라 리다이렉트 처리',
              postHref: '',
            },
            {
              content:
                '사용자가 아무런 액션 없이 사이트에 머무를 경우, 토큰 만료 시점에도 jwt 콜백이 실행되지 않아 만료된 세션이 유지되는 문제 발견',
              postHref: '',
            },
            {
              content:
                '주기적으로 토큰 만료를 체크하여 useSession 훅의 update를 호출함으로써 jwt 콜백을 실행하고 세션을 갱신하며 해결',
              postHref: '',
            },
          ],
          weight: 'SEMI_BOLD',
        },
        {
          content: '퍼널(Funnel) 패턴을 활용한 회원가입 과정 플로우 구축',
          postHref: 'https://hjdevlog0.tistory.com/12',
          descriptions: [
            {
              content:
                '코드 흐름 파악과 전역 상태 관리의 어려움을 개선하고자 퍼널(Funnel) 패턴을 도입',
              postHref: '',
            },
            {
              content:
                '퍼널(Funnel) 패턴을 적용하여 회원 등록 과정(닉네임 설정, 채널 생성, 초대 코드 입력)을 단계별 진행 가능하도록 설계',
              postHref: '',
            },

            {
              content:
                'react-hook-form과 zodResolver를 도입하여 각 퍼널의 유효성 검증을 상위 컴포넌트에서 통합적으로 관리하도록 개선함.',
            },
          ],
          weight: 'SEMI_BOLD',
        },
        {
          content: '질문 및 답변 확인 페이지 개발',
          weight: 'SEMI_BOLD',

          descriptions: [
            {
              content:
                '선택한 탭(전체, 친구 시그널, 내 시그널)에 대한 정보는 URL로 상태를 관리하였고, startTransition을 활용하여 반응성을 유지함',
            },
          ],
        },
      ],
    },
    {
      title: '올인원 면접 서비스 SULSUL',
      githubUrl: 'https://github.com/sulsulsulsul/sulsul',
      deployUrl: 'https://www.sulsul-interview.kr/',
      deployLogo: sulsul,
      startedAt: '2024-07',
      endedAt: '2024-10',
      detail:
        '나의 자소서 기반으로 면접질문 예측 및 면접기출 100선 제공 서비스  (PM/디자이너  1 BE 2 FE 4)',
      skill: ['TypeScript', 'Next.js', 'Tanstack Query', 'Zustand', 'React Hook Form', 'Tailwind'],
      descriptions: [
        {
          content: 'useIntervalValue 커스텀 훅을 활용한 타이머 리렌더링 개선',
          postHref:
            'https://velog.io/@hyunjun9788/%ED%83%80%EC%9D%B4%EB%A8%B8-useInterval-%EC%BB%A4%EC%8A%A4%ED%85%80-%ED%9B%85-%ED%99%9C%EC%9A%A9%ED%95%98%EC%97%AC-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0',
          descriptions: [
            {
              content:
                '타이머 기능이 상위 컴포넌트에서 관리되어 불필요한 리렌더링이 발생하고, 타이머 로직의 재사용성 부족으로 코드 중복 및 유지보수 어려움 존재',
              postHref: '',
            },

            {
              content:
                'useIntervalValue 커스텀 훅 설계 타이머 상태를 훅 내부에서 관리하여 의존성 분리하고, 모듈화함으로써 불필요한 리렌더링 방지함',
              postHref: '',
            },
          ],
          weight: 'SEMI_BOLD',
        },
        {
          content: 'CDN region 최적화 -> 서버 응답 속도 21% 개선  (lighthouse 56점 -> 86점)',
          postHref:
            'https://velog.io/@hyunjun9788/varcel-%EB%B0%B0%ED%8F%AC-%ED%9B%84-%EC%86%8D%EB%8F%84%EA%B0%80-%EB%8A%90%EB%A0%A4%EC%A7%84-%EC%9D%B4%EC%8A%88',
          descriptions: [
            {
              content: '사용자들로부터 서비스 속도가 느리다는 피드백을 받음',
              postHref: '',
            },
            {
              content:
                '네트워크 요청 및 리소스 로딩 시간을 분석한 결과, 배포 환경에서의 설정이 주요 원인인 점을 파악',
              postHref: '',
            },
            {
              content:
                'CDN region 설정을 최적화하여 사용자와 가장 가까운 서버에서 리소스를 제공하도록 구성하였고, 이를 통해 서비스 전반의 서버 응답 속도를 약 21% 개선',
              postHref: '',
            },
            {
              content: '성능 개선 이후, 사용자들에게 보다 빠르고 최적화된 서비스 환경을 제공',
              postHref: '',
            },

            // {
            //   content: '반응형 디자인 구현을 통한 다양한 기기의 접근성 확보',
            // },
          ],
          weight: 'SEMI_BOLD',
        },

        {
          content: '전체 답변에 대해 무한 스크롤 기능 구현',
          weight: 'SEMI_BOLD',
          postHref:
            'https://velog.io/@hyunjun9788/%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%8B%A4%EC%9D%8C-%ED%8E%98%EC%9D%B4%EC%A7%80%EA%B9%8C%EC%A7%80-%EB%AF%B8%EB%A6%AC-%EA%B0%80%EC%A0%B8%EC%98%A4%EB%8A%94-%EC%9D%B4%EC%8A%88',
          descriptions: [
            {
              content:
                '답변 개수가 많아질 경우 불필요한 데이터 fetching으로 초기 로딩 속도 저하로 이어짐',
            },
            {
              content: 'useInfiniteQuery 훅의 캐싱 기능을 활용하여 무한 스크롤을 구현',
            },
            {
              content: '다음 답변 로딩에 대해 스켈레톤 UI를 적용하며 사용자 경험을 개선',
            },
          ],
        },
        {
          content:
            '다양한 화면 크기와 디바이스에서 일관된 경험을 제공하도록 반응형 디자인 및 스타일링 구현',
          weight: 'SEMI_BOLD',
        },
        // {
        //   content: '기출문제 페이지 개발',
        //   descriptions: [],
        //   weight: 'SEMI_BOLD',
        // },
        // {
        //   content: '답변 등록 및 수정 폼 개발',
        //   weight: 'SEMI_BOLD',

        //   descriptions: [
        //     {
        //       content:
        //         '답변 자동 임시 저장 및 불러오기 기능을 세션 동안만 유효하도록 하기 위해 SessionStorage를 사용하여 개발',
        //     },
        //   ],
        // },
        // {
        //   content: '답변 전체 보기 모달 개발',
        //   weight: 'SEMI_BOLD',

        //   descriptions: [
        //     {
        //       content:
        //         '추천 적용에 대해 즉각적인 반응을 보이고자 추천 버튼 클릭 시 Optimistic Update 적용',
        //     },
        //     {
        //       content:
        //         '현재 날짜를 기준으로 최근 4주차 selectBox를 구현하여 주차에 해당하는 데이터 패칭 구현',
        //     },
        //   ],
        // },
      ],
    },
    {
      title: 'WDYTA (이거어때)',
      githubUrl: 'https://github.com/Codeit-Part4-SFJs/WDYTA',
      deployUrl: 'https://wdyta.vercel.app/',
      deployLogo: wdyta,
      startedAt: '2024-05',
      endedAt: '2024-06',
      detail: '음악, 식당, 영화, 전자기기 등 다양한 분야의 상품을 리뷰하는 플랫폼 (FE 5)',
      skill: ['TypeScript', 'Next.js', 'Tanstack Query', 'Zustand', 'React Hook Form', 'Tailwind'],
      descriptions: [
        {
          content: '아이콘, 이미지, 상품 카드 UI를 모듈화하여 팀 개발 생산성 향상',
          postHref: 'https://velog.io/@hyunjun9788/WDYTA-Icon-Image',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                '프로젝트 내 아이콘과 이미지 리소스가 많아지면서, 이를 개별적으로 불러오고 관리하는 방식이 비효율적이라 판단',
            },
            {
              content:
                '팀원들이 공통 컴포넌트를 안전하고 효율적으로 사용할 수 있도록 TypeScript와 SVGR 라이브러리를 도입',
            },
            {
              content:
                'SVG 컴포넌트에 타입 기반 속성을 적용하며, 아이콘 및 이미지명을 props로 전달',
            },
            {
              content:
                '기본 스타일을 TSDoc 및 PR을 통해 기록하여 코드 리뷰 시 스타일 가이드를 공유하고, 추가적인 스타일 적용도 가능하도록 유연성을 확보',
            },
          ],
        },
        {
          content:
            '이미지 최적화를 통해 이미지 로딩 시간 1.8s에서 1.1s까지 단축 (약 38% 성능 개선)',
          weight: 'SEMI_BOLD',
          postHref:
            'https://velog.io/@hyunjun9788/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B5%9C%EC%A0%81%ED%99%94-prefetch',
          descriptions: [
            {
              content:
                '용량이 큰 이미지 파일일수록 프로필 이미지 변경 시 이미지 로딩 지연이 두드러져 사용자 경험에 부정적인 영향을 미칠거라고 판단',
            },
            {
              content:
                '모든 화면 크기에서 동일한 이미지 크기를 로드하여 불필요한 리소스 낭비가 발생, 네트워크 환경과 화면 크기에 맞춰 최적화된 이미지 제공이 필요하다고 결론',
            },
            {
              content:
                'next/image의 sizes 속성을 활용해 뷰포트 크기에 따라 최적화된 이미지 크기를 로드하고, 이미지 로딩 속도 약 38% 개선 및 LCP 지표 18% 단축',
            },
          ],
        },
        {
          content: '프로필 페이지 개발',
          weight: 'SEMI_BOLD',
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

        // {
        //   content: '팔로우 모달 개발 ',
        //   weight: 'SEMI_BOLD',
        //   descriptions: [
        //     {
        //       content: 'prefetchQuery를 도입하여 팔로워, 팔로잉 유저 목록 로딩 속도 약 52% 개선',
        //     },
        //     { content: '무한스크롤 및 스켈레톤 UI 적용' },
        //   ],
        // },
        // {
        //   content: 'REST API 엔드포인트 설계',
        //   weight: 'SEMI_BOLD',
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
