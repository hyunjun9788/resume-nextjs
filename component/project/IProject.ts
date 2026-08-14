import { IRow } from '../common/IRow';
import { ICommon } from '../common/ICommon';

export declare namespace IProject {
  /**
   * ### Sample Rendering
   *
   * ![image](https://user-images.githubusercontent.com/8033320/78034257-726f1480-73a2-11ea-9bbe-fc9bde4551d1.png)
   *
   * @example https://github.com/uyu423/resume-nextjs/blob/master/payload/project.ts
   */
  export interface Payload extends ICommon.Payload {
    /** ### 프로젝트 리스트 */
    list: Item[];

    /**
     * ### 섹션 타이틀
     *
     * @description `undefined` 일 경우 'PROJECT' 로 표기된다. 회사 프로젝트와 사이드 프로젝트처럼 섹션을 나눠 렌더링할 때 사용한다.
     */
    title?: string;

    /**
     * ### 섹션 타이틀 상단 여백
     *
     * @description `undefined` 일 경우 '30px' 이 적용된다. 인쇄 시 페이지 나눔 위치를 조정할 때 사용한다.
     */
    marginTop?: string;
  }

  export interface Item {
    /** ### 프로젝트 제목 */
    title: string;
    githubUrl?: string; // GitHub URL 추가
    deployUrl?: string; // 배포 URL 추가
    /**
     * ### 서비스 URL 에 노출할 로고 이미지
     *
     * @description `undefined` 일 경우 도메인 텍스트가 대신 노출된다.
     */
    deployLogo?: string;
    /** ### 어디서 수행했는지 (or subtitle) */
    detail: string;

    skill: string[];
    /**
     * ### 프로젝트 시작일
     *
     * @format YYYY-MM
     * @example "2018-02"
     */
    startedAt: string;

    /**
     * ### 프로젝트 종료일
     *
     * @format YYYY-MM
     * @example "2021-02"
     * @description `undefined` 일 경우 나타나지 않는다.
     */
    endedAt?: string;

    /**
     * ### 프로젝트 설명
     */
    descriptions: IRow.Description[];
  }
}
