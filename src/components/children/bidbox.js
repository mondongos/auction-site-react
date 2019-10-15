import React from 'react'
import {Container, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap'

export default class BidBox extends React.Component {
    render() {
        return (
            <Container className="bidbox-container">
                <Row>
                    <Col md="2"></Col>
                    <Col xs lg="5">
                        <strong>£{this.props.currentBid}</strong>
                    </Col>
                    <Col xs lg="5">
                        {this.props.numberOfBids} bids
                    </Col>
                    <Col md="2"></Col>
                </Row>
                <br></br>
                <Row>
                    <Col md="2"></Col>
                    <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>£</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                        aria-label="Amount (to the nearest pound)"
                        name="userBid"
                        type="number"
                        value={this.props.userBid}
                        onChange={this.props.handleChange}/>
                        <InputGroup.Append>
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                    </Col>
                    <Col md="2"></Col>
                </Row>
                <Row>
                <Col md="4"></Col>
                <Col md="auto">
                    <Button
                    variant="success"
                    onClick={this.props.onSubmit}
                    >
                        Submit bid
                    </Button>
                </Col>
                <Col md="4"></Col>
                </Row>
            </Container>
        )
    }
}