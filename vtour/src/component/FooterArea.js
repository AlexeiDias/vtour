import React, { Component } from 'react'
import { Card, Nav, Button} from 'react-bootstrap'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Styles = styled.div`
    .FooterStyles {
        margin-top:30px;
        }
        .imageText {
        font-size: 50px;
        text-align: center;
        padding-top: 0px;
    }
   
`;

export default class FooterArea extends Component {
    render() {
        return (
            
                <>
                <Styles>
                <Card >
  <Card.Header className="FooterStyles">
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">Contacts and Social Media</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">About</Nav.Link>
        
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#disabled">
          Pricing
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    {/* <Card.Title>Contacts and Social Media</Card.Title> */}
    <Card.Text>
    
    <p className="email"><a href="mailto:3dguest@gmail.com">3dguest@gmail.com</a></p>
    <p className="email"><a href="tel:1-415-656-5950">415-6565950</a></p>
    <a className="insta" href="https://www.instagram.com/lilstartdaycare/" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram',]} /></a>
      Please follow us on our Instagram and subscribe to our youtube channel.
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
</Styles>
</>
            
        )
    }
}