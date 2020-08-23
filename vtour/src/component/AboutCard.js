import React, { Component } from 'react'
// import {Jumbotron as Jumbo, Container, Card} from 'react-bootstrap';
//import {Jumbotron as Jumbo, Container, Col, Row, Image} from 'react-bootstrap';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Styles = styled.div`
     .style {
         
         color: "white"
     }
`;
export default class AboutCard extends Component {
    render() {
        return (
            <Styles>
                <div class="style">
                <MDBFooter  className="font-small pt-4 mt-4 ">
      <MDBContainer fluid className="text-center text-md-left ">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">About 3dguest</h5>
            <p>
    Whether you want to give buyers the feeling of being in a new home, help guests start picturing their stay or showcase the wonders of your venue to event planners and patrons. 3dguest uses a composition of a sequence of videos or still images. It may also use other multimedia elements such as sound effects, music, narration, and text.
    </p>
          </MDBCol>
          <MDBCol md="6">
            
            {/* <ul>
              <li className="list-unstyled">
              
              <a href="https://www.instagram.com/lilstartdaycare/" target="_blank"><FontAwesomeIcon icon={["fab", "github"]} />Instagram</a>
              </li>
              <li className="list-unstyled">
              <a href="mailto:littlestart@gmail.com">littlestart@gmail.com</a>
              </li>
              <li className="list-unstyled">
                <a href="tel:1-415-705-9104">415 - 7059104</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.youtube.com">youtube</a>
              </li>
            </ul> */}
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
