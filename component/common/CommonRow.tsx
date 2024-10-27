import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IRow } from './IRow';
import { Style } from './Style';
import { CommonDescription } from './CommonDescription';
import wdyta from '../../asset/wdyta.jpg';
import sulsul from '../../asset/sulsul.jpg';

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
        <hr style={{ marginTop: '30px', marginBottom: '30px' }} />
      )}
      {type === 'education' && index > 0 ? (
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
                                src={sulsul}
                                width="90px"
                                height="24px"
                                alt="sulsul 서비스 url"
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
          {right.title ? <h4>{right.title}</h4> : ''}
          {right.detail ? <p style={{ ...Style.gray, margin: 0 }}>{right.detail}</p> : ''}
          {right.subTitle &&
            right.subTitle.map((v) => <p style={{ ...Style.gray, margin: 0 }}>{v}</p>)}
          {right.skill ? (
            <i style={{ ...Style.gray, ...Style.block, fontSize: '15px' }}>{right.skill}</i>
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
