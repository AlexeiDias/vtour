import React, { Component } from 'react'
import styled from "styled-components";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import {Jumbotron as Jumbo, Container, Card} from 'react-bootstrap';
//import {Jumbotron as Jumbo, Container, Col, Row, Image} from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Styles = styled.div`
     .style {
         
         color: "white"
     }
`;
export default class ContactCard extends Component {
    render() {
        return (
            <Styles>
                <div class="style">
                <MDBFooter  className="font-small pt-4 mt-4 ">
      <MDBContainer fluid className="text-center text-md-left ">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title"> follow us</h5>
            {/* <p>
    Please follow us 
    </p> */}
          </MDBCol>
          <MDBCol md="6">
            
            <ul>
              {/* <li className="list-unstyled">
              
              <a href="https://www.instagram.com/3dguest/" target="_blank"><FontAwesomeIcon icon={["fab", "github"]} />Instagram</a>
              </li> */}
              <li className="list-unstyled">
              <a href="mailto:3dguestcontact@gmail.com">3dguestcontact@gmail.com</a>
              </li>
              <li className="list-unstyled">
                <a href="tel:1-415-656-5950">415 - 6565950</a>
              </li>
              {/* <li className="list-unstyled">
                <a href="https://www.youtube.com">youtube</a>
              </li> */}
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
 </Styles>
           
        )
    }
}

