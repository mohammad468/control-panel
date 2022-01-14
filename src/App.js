import { Col, Container, Row } from "react-bootstrap";
import "./App.scss";

// *SPA
import { BrowserRouter, Routes, Route } from "react-router-dom";

//*components
import MyOffcanvas from "./components/MyOffcanvas";
import Main from "./components/Main";
import MyNav from "./components/MyNav";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="app">
        <MyNav />
        <Row>
          <MyOffcanvas className="sticky-top" />
          <Main />
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
