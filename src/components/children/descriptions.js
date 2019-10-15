import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import BidBox from './bidbox'
import CountTimer from './countdown'


export default class AuctionDescription extends React.Component {
    render() {
        return (
            <Container className="desc-container">
                <Row>
                    <Col md="4"> 
                        <Image className="auction-image" src={this.props.image} fluid/>
                    </Col>
                    <Col md="8"> 
                        <Row>
                            <Col className="auction-title">
                                {this.props.title}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="auction-desc">
                            {this.props.description}
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                        
                        <Col>
                            <CountTimer
                            auctionLength={this.props.auctionLength}/>
                        </Col>
                        
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                            <BidBox
                            currentBid={this.props.currentBid}
                            numberOfBids={this.props.numberOfBids}
                            userBid={this.props.userBid}
                            handleChange={this.props.handleChange}
                            onSubmit={this.props.onSubmit}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}