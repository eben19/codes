import React from "react";
import styled from 'styled-components';


function Quality () {
  return (
   <Qua>

       <QuaHold>
           <QuaRight>
               <Care src="/images/bizTalk.jpg" alt="" />
               <Quote>
                   <Quote2>"</Quote2>
                   <Quote3>We offer the best of services, which has provided a loyal and classy customer base over the years. <br/><span style={{color:"orange", fontWeight:'600', fontSize:"16px"}}>- Dr. Gloria May</span></Quote3>
               </Quote>
           </QuaRight>

           <QuaLeft>
               <Treat>We provide quality <br/>care that treats <br/>everyone</Treat>
               
               <Every>
                   <One style={{background:"purple"}}>Learn</One>
                   <One style={{background:"blue"}}>Visit</One>
               </Every>
           </QuaLeft>

       </QuaHold>

   </Qua>
  );
}

export default Quality;

const Qua = styled.div`
width:100%;
height:80vh;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;`;

const QuaHold = styled.div`
width:75%;
height:90%;
display:flex;
justify-content:space-between;
align-items:center;
background:lightgray;
border-radius:80px;`;

const QuaRight = styled.div`
width:50%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
position:relative;`;

const Care = styled.img`
width:70%;
height:70%;
border-radius:25px;`;

const Quote = styled.div`
width:300px;
height:150px;
background:white;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
position:absolute;
bottom:40px;
right:-75px;
border-radius:20px;`;

const Quote2 = styled.div`
font-size:50px;
background:lightblue;
color:white;
width: 50px;
height:50px;
border-radius:50%;
text-align:center;
position:relative;
bottom:25px;`;

const Quote3 = styled.div`
font-size:13px;
text-align:center;
width:60%;
line-height:22px;
color:purple;
margin-top:-10px;
font-weight:600;`;

const QuaLeft = styled.div`
width:50%;
height:100%;
display:flex;
justify-content:;
flex-direction:column;`;

const Treat = styled.div`
font-size:35px;
color:purple;
margin-bottom:20px;
margin-top:65px;
font-weight:600;`;

const Every = styled.div`
display:flex;
justify-content:center:
align-items:center;`;

const One = styled.button`
width:120px;
height:35px;
color:white;
font-weight:600;
margin-right:15px;
border-radius:6px;
border:none;
cursor:pointer;`;

// const NurseRight = styled.div``;

// const NurseRight = styled.div``;