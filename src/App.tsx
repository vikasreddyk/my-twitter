import './App.scss';
import { Container, Row, Col } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import  NavigationComponent  from './components/navigation/navigation.component';
import ExploreComponent from './components/explore/explore.component';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
        <Router>
          <Col xs lg="3" className="nav-col">
            <NavigationComponent></NavigationComponent>
          </Col>
          <Col>
              <Switch>
                <Route path="/explore">
                  <ExploreComponent></ExploreComponent>
                </Route>
                <Route path="/favorites">
                  <h1>Favorites</h1>
                </Route>
                <Route path="/">
                  <Redirect to="/explore" />
                </Route>
              </Switch>
          </Col>
          </Router>
        </Row>
      </Container>
    </div>
  );
}

export default App;
