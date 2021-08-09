import './App.scss';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import  NavigationComponent  from './components/navigation/navigation.component';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs lg="3" className="nav-col">
            <NavigationComponent></NavigationComponent>
          </Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
