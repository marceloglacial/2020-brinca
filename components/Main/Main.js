import { Container, Row, Col } from 'react-bootstrap';

const Main = (props) => {
  return (
    <Container>
      <Row className='py-0 py-sm-5'>
        <Col>{props.children}</Col>
      </Row>
    </Container>
  );
};
export default Main;
