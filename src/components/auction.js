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
            currentBid: 230,
            numberOfBids: 12, 
            auctionLength: 3000000
        }
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
               auctionLength={this.state.auctionLength}/>
           </Container>
        )
    }
}