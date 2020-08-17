import React from "react";
import { MDBContainer, MDBIframe } from "mdbreact";
import styled from 'styled-components'

const Styles = styled.div`
    .porsition {
        margin-top:30px;
        }
        .imageText {
        font-size: 50px;
        text-align: center;
        padding-top: 0px;
    }
  `;
const MainIframe = () => {
 return (
    <Styles>
    <MDBContainer className="text-center porsition">
      <MDBIframe id='hideiframe' src='https://my.matterport.com/show/?m=MwSJpTXtdSg' />
    </MDBContainer>
    </Styles>
  );
}
export default MainIframe;