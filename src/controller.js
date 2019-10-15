import React from 'react'
import Auction from './components/auction'
import NavBar from './components/children/navbar'
import CreateAuction from './components/createauction'

export default class Controller extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            auctions: []
        }
    }
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <br></br>
                <Auction/>
                <br></br>
                <CreateAuction/>
            </React.Fragment>
        )
    }
}