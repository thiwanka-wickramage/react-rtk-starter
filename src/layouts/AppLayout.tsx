import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './styles.module.scss';

const AppLayout = () => {
  return (
    <Container className={styles.primary_m}>
      <Row>
        <Col>
          <p> hello </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AppLayout;
