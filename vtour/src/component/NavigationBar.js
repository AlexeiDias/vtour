import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class NavigationBar extends Component {
    render() {
        return (
            
                <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">3dguest</Navbar.Brand>
    <Nav className="mr-auto">
      {/* <Nav.Link href="#home">Home</Nav.Link> */}
      {/* <Nav.Link href="#features">Features</Nav.Link> */}
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    
  </Navbar>
  
</>
            
        )
    }
}