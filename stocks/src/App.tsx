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
        xs={{ span: 12 }}
        sm={{ span: 10, offset: 1 }} >
        
        <Col
          className="p-0"
          xs={{ span: 12 }}
          sm={{ span: 6 }} >

          <img
            id="navigation-trump"
            alt="trumpPicture"
            src={process.env.PUBLIC_URL + "/trump-background.jpg"}/>

        </Col>

        <Col
          id="navigation-header"
          className="p-0"
          xs={{ span: 12 }}
          sm={{ span: 6 }} >
          
          <p id="navigation-header-primary">Trump Financial</p>
          <p id="navigation-header-secondary">Richer Yesterday</p>

        </Col>
      </Col>
    </>
  )
}

export default App;
