import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IRow } from './IRow';
import { Style } from './Style';
import { CommonDescription } from './CommonDescription';
import wdyta from '../../asset/wdyta.jpg';
import sulsul from '../../asset/sulsul.jpg';
import pikiTalki from '../../asset/piki_talki.jpg';

export function CommonRows({
  index,
  payload,
  type,
}: PropsWithChildren<{ payload: IRow.Payload; index: number; type?: string }>) {
  const { left, right } = payload;

  const isNeedDescriptionPadding = !!(right.title || right.detail || right.skill);

  return (
    <div>
      {type === 'project' && index > 0 && (
        <hr style={{ marginTop: '30px', marginBottom: '50px' }} />
      )}
      {type === 'experience' && index > 0 ? (
        <hr style={{ marginTop: '30px', marginBottom: '30px' }} />
      ) : (
        ''
      )}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <Row>
            <Col md={12}>
              <h4 style={Style.gray}>{left.title}</h4>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '20px',
                  marginTop: '20px',
                }}
              >
                {left.url &&
                  left.url.map((urlItem, urlIndex) => (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                    >
                      {/* {urlIndex > 0 && '|'} */}
                      {urlIndex === 0 && <span style={{ fontWeight: 'normal' }}>Github</span>}
                      {urlIndex === 1 && <span style={{ fontWeight: 'normal' }}>서비스 URL</span>}

                      <span key={urlItem}>
                        <a href={urlItem} style={Style.gray} target="_blank" rel="noreferrer">
                          {index === 0 && urlIndex === 0 && (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                              <FontAwesomeIcon icon={faGithub} style={{ fontSize: '24px' }} />
                            </div>
                          )}
                          {index === 0 && urlIndex === 1 && (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                              <img
                                src={pikiTalki}
                                width="90px"
                                height="24px"
                                alt="피키토키 서비스 url"
                              />
                            </div>
                          )}
                          {index === 1 && urlIndex === 0 && (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                              <FontAwesomeIcon icon={faGithub} style={{ fontSize: '24px' }} />
                            </div>
                          )}
                          {index === 1 && urlIndex === 1 && (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                              <img
                                src={sulsul}
                                width="90px"
                                height="24px"
                                alt="sulsul 서비스 url"
                              />
                            </div>
                          )}
                          {index === 2 && urlIndex === 0 && (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                              <FontAwesomeIcon icon={faGithub} style={{ fontSize: '24px' }} />
                            </div>
                          )}
                          {index === 2 && urlIndex === 1 && (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                              <img src={wdyta} width="90px" height="24px" alt="wdyta 서비스 url" />
                            </div>
                          )}
                        </a>
                      </span>
                    </div>
                  ))}
              </div>
            </Col>
            {left.subTitle ? <Col md={12}>{left.subTitle}</Col> : ''}
          </Row>
        </Col>
        <Col sm={12} md={9}>
          {right.title ? (
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>{right.title}</h4>
          ) : (
            ''
          )}
          {right.detail ? <p style={{ ...Style.gray, margin: 0 }}>{right.detail}</p> : ''}
          {right.subTitle &&
            right.subTitle.map((v) => <p style={{ ...Style.gray, margin: 0 }}>{v}</p>)}
          <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
            {right.skill
              ? right.skill.map((v) => (
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
                ))
              : ''}
          </div>
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
