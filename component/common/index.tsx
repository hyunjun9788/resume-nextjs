import { Row, Col } from 'reactstrap';
import { PropsWithChildren } from 'react';

export function EmptyRowCol<T = {}>({ children }: PropsWithChildren<T>) {
  return (
    <Row>
      <Col>{children}</Col>
    </Row>
  );
}

export function HrefTargetBlank({ url, text }: PropsWithChildren<{ url: string; text?: string }>) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      style={{
        textDecoration: 'underline',
        color: '#3c78d8',
        textDecorationThickness: '1px',
        textUnderlineOffset: '5px',
      }}
    >
      {text || url}
    </a>
  );
}
