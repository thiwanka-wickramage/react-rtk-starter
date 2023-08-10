import { Col, Container, Row } from 'react-bootstrap';
import styles from './styles.module.scss';
import Masthead from '../components/masthead';

const AppLayout = () => {
  return (
    <>
      <Masthead />
      <Container className={styles.primary_m}>
        <Row>
          <Col>
            <p> hello </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AppLayout;
