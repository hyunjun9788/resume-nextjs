import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IRow } from './IRow';
import { Style } from './Style';
import { CommonDescription } from './CommonDescription';

function createUrlContent({ href, label, logo, icon }: IRow.LeftUrl) {
  if (logo) {
    // 로고마다 가로세로 비율이 달라 높이만 고정하고 너비는 비율에 맞춰 늘어나도록 둔다.
    return (
      <img
        src={logo}
        alt={`${label} 로고`}
        style={{ height: '24px', width: 'auto', maxWidth: '100px', objectFit: 'contain' }}
      />
    );
  }
  if (icon === 'github') {
    return <FontAwesomeIcon icon={faGithub} style={{ fontSize: '22px' }} />;
  }
  return <span>{href.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>;
}

export function CommonRows({
  index,
  payload,
  type,
  marginTop,
  titleFontSize,
}: PropsWithChildren<{
  payload: IRow.Payload;
  index: number;
  type?: string;
  marginTop?: string;
  titleFontSize?: string;
}>) {
  const { left, right } = payload;

  const isNeedDescriptionPadding = !!(right.title || right.detail || right.skill);

  return (
    <div>
      {type === 'project' && index > 0 && (
        <hr style={{ marginTop: '24px', marginBottom: '24px' }} />
      )}
      {type === 'experience' && index > 0 ? (
        <hr style={{ marginTop: '12px', marginBottom: '20px' }} />
      ) : (
        ''
      )}
      {/* 구분선은 제자리에 두고 본문만 내리기 위해 <hr> 과 상쇄되지 않는 padding 으로 준다. */}
      <Row style={{ paddingTop: marginTop }}>
        <Col sm={12} md={3} className="text-md-center">
          <Row>
            <Col md={12}>
              <h4 style={{ ...Style.gray, fontSize: '20px' }}>{left.title}</h4>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  gap: '20px',
                  marginTop: '12px',
                }}
              >
                {left.url &&
                  left.url.map((urlItem) => (
                    <div
                      key={urlItem.href}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      {urlItem.icon === 'github' ? (
                        ''
                      ) : (
                        <span style={{ fontWeight: 'normal' }}>{urlItem.label}</span>
                      )}
                      <a
                        href={urlItem.href}
                        style={Style.gray}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={urlItem.label}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', height: '24px' }}>
                          {createUrlContent(urlItem)}
                        </div>
                      </a>
                    </div>
                  ))}
              </div>
            </Col>
            {left.subTitle ? <Col md={12}>{left.subTitle}</Col> : ''}
          </Row>
        </Col>
        <Col sm={12} md={9}>
          {right.title ? (
            <h4
              style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: titleFontSize }}
            >
              {right.title}
            </h4>
          ) : (
            ''
          )}
          {right.detail ? <p style={{ ...Style.gray, margin: 0 }}>{right.detail}</p> : ''}
          {right.subTitle &&
            right.subTitle.map((v) => <p style={{ ...Style.gray, margin: 0 }}>{v}</p>)}
          {right.skill ? (
            <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
              {right.skill.map((v) => (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#f0f0f0', // 연한 회색 배경
                    color: '#3c78d8', // 글자색
                    padding: '1px 4px', // 내부 여백
                    borderRadius: '4px', // 모서리 둥글게
                    fontSize: '12px',
                    fontWeight: 500,
                  }}
                >
                  {v}
                </div>
              ))}
            </div>
          ) : (
            ''
          )}
          {right.descriptions ? (
            <CommonDescription
              descriptions={right.descriptions}
              option={{ padding: isNeedDescriptionPadding }}
            />
          ) : (
            ''
          )}
        </Col>
      </Row>
    </div>
  );
}
