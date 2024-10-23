import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { IRow } from './IRow';
import { Style } from './Style';
import { CommonDescription } from './CommonDescription';

export function CommonRows({
  index,
  payload,
}: PropsWithChildren<{ payload: IRow.Payload; index: number }>) {
  const { left, right } = payload;

  const isNeedDescriptionPadding = !!(right.title || right.detail || right.skill);

  return (
    <div>
      {index > 0 ? <hr style={{ marginTop: '30px', marginBottom: '30px' }} /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <Row>
            <Col md={12}>
              <h4 style={Style.gray}>{left.title}</h4>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '5px' }}>
                {left.url &&
                  left.url.map((urlItem, urlIndex) => (
                    <>
                      {urlIndex > 0 && '|'}
                      <span key={urlItem}>
                        <a href={urlItem} style={Style.gray} target="_blank" rel="noreferrer">
                          {urlIndex === 0 ? 'github' : '서비스 URL'}
                        </a>
                      </span>
                    </>
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
