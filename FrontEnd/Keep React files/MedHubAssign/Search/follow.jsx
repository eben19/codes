import React from "react";
import styled from "styled-components";





function Follow () {
  return (
   <Easy>
       <EasyHold>
           <Sol>Follow Easy Steps and Get <br/>Your Solution</Sol>

           <Make>
               <Pro>
               <Pix> <img style={{width:"100%", height:"100%",}} src="/images/play.png" alt="" /> </Pix>
                   <Move>Check Our Profile</Move>
                   <Appoint>We offer the best of services, which has provided a loyal and classy customer base over the years.</Appoint>
               </Pro>

               <Pro>
               <Pix> <img style={{width:"100%", height:"100%",}} src="/images/play.png" alt="" /> </Pix>
                   <Move>Make Appointment</Move>
                   <Appoint>We offer the best of services, which has provided a loyal and classy customer base over the years.</Appoint>
               </Pro>

               <Pro>
               <Pix> <img style={{width:"100%", height:"100%",}} src="/images/play.png" alt="" /> </Pix>
                   <Move>Move Appointment</Move>
                   <Appoint>We offer the best of services, which has provided a loyal and classy customer base over the years.</Appoint>
               </Pro>

               <Pro>
               <Pix> <img style={{width:"100%", height:"100%",}} src="/images/play.png" alt="" /> 
                   </Pix>
                   <Move>Get Your Solution</Move>
                   <Appoint>We offer the best of services, which has provided a loyal and classy customer base over the years.</Appoint>
               </Pro>

           </Make>
           
       </EasyHold>
   </Easy>
  );
}

export default Follow;


const Easy = styled.div`
width:100%;
height:70vh;
display:flex;
justify-content:center;
align-items:center;
color:purple;`;

const EasyHold = styled.div`
width:85%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;`;

const Sol = styled.div`
font-size:40px;
font-weight:700;
color:purple;
text-align:center;
margin-bottom:35px;`;

const Make = styled.div`
width:100%;
height:50%;
display:flex;
justify-content:space-between;
align-items:center;`;

const Pro = styled.div`
width:22%;
height:230px;
background:rgb(201, 201, 211);
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin-top:10px;
border-radius:10px;
box-shadow: 0 0 4px gray;
border:none;`;

const Pix = styled.div`
width:50px;
height:50px;
border-radius:50%;
background:blue;
margin-bottom:6px;`;

const Move = styled.div`
font-size:17px;
font-weight:600;
margin-bottom:6px;
margin-top:6px;`;

const Appoint = styled.div`
font-size:13px;
width:70%;
text-align:center;
margin-top:6px;`;