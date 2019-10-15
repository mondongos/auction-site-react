import React from 'react'
import {Container, Form, Button, Col, Row} from 'react-bootstrap'

export default class CreateAuction extends React.Component {
    render() {
        return(
            <Container className="create-auction-container">
                <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="newAuctionTitle">
                    <Form.Label>What are you selling?</Form.Label>
                    <Form.Control type="text" placeholder="Name of product" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="newAuctionImg">
                    <Form.Label>Enter a link to image</Form.Label>
                    <Form.Control type="url" placeholder="Image Link" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="newAucDesc">
                    <Form.Label>Describe the product</Form.Label>
                    <Form.Control 
                    placeholder="Enter description"/>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="newAucStartBid">
                    <Form.Label>What is the starting bid?</Form.Label>
                    <Form.Control type="number" placeholder="Enter starting bid" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="newAucEndDate">
                    <Form.Label>Enter the end date of auction</Form.Label>
                    <Form.Control type="date" placeholder="Password" />
                    </Form.Group>
                </Form.Row>

                <Button variant="success" type="submit">
                    Create auction
                </Button>
                </Form>
            </Container>
        )
    }
}