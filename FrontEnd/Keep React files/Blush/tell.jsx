import React from 'react';
import styled from 'styled-components';
import { FaRandom  } from 'react-icons/fa';
import {BsChevronDown} from 'react-icons/bs';


const Tell = () => {
    return(
        <Tel>
            <TelHold>

                <TelLeft>
                    <Story>Tell your story with illustrations</Story>

                    <Easily>Easily create and customize stunning illustrations with collections <br/>made by artists across the globe. Try it, it's kind of fun.</Easily>

                    <Buttons>

                    <Random> <FaRandom /> Create Random</Random>

                    <Install> <img style={{width:"16px",height:"16px",borderRadius:"50%"}} src="/images/BlushImg/figmaLogo.svg" alt="" /> 
                    <img style={{width:"16px",height:"16px",borderRadius:"50%"}} src="/images/BlushImg/sketch.png" alt="" />
                      Install Plugin <BsChevronDown /> </Install>

                    </Buttons>

                </TelLeft>

                <TelRight>
                    <RightImg src="/images/cartoon.png" alt="" />
                </TelRight>

            </TelHold>
        </Tel>
    )
}

export default Tell;

const Tel  = styled.div`
width:100%;
height:90vh;
display:flex;
justify-content:center;
align-items:center;`;

const TelHold  = styled.div`
width:90%;
height:100%;
display:flex;
justify-content:space-between;
align-items:center;`;

const TelLeft  = styled.div`
width:45%;
height:50%;
display:flex;
justify-content:space-between;
flex-direction:column;`;

const Story  = styled.div`
font-size:62px;
font-weight:600;
line-height:70px;`;

const Easily  = styled.div`
font-size:18px;
line-height:28px;`;

const Buttons  = styled.div`
width:70%;
display:flex;
justify-content:space-between`;

const Random = styled.button`
width:180px;
height:40px;
background:black;
color:white;
border-radius:6px;
display:flex;
align-items: center;
justify-content:space-around;
font-weight:600;
cursor:pointer;
font-size: 15px;

:hover{
    opacity: 0.9;
}`;

const Install  = styled.button`
width:180px;
height:40px;
background:transparent;
color:black;
border-radius:6px;
display:flex;
justify-content:space-around;
align-items: center;
border:1px solid black;
font-weight:600;
cursor:pointer;
font-size: 15px;

:hover{
    border:2px solid blue;
}`;

const TelRight  = styled.div`
width:55%;
height:100%;`;

const RightImg  = styled.img`
width:95%;
height:100%`;