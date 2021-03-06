import React from 'react'
import Timer from 'react-compound-timer'
import {Row, Col, Container} from 'react-bootstrap'


export default class CountTimer extends React.Component {
    render() {
        const timeLeft = this.props.auctionEnd - new Date()
        return (
            <Container className="count-container">
                <Timer 
                    initialTime={timeLeft}
                    direction="backward">
                    {() => (
                        <React.Fragment>
                            <Row>
                                <Col md="3"><strong>Time remaining:</strong></Col>
                                <Col md="auto"><Timer.Days />d </Col>
                                <Col md="auto"><Timer.Hours />h </Col>
                                <Col md="auto"><Timer.Minutes />m </Col>
                                <Col md="auto"><Timer.Seconds />s</Col>
                            </Row>
                        </React.Fragment>
                    )}
                </Timer>
            </Container>
        )
    }
}