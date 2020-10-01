import { Row, Col } from 'react-bootstrap';

const Main = (props) => {
  return (
    <main className='container'>
      <Row>
        <Col>{props.children}</Col>
      </Row>
    </main>
  );
};
export default Main;
