import React from "react";
import styled from "styled-components";

const Delay = () => {
    return (
        <Bud>
            <BudHold>

                <Meet>Meet Our Experts Dentist</Meet>

                <MeetSmall>Browse through our impressive list of Dentist, who continue <br/>to do wonders over the years.</MeetSmall>

                <MeetDoc>

                    <Doc1>
                        <Curry src="/images/AssignMed/doctor.png" alt="" />
                        <Olam>Dr. Olam Curry</Olam>
                        <Senior>Senior Dentist</Senior>
                    </Doc1>

                    <Doc1>
                        <Curry src="/images/AssignMed/doctor.png" alt="" />
                        <Olam>Dr. Olam Curry</Olam>
                        <Senior>Senior Dentist</Senior>
                    </Doc1>

                    <Doc1>
                        <Curry src="/images/AssignMed/doctor.png" alt="" />
                        <Olam>Dr. Olam Curry</Olam>
                        <Senior>Senior Dentist</Senior>
                    </Doc1>

                    <Doc1 style={{marginTop:"30px"}}>
                        <Curry src="/images/AssignMed/doctor.png" alt="" />
                        <Olam>Dr. Olam Curry</Olam>
                        <Senior>Senior Dentist</Senior>
                    </Doc1>

                    <Doc1 style={{marginTop:"30px"}}>
                        <Curry src="/images/AssignMed/doctor.png" alt="" />
                        <Olam>Dr. Olam Curry</Olam>
                        <Senior>Senior Dentist</Senior>
                    </Doc1>

                </MeetDoc>

                <SeeMore>See More</SeeMore>
                

            </BudHold>
        </Bud>

    )
}

export default Delay;

const Bud = styled.div`
width:100%;
height:110vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
overflow:hidden;
margin-top:20px;
margin-bottom:20px;`;

const BudHold = styled.div`
width:85%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;`;

const Meet = styled.div`
font-size:40px;
color:purple;
font-weight:600;`;

const MeetSmall = styled.div`
font-size:18px;
color:purple;
text-align:center;`;

const MeetDoc = styled.div`
width:100%;
height:70%;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
margin-top:50px;`;

const Doc1 = styled.div`
width:24%;
height:170px;
background:lightgray;
border-radius:40px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin-top:15px;
margin-right:36px;
margin-left:36px;
position:relative;`;

const Curry = styled.img`
width:100px;
height:100px;
border-radius:30px;
position:absolute;
top:-35px`;

const Olam = styled.div`
font-size:25px;
color:purple;
font-weight:600;
margin-top:40px;`;

const Senior = styled.div`
color:purple;
font-weight:600;
margin-top:10px;`;

const SeeMore = styled.button`
width:180px;
height:50px;
background:purple;
color:white;
font-weight:600;
cursor:pointer;
border-radius:6px;
border:none;
margin-top:30px;`;