import React from 'react';
import styled from 'styled-components';


const Smile = () => {
    return(
        <Container>
            <SmileHold>
                <Right>
                    <We>We Create <Smiley src="/images/AssignMed/smily.svg" alt="" /> <br/> <span style={{color:"blue"}}>7000+</span> Smiley Face
                    </We>

                    <Small>We provide the beauty of your white beautiful <br/>teeth, which glows confidence..</Small>

                    <Get>Let's take you on our Facility Tour</Get>

                    <Work>
                        <Work1>
                        <Work2> <img style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:"50%"}} src="/images/bizTalk.jpg" alt="" /> </Work2>
                        <Work3>
                            <Work4>Opening Hours(1st)</Work4>
                            <Work5>8:00AM - 5:00PM Daily</Work5>
                            </Work3>
                        </Work1>

                        <Work1>
                        <Work2> <img style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:"50%"}} src="/images/bizTalk.jpg" alt="" /> </Work2>
                        <Work3>
                            <Work4>Opening Hour(2nd) </Work4>
                            <Work5>6:00PM - 6AM Daily</Work5>
                            </Work3>
                        </Work1>

                    </Work>

                </Right> 

                 <Left>
                     <Woman src="images/AssignMed/smile-woman2.png" alt="" />

                     <Box></Box>
                     <Box1></Box1>
                     <Box2></Box2>
                     <Dr>
                         <Dr1>
                             <img style={{width:"35px", height:"32px", borderRadius:"10px"}} src="images/AssignMed/doctor.png" alt="" />
                             <Dr2>
                             <More>Dr. David Jay</More>
                             <More2>Resident Surgeon</More2>
                             </Dr2>
                         </Dr1>
                         <More3>More Info</More3>
                     </Dr>

                 </Left>

            </SmileHold>


        </Container>

    )
};

export default Smile;

const Container = styled.div`
width:100%;
height:auto;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
margin-top:0px;`;

const SmileHold = styled.div`
width:85%;
height: calc(100vh - 80px);
display:flex;
justify-content:space-between;
align-items:center;`;

const Right = styled.div`
width:50%;
height:100%;
display:flex;
justify-content:center;
flex-direction:column;
`;

const We = styled.div`
font-size:60px;
color:#393E59;
font-weight:600;
`;

const Smiley = styled.img`
width:40px;
height:40px;
`;

const Small = styled.div`
font-size:20px;
font-weight:600;
color:#393E59;
margin-top:10px;
`;

const Get = styled.button`
width:250px;
height:45px;
background:blue;
border-radius:7px;
border:none;
margin-top:30px;
color:white;
font-weight:600;
cursor:pointer;
`;

const Work = styled.div`
width:70%;
height:15%;
display:flex;
justify-content:space-between;
align-items:center`;

const Work1 = styled.div`
display:flex;
justify-content:center;
align-items:center;`;

const Work2 = styled.div`
width:30px;
height:30px;
border-radius:50%
overflow:hidden;
display:flex;
align-items:center;
justify-content:center;
margin-right:8px;`;

const Work3 = styled.div`
display:flex;
justify-content:center;
flex-direction:column`;

const Work4 = styled.div`
font-weight:600;
color:#393E59;`;

const Work5 = styled.div`
font-weight:600;
color:#393E59;`;

const Left = styled.div`
width:50%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
position:relative;`;

const Woman = styled.img`
width:850;
height:100%;
z-index:50;
`;

const Box = styled.div`
width:230px;
height:230px;
background:yellow;
position:absolute;
transform:rotate(45deg);
border-radius:70px;
top:60px;
left:170px;
z-index:20;`;

const Box1 = styled.div`
width:440px;
height:440px;
background:#393E59;
position:absolute;
transform:rotate(45deg);
border-radius:70px;
top:100px;
left:160px;
`;

const Box2 = styled.div`
width:150px;
height:150px;
background:lightblue;
position:absolute;
transform:rotate(45deg);
border-radius:40px;
top:15px;
right:-160px;
z-index:20;
`;

const Dr = styled.div`
width:190px;
height:100px;
border-radius:10px;
background:white;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
position:absolute;
left:85px;
bottom:90px;
z-index:60;`;

const Dr1 = styled.div`
width:80%;
height:45%;
display:flex;
justify-content:space-around;`;

const Dr2 = styled.div`
display:flex;
flex-direction:column;`
;

const More = styled.div`
font-size:13px;
font-weight:600;
color:#393E59;
`;

const More2 = styled.div`
font-size:11px;
color:#393E59;`;

const More3 = styled.div`
font-size:11px;
padding:8px 50px;
background:lightblue;
border-radius:5px;
color:#393E59;
font-size:14px;
font-weight:600;
cursor:pointer;`;