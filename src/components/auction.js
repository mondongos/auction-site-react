import React from 'react'
import {Container} from 'react-bootstrap'
import AuctionDescription from './children/descriptions'


export default class Auction extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: 'Nintendo Switch', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: 'https://images-na.ssl-images-amazon.com/images/I/81nn7QDJFeL._SX679_.jpg', 
            currentBid: 10,
            numberOfBids: 0, 
            auctionEnd: new Date('October 20, 2019 15:24:00'), 
            userBid: ''
        }
        console.log(this)
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let numberBids = this.state.numberOfBids
        let currBid = this.state.currentBid
        let useBid = this.state.userBid
        this.setState({
            numberOfBids: numberBids + 1, 
            currentBid: Number(currBid) + Number(useBid),
            userBid: ''
        })
    }


    render() {
        return (
           <Container>
               <AuctionDescription
               title={this.state.title}
               description={this.state.description}
               image={this.state.image}
               currentBid={this.state.currentBid}
               numberOfBids={this.state.numberOfBids}
               auctionEnd={this.state.auctionEnd}
               userBid={this.state.userBid}
               handleChange={this.handleChange}
               onSubmit={this.handleSubmit}
               />
           </Container>
        )
    }
}