import React from 'react'
import Auction from './components/auction'
import NavBar from './components/children/navbar'

export default class Controller extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <br></br>
                <Auction/>
            </React.Fragment>
        )
    }
}