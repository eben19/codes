import React from "react";
import styled from "styled-components";
import {BsChevronDown} from 'react-icons/bs';
import { AiFillTwitterCircle, AiOutlineInstagram } from 'react-icons/ai';



function BlushFoot() {
  return (
      
    <Plan>

      <PlanHold>

      <Blu>
        <Txt>Blush</Txt>
        
        </Blu>

      <PlanTop>
        
        <Flex>
          <Price>
            <Abt>Pricing Plans</Abt>
            <Abt>About</Abt>
            <Abt>English <BsChevronDown /></Abt>
          </Price>

          <Price>
            <Abt>Teams</Abt>
            <Abt>Blog</Abt>
            <Abt>Become an instructor</Abt>
          </Price>

          <Price>
            <Abt> <img style={{width:"20px",height:"20px",borderRadius:"50%"}} src="/images/BlushImg/figmaLogo.svg" alt="" /> Figma Plugin</Abt>
            <Abt> <img style={{width:"20px",height:"20px",borderRadius:"50%"}} src="/images/BlushImg/sketch.png" alt="" /> Sketch Plugin</Abt>
            <Abt>English</Abt>
          </Price>

          <Soc>
            <AiOutlineInstagram />
            <AiFillTwitterCircle />
          </Soc>
        </Flex>

        </PlanTop>

        <PlanBottom>

          <Rights>
          <All>C. Blush Design Inc. All rights reserved.</All>
          <Poli>Terms of Service  Privacy Policy</Poli>
          </Rights>

          <Spooky src="/images/BlushImg/blushyFooter.svg" alt="" />
        </PlanBottom>

      </PlanHold>

    </Plan>

  );
}

export default BlushFoot;

const Plan = styled.div`
width:100%;
height:40vh;
display:flex;
justify-content:center;
align-items:center;`;

const PlanHold = styled.div`
width:80%;
height:100%;
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;`;


const PlanTop = styled.div`
width:100%;
height:35%;
display:flex;
justify-content:space-between;
align-items:center;`;

const Blu = styled.div`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
margin-top: 40px;
`;

const Txt = styled.div`
font-size:16px;
font-weight:600;
text-align:left;`;

const Flex = styled.div`
width:83%;
height:100%;
display:flex;
justify-content:space-between;
align-items:center;`;

const Price = styled.div`
height:100%;
display:flex;
justify-content:space-between;
flex-direction:column;`;

const Abt = styled.div`
font-size:15px;
color:#676767;`;

const Soc = styled.div`
display:flex;
font-size:25px;
margin-top:-70px;`;

const PlanBottom = styled.div`
width:100%;
height:25%;
display:flex;
align-items:center;
justify-content:space-between;`;

const Rights = styled.div`
width:45%;
display: flex;
justify-content: space-between;
`;

const All = styled.div`
color:#ADADAD;
font-size:15px;`;

const Poli = styled.div`
color:#676767;
font-size:15px;`;

const Spooky = styled.img`
height:100%;`;
