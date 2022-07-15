import React from "react";
import styled from "styled-components";



function Search () {
  return (
   <Fix>
       <FixHold>
           <Date>
               <Day>Day</Day>
               <Inp placeholder="day"></Inp>
           </Date>

           <Date>
               <Day>Month</Day>
               <Inp placeholder="month"></Inp>
           </Date>

           <Date>
               <Day>Year</Day>
               <Inp  placeholder="year" placeholderTextMarginLeft="10px"></Inp>
           </Date>

           <Set>Set Appointment</Set>
       </FixHold>
   </Fix>
  );
}

export default Search;


const Fix = styled.div`
width:100%;
height:30vh;
background:purple;
display:flex;
justify-content:center;
align-items:center;
color:white;`;

const FixHold = styled.div`
width:85%;
height:100%;
display:flex;
justify-content:space-between;
align-items:center;`;

const Date = styled.div`
width:22%;
height:100%;
display:flex;
justify-content:center;
flex-direction:column;`;

const Day = styled.div`
font-size:18px;
font-weight:600;
margin-bottom:5px;`;

const Inp = styled.input`
width:230px;
height:40px;
border-radius:5px;
font-size:17px;
background:rgb(59, 58, 68);
border:none;
margin-top:5px;`;

const Set = styled.button`
width:230px;
height:40px;
color:white;
font-size:15px;
font-weight:600;
border-radius:5px;
border:none;
margin-top:36px;
cursor:pointer;
background:rgb(67, 61, 181);`;