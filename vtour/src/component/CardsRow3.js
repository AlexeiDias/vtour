import React, { Component } from 'react'
import { Card, CardDeck, } from 'react-bootstrap'
import { MDBContainer, MDBIframe } from "mdbreact";
import styled from 'styled-components'

const Styles = styled.div`
    .cardDeck {
        margin-top:30px;
        }
        .imageText {
        font-size: 50px;
        text-align: center;
        padding-top: 0px;
    }
   
`;





export default class CardsRow3 extends Component {
    render() {
        return (
          <Styles>
          <CardDeck className="cardDeck">
    <Card>
    <MDBContainer className="text-center">
        <MDBIframe src='https://my.matterport.com/show/?m=eaoFwZduf1h&brand=0' />
      </MDBContainer>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
    <MDBContainer className="text-center">
        <MDBIframe src='https://my.matterport.com/show/?m=MMWxWY1ffWJ&brand=0' />
      </MDBContainer>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
    <MDBContainer className="text-center">
        <MDBIframe src='https://my.matterport.com/show/?m=v3NVjC7gaXE&brand=0' />
      </MDBContainer>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  </CardDeck>
  </Styles>             
                  
                  
             
                 )
              }
          }