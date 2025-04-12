import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { EmptyRowCol } from '.';

export function CommonSection({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <div className="mt-5 mb-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2 style={{ color: '#3c78d8', marginTop: title === 'EDUCATION' ? '230px' : '30px' }}>
              <span>{title}</span>
            </h2>
          </Col>
        </Row>
        {children}
      </EmptyRowCol>
    </div>
  );
}
