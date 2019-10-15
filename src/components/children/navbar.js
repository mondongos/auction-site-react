import React from 'react'
import {Navbar} from 'react-bootstrap'


export default class NavBar extends React.Component {
    render() {
        return (
            <Navbar sticky="top" bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    {'Auctions™'}
                </Navbar.Brand>
            </Navbar>
        )
    }
}