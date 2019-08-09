import React from 'react';
import './App.css';
import {Row, Col, Container} from 'react-bootstrap'

const App: React.FC = () => {
  return (
    <div className="App">
      <Container fluid={true}>
        <Row id="main-block">
          <Header />
        </Row>
      </Container>
    </div>
  );
}

const Header: React.FC = () => {
  return (
    <>
      <Col
        id="navigation"
        className="text-center p-0"
        xs={{ span:12 }}
        sm={{ span: 10, offset: 1 }} >

        <p id="navigation-header-primary">Trump Financial</p>
        <p id="navigation-header-secondary">Richer Yesterday</p>
      </Col>
    </>
  )
}

export default App;
