import React from 'react'
import {Col} from 'react-bootstrap'

export const TransformedTweets: React.FC = () => {
    return (
        <Col
            id="tweets-block"
            className="mt-5 mt-sm-2 p-0"
            xs={12}>
            <Col
                id="twitter-real-header"
                xs={12}
                sm={6}
                className="mt-5 mt-sm-2 text-center p-0" >

                What he means
            </Col>

            <Col
                id="transformed-tweets"
                xs={12}
                sm={6}>
                
                <TransformedTweet />
                <TransformedTweet />
                <TransformedTweet />
                <TransformedTweet />
                <TransformedTweet />
            </Col>
        </Col>
    )
}

const TransformedTweet: React.FC= () => {
    return (
        <Col
            className="transformed-tweet row my-2 mx-0 p-0">
            
            <img
                className="trump-tweet-avatar col-2 p-0"
                alt="trump-avatar"
                src={process.env.PUBLIC_URL + "/trump-background.jpg"} />

            <p className="col-10 p-0 pl-1 m-0">Test tweet</p>
        </Col>
    )
}