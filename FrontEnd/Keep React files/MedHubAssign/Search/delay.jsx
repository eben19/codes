import React from "react";
import styled from "styled-components";

const Delay = () => {
    return (
        <Deal>
            <DealHold>
                <Those>Don't Delay Care For You <br/>and Those You Love..</Those>

                <Love>View Programmes</Love>

            </DealHold>
        </Deal>

    )
}

export default Delay;

const Deal = styled.div`
width:100%;
height:50vh;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;`;

const DealHold = styled.div`
width:85%;
height:90%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
border-radius:30px;
background:purple;`;

const Those = styled.div`
font-size:40px;
color:white;
font-weight:600;
text-align:center;`;

const Love = styled.button`
width:180px;
height:40px;
background:white;
color:purple;
font-weight:600;
cursor:pointer;
border-radius:6px;
border:none;
margin-top:30px;`;