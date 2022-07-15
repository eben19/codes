import React from 'react';
import styled from 'styled-components';

const Nurses = () => {
    return(
        <Nurse>
            <NurseHold>

                <NurseRight>
                    <Cert>We have Certified and <br/>High Skilled Dentist</Cert>

                    <CertSmall>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</CertSmall>

                    <Dentist>See More</Dentist>
                </NurseRight>

                <NurseLeft>
                    <Male src="/images/assignMed/nurses2.png" alt="" />
                    <NurseYellow></NurseYellow>
                    <Nur>

                    <Mor3>More Info</Mor3>

                         <Nur1 style={{marginTop:"5px",marginBottom:"-10px"}}>
                             <img style={{width:"35px", height:"32px", borderRadius:"10px"}} src="images/AssignMed/doctor.png" alt="" />

                             <img style={{width:"35px", height:"32px", borderRadius:"10px"}} src="images/AssignMed/smile-woman.png" alt="" />

                             <img style={{width:"35px", height:"32px", borderRadius:"10px"}} src="images/AssignMed/doctor.png" alt="" />

                             <img style={{width:"35px", height:"32px", borderRadius:"10px"}} src="images/AssignMed/smile-woman2.png" alt="" />
                             
                         </Nur1>
                         
                     </Nur>
                </NurseLeft>

            </NurseHold>

        </Nurse>

    )
}

export default Nurses;

const Nurse = styled.div`
width:100%;
height:70vh;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;`;

const NurseHold = styled.div`
width:85%;
height:100%;
display:flex;
justify-content:space-between;
align-items:center;`;

const NurseRight = styled.div`
width:50%;
height:100%;
display:flex;
justify-content:center;
flex-direction:column;`;

const Cert = styled.div`
font-size:40px;
color:purple;
font-weight:600;
margin-bottom:20px;`;

const CertSmall = styled.div`
width:65%;
font-size:12px;
color:purple;
line-height:23px;
align-text:left;
margin-bottom:20px;`;

const Dentist = styled.button`
width:160px;
height:40px;
background:lightblue;
border-radius:6px;
border:none;
font-size:14px;
color:purple;
font-weight:600;
cursor:pointer;
margin-bottom:20px;`;

const NurseLeft = styled.div`
width:50%;
height:100%;
display:flex;
justify-content:center;
flex-direction:column;
position:relative;`;

const Male = styled.img`
width:90%;
height:90%;
border-radius:25px;
z-index:30;`;

const NurseYellow = styled.div`
width:300px;
height:350px;
background:yellow;
border-radius:25px;
position:absolute;
right:25px;
top:0px;`;

const Nur = styled.div`
width:190px;
height:100px;
border-radius:10px;
background:white;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
position:absolute;
left:-90px;
bottom:70px;
z-index:60;`;

const Nur1 = styled.div`
width:80%;
height:45%;
display:flex;
justify-content:space-around;`;

const Mor3 = styled.div`
font-size:11px;
padding:8px 50px;
background:lightblue;
border-radius:5px;
color:#393E59;
font-size:14px;
font-weight:600;
cursor:pointer;`;