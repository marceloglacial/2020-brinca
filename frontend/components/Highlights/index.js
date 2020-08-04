import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from './styles.module.scss';

const HighLights = (props) => {
  return (
    <Container fluid>
      <Row className={styles.highlights}>
        <Container className='p-5'>
          <Row>
            <Col>
              <h3 className='text-center py-4'>Conheça o Brinca</h3>
            </Col>
          </Row>
          <Row>
            <Col className='text-center'>
              <Image
                src='/uploads/union.jpeg'
                alt='Highlights'
                className='mb-3'
                fluid
              />
              <h4>União</h4>
              <p>Integrando a comunidade Brasileira em Ottawa-Gatineau</p>
            </Col>
            <Col className='text-center'>
              <Image
                src='/uploads/collab.jpeg'
                alt='Highlights'
                className='mb-3'
                fluid
              />

              <h4>Colaboração</h4>
              <p>Apoiando o crescimento das famílias Brasileiras</p>
            </Col>
            <Col className='text-center'>
              <Image
                src='/uploads/diversitty.jpg'
                alt='Highlights'
                className='mb-3'
                fluid
              />
              <h4>Diversidade</h4> <p>Juntos somos mais fortes</p>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};
export default HighLights;
