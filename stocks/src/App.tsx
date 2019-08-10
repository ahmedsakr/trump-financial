import React from 'react';
import './App.scss';
import { Row, Col, Container } from 'react-bootstrap'
import {Header} from './Header/Header'
import {RealTweets} from './RealTweets/RealTweets'
import { TransformedTweets } from './TransformedTweets/TransformedTweets';

const App: React.FC = () => {
    return (
        <div className="App">
            <Container fluid={true}>
                <Row id="main-block">
                    <Col
                        className="p-0"
                        xs={{ span: 12 }}
                        sm={{ span: 10, offset: 1 }} >

                        <Header />

                        <RealTweets url="https://twitter.com/realDonaldTrump" />
                        <TransformedTweets />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}



export default App;
