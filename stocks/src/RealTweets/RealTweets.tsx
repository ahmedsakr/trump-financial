import React from 'react'
import {Col} from 'react-bootstrap'

type RealTweetsProps = {
    url: string
};

export const RealTweets: React.FC<RealTweetsProps> = (props: RealTweetsProps) => {
    return (
        <Col
            id="tweets-block"
            className="mt-5 mt-sm-2 p-0"
            xs={12}>
            <Col
                id="twitter-real-header"
                xs={12}
                sm={6}
                className="text-center p-0" >

                What he says
            </Col>

            <Col
                id="twitter-container"
                className="p-0"
                xs={12}
                sm={6}>

                <Col
                    id="twitter-iframe"
                    className="my-2 pr-0">

                    <a
                        className="twitter-timeline"
                        href={props.url}>
                    </a>

                </Col>
            </Col>
        </Col>
    )
}