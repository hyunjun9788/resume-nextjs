import { IProject } from '../component/project/IProject';
import abijou from '../asset/abijou_logo.png';

const project: IProject.Payload = {
  disable: false,
  title: 'WORK PROJECT',
  marginTop: '40px',
  list: [
    {
      title: '아비쥬 온라인 예약 서비스',
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
              content: 'SMS 요청 제한 에러코드를 파싱해 서버 잔여시간으로 재전송 타이머 동기화',
            },
            {
              content:
                '본인인증 폼을 mode prop 기반 단일 컴포넌트로 설계해 로그인·예약 화면에서 공통 사용',
            },
            // {
            //   content:
            //     'SMS 요청 제한 에러코드를 파싱해 서버가 내려준 잔여시간으로 재전송 타이머를 동기화',
            // },
            // {
            //   content:
            //     'mode prop 하나로 독립 로그인 페이지와 예약 플로우 내 간이 인증 팝업에서 동일 폼 컴포넌트를 재사용',
            // },
          ],
        },
        {
          content: '동시 요청 중복 갱신을 방지하는 액세스 토큰 자동 재발급 구조 설계',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                'Axios 인터셉터에서 401 응답 시 HttpOnly 쿠키의 refreshToken으로 재발급 후\n원 요청을 자동 재시도',
            },
            {
              content:
                '동시 401 발생 시 refresh API가 중복 호출되는 문제를 isRefreshing 플래그와 대기열로 해결,\n재발급 1회 후 대기 요청을 신규 토큰으로 일괄 재개',
            },
            {
              content:
                '갱신 실패 시 사용자 종속 쿼리 캐시만 선별 제거해 잔여 refetch로 인한 401 연쇄를 차단하며 로그아웃',
            },
            // {
            //   content:
            //     'Zustand persist의 hydration 완료 시점을 기다려 렌더하는 라우트 가드로 새로고침 시 화면 깜빡임과 오리다이렉트를 제거',
            // },
          ],
        },
        // {
        //   content: '마이페이지 폴더 구조 설계 및 API 연동',
        //   weight: 'SEMI_BOLD',
        //   descriptions: [
        //     // {
        //     //   content:
        //     //     '공통 레이아웃(데스크탑 sticky 사이드바 / 모바일 바텀시트)과 4개 서브페이지 구현',
        //     // },
        //     // {
        //     //   content:
        //     //     '지난 예약 조회의 필터·페이지 상태를 URL 쿼리 파라미터와 동기화해 새로고침·뒤로가기·공유 시에도 조회 조건이 유지되도록 구현',
        //     // },
        //     {
        //       content:
        //         '데스크탑 무한 스크롤과 모바일 페이지네이션을 단일 훅 인터페이스로 통합해 디바이스별 페이징 전략을 분리',
        //     },
        //     // {
        //     //   content:
        //     //     '동일 일자 내 예약 순서가 뒤섞이는 문제를 다중 정렬 파라미터(date → time → id) 적용으로 해결',
        //     // },
        //     // {
        //     //   content: '당일 예약 취소 방어 로직을 UI 노출 조건과 함수 레벨에 이중으로 적용',
        //     // },
        //   ],
        // },
        {
          content: 'FSD 아키텍처 계층 구조 설계 및 공통 기반 정비',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                'pages/widgets/features/entities/shared 계층 위반을 정리하고 로그인·마이페이지 폴더 구조를 재설계',
            },
            {
              content:
                '공통 컴포넌트(Input, Checkbox, Popup)와 재사용 커스텀 훅을 분리하고, 매직 스트링 상수화 및 any 타입 제거',
            },
            // {
            //   content:
            //     '팀 내 논의로만 공유되던 프론트엔드 코드 컨벤션을 종합해 Cursor Rules로 문서화',
            // },
            // {
            //   content: '백엔드 에러 응답 공통 처리 로직 추가 및 prod CI/CD 파이프라인 구축 참여',
            // },
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
                '예약·접수·상담·준비·시술·퇴원 6단계 컬럼형 보드와 사이드바(날짜 선택, 근무자 현황, 공지) 신규 개발',
            },
            // {
            //   content:
            //     '날짜 선택·직접 입력 캘린더와 고객명 검색을 조회 조건으로 묶어, 조건 변경 시 보드 카드와 근무자 현황이 함께 갱신되도록 데이터 흐름 구성',
            // },
          ],
        },
        {
          content: '코드 관리 페이지 리뉴얼 및 영업일 · 예약 허용량 관리 기능 개발',
          weight: 'SEMI_BOLD',
          descriptions: [
            {
              content:
                '코드 유형별 사용지점 · 가격 설정 팝업 컴포넌트를 조회/수정 모드로 분리하여 개발',
            },
            {
              content:
                '무한 스크롤 목록을 page 상태로 직접 누적하던 구조를 useInfiniteQuery 기반으로 전환하여,\n코드명 수정 후에도 목록에 이전 값이 남던 문제 해결',
            },
            {
              content:
                '캘린더 기반 영업일 · 휴무 · 예외 관리와 요일별 · 날짜별 예약 허용량 템플릿 시스템을 구현하고,\n저장 시 수정된 템플릿만 필터링해 요청하도록 처리',
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
  ],
};

export default project;
