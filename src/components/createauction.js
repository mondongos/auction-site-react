import React from 'react'
import {Container, Form, Button, Col} from 'react-bootstrap'

export default class CreateAuction extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            image: '',
            description: '',
            startBid: '',
            endDate: '' 
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    
    render() {
        return(
            <Container className="create-auction-container">
                <Form>
                <Form.Row>
                    <Form.Group 
                    as={Col} 
                    controlId="newAuctionTitle">
                        <Form.Label>What are you selling?</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Name of product"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="newAuctionImg">
                        <Form.Label>Enter a link to image</Form.Label>
                        <Form.Control 
                        type="url" 
                        placeholder="Image Link"
                        name="image"
                        value={this.state.image}
                        onChange={this.handleChange} />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="newAucDesc">
                    <Form.Label>Describe the product</Form.Label>
                    <Form.Control 
                    placeholder="Enter description"
                    name="description"
                    type="text"
                    value={this.state.description}
                    onChange={this.handleChange}/>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="newAucStartBid">
                    <Form.Label>What is the starting bid?</Form.Label>
                    <Form.Control 
                    type="number" 
                    placeholder="Enter starting bid"
                    name="startBid"
                    value={this.state.startBid}
                    onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="newAucEndDate">
                    <Form.Label>Enter the end date of auction</Form.Label>
                    <Form.Control 
                    type="date" 
                    placeholder="Password" 
                    name="endDate"
                    value={this.state.endDate}
                    onChange={this.handleChange}/>
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