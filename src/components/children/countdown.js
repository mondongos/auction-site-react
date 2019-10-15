import React from 'react'
import Timer from 'react-compound-timer'
import {Row, Col, Container} from 'react-bootstrap'


export default class CountTimer extends React.Component {
    render() {
        return (
            <Container className="count-container">
                <Timer 
                    initialTime={this.props.auctionLength}
                    direction="backward">
                    {() => (
                        <React.Fragment>
                            <Row>
                                <Col xs lg="10"><strong>Time remaining:</strong></Col>
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