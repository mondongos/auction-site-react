import React from 'react'
import {Container, Row, Col, Button } from 'react-bootstrap'
import BidBox from './children/bidbox'


export default class Auction extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '', 
            description: '',
            image: '', 
            startBid: 0, 
            auctionLength: 24
        }
    }

    render() {
        return (
           <Container>
               <BidBox
               currentBid="400"
               numberOfBids="12"/>
           </Container>
        )
    }
}