import React, { Component } from 'react'
import { Card, Nav, Button} from 'react-bootstrap'
import styled from 'styled-components'
import AboutCard from "../component/AboutCard"
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ContactCard from "../component/ContactCard"


const Styles = styled.div`
    .FooterStyles {
        margin-top:20px;
        
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
                <div class="FooterStyles">
                <Tabs defaultActiveKey="home" >
  <Tab eventKey="home" title="Contact">
    <ContactCard />
  </Tab>
  <Tab eventKey="profile" title="About">
  <AboutCard />
  </Tab>
  {/* <Tab eventKey="contact" title="Pricing" >
  <AboutCard />
  </Tab> */}
</Tabs>
</div>
</Styles>
</>
            
        )
    }
}