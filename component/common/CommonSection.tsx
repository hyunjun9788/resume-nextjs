import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { EmptyRowCol } from '.';

export function CommonSection({
  title,
  marginTop = '20px',
  children,
}: PropsWithChildren<{ title: string; marginTop?: string }>) {
  return (
    <div style={{ marginTop: '32px', marginBottom: '32px' }}>
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2 style={{ color: '#3c78d8', marginTop }}>
              <span>{title}</span>
            </h2>
          </Col>
        </Row>
        {children}
      </EmptyRowCol>
    </div>
  );
}
