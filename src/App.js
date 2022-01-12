import { Col, Container, Row } from "react-bootstrap";
import "./App.scss";

//*components
import MyOffcanvas from "./components/MyOffcanvas";
import Main from "./components/Main";
import MyNav from "./components/MyNav";

function App() {
  return (
    <Container fluid className="app">
      <MyNav />
      <Row>
        <Col xxl="3" xl="3" lg="3" md="4" sm="11" xs="11">
          <MyOffcanvas className="sticky-top" />
        </Col>
        <Col>
          <Container>
            <Main />
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
