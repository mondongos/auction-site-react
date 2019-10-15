import React from 'react'
import {Container, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap'

export default class BidBox extends React.Component {
    render() {
        return (
            <Container className="bidbox-container">
                <Row>
                    <Col xs lg="2"></Col>
                    <Col>
                        <strong>£{this.props.currentBid}</strong>
                    </Col>
                    <Col>
                        {this.props.numberOfBids} bids
                    </Col>
                    <Col xs lg="2"></Col>
                </Row>
                <br></br>
                <Row>
                    <Col xs lg="10"></Col>
                    <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>£</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Amount (to the nearest pound)" />
                        <InputGroup.Append>
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                    </Col>
                    <Col xs lg="10"></Col>
                </Row>
                <Row>
                <Col xs lg="2"></Col>
                    <Col>
                        <Button
                        variant="success">
                            Submit bid
                        </Button>
                    </Col>
                    <Col xs lg="2"></Col>
                </Row>
                
            </Container>
        )
    }
}