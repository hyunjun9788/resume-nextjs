import { CSSProperties } from 'react';

/** Style 추론을 위하여.. */
type TStyleKey =
  | 'blue'
  | 'gray'
  | 'sectionTitle'
  | 'itemTitle'
  | 'itemDate'
  | 'section'
  | 'block'
  | 'global'
  | 'sign'
  | 'profileImg'
  | 'footerCover'
  | 'footer'
  | 'skillKeywordBadge';

export const Style: Record<TStyleKey, CSSProperties> = {
  blue: {
    color: '#3c78d8',
  },

  gray: {
    color: 'gray',
  },

  /** 섹션 제목(INTRODUCE, SKILL, EDUCATION ...) 공통 크기. 색상은 각 섹션에서 지정한다. */
  sectionTitle: {
    fontSize: '24px',
  },

  /** 섹션 사이 간격. 모든 섹션이 공유하므로 여기 한 곳만 바꾸면 전체에 반영된다. */
  section: {
    marginTop: '20px',
  },

  /** 각 항목 제목(회사명, 프로젝트명, 교육명 ...) 공통 크기. */
  itemTitle: {
    fontSize: '20px',
  },

  /** 각 항목 왼쪽에 표기하는 기간 공통 크기. */
  itemDate: {
    fontSize: '18px',
  },
  block: {
    display: 'block',
  },
  global: {
    fontFamily: 'Pretendard, sans-serif',
    fontWeight: 300,
    wordWrap: 'break-word',
    wordBreak: 'keep-all',
    lineHeight: 1.8,
  },

  sign: {
    fontFamily: "'Parisienne', cursive",
    fontSize: '1.5em',
  },

  profileImg: {
    maxHeight: '320px',
  },

  footerCover: {
    backgroundColor: '#f5f5f5',
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: '50px',
    height: '80px',
  },

  footer: {
    // paddingTop: '10px',
  },

  skillKeywordBadge: {
    fontWeight: 400,
  },
};
