import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { EmptyRowCol } from '.';
import { Style } from './Style';

export function CommonSection({
  title,
  marginTop,
  children,
}: PropsWithChildren<{ title: string; marginTop?: string }>) {
  return (
    <div style={{ ...Style.section, marginBottom: '32px' }}>
      <EmptyRowCol>
        <Row className="pb-2">
          <Col>
            <h2 style={{ ...Style.blue, ...Style.sectionTitle, marginTop }}>
              <span>{title}</span>
            </h2>
          </Col>
        </Row>
        {children}
      </EmptyRowCol>
    </div>
  );
}
