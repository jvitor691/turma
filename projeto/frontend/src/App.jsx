import { Col, Row } from "antd";
import Cadastro from "./pages/Cadastro";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

function App() {
  return (
    <Row justify="center">
      <Col>
        <Routes>
          <Route path="/cadastro" element={<Cadastro />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Col>
    </Row>
  );
}

export default App;
