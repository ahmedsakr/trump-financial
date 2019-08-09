import React from 'react'
import { Col } from 'react-bootstrap'

export const Header: React.FC = () => {
    return (
        <>
            <Col
                id="navigation"
                className="text-center p-0"
                xs={{ span: 12 }} >

                <Col
                    className="p-0"
                    xs={{ span: 12 }}
                    sm={{ span: 6 }} >

                    <img
                        id="navigation-trump"
                        alt="trumpPicture"
                        src={process.env.PUBLIC_URL + "/trump-background.jpg"} />

                </Col>

                <Col
                    id="navigation-header"
                    className="p-0"
                    xs={{ span: 12 }}
                    sm={{ span: 6 }} >

                    <p className="m-0" id="navigation-header-primary">Trump Financial</p>
                    <p className="m-0" id="navigation-header-secondary">Richer Yesterday</p>

                </Col>
            </Col>
        </>
    )
}