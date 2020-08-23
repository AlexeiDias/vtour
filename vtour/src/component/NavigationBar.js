import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Styles = styled.div`
    .logoBrand {
        font-size: 30px;
        }
        
   
`;

export default class NavigationBar extends Component {
    render() {
        return (
            
                <>
                <Styles>
  <Navbar className="justify-content-center logoBrand" bg="dark" variant="dark">
    <Navbar.Brand className="justify-content-center logoBrand" href="#home">3dguest</Navbar.Brand>
    {/* <Nav className="mr-auto"> */}
      {/* <Nav.Link href="#home">Home</Nav.Link> */}
      {/* <Nav.Link href="#features">Features</Nav.Link> */}
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    {/* </Nav> */}
    
  </Navbar>
  </Styles>
</>
            
        )
    }
}