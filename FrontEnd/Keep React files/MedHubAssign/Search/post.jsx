import React from "react";
import styled from "styled-components";




function Post () {
  return (
   <Ques>
       <QuesHold>
           <QuesRight>
               <QuesImg src="/images/assignMed/doc-work.webp" alt="" />
               <QuesMark>?</QuesMark>
               <QuesBlue></QuesBlue>
           </QuesRight>

           <QuesLeft >

               <Expert>Post your questions <br/>our Experts are ready <br/>to answer</Expert>

               <Ready>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</Ready>

               <Ready>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</Ready>

               <Answer>Your Questions</Answer>

           </QuesLeft>

       </QuesHold>
   </Ques>
  );
}

export default Post;


const Ques = styled.div`
width:100%;
height:85vh;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;`;

const QuesHold = styled.div`
width:85%;
height:100%;
display:flex;
justify-content:space-between;
align-items:center;`;

const QuesRight = styled.div`
width:50%;
height:100%;
display:flex;
align-items:center;
flex-directon:column;
position:relative;`;

const QuesImg = styled.img`
width:80%;
height:80%;
border-radius:25px;
background:green;
z-index:30;`;

const QuesMark = styled.div`
font-size:40px;
border-radius:50%;
padding:8px 25px;
background:white;
color:gray;
font-weight:600;
position:absolute;
top:30px;
right:80px;
z-index:70;`;

const QuesBlue = styled.div`
width:300px;
height:300px;
border-radius:50px;
background:rgb(167, 123, 229);
position:absolute;
bottom:-20px;
left:-160px;`;

const QuesLeft = styled.div`
width:50%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;`;

const Expert = styled.div`
font-size:45px;
color:purple;
font-weight:600;`;

const Ready = styled.p`
width:65%;
font-size:12px;
color:purple;
line-height:23px;
align-text:left;`;

const Answer = styled.button`
width:160px;
height:40px;
background:lightblue;
border-radius:6px;
border:none;
font-size:14px;
color:purple;
font-weight:600;
cursor:pointer;`;