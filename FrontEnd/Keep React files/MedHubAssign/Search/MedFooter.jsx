import React from 'react';
import styled from 'styled-components';

const MedFoot = () => {
    return (
        <MedFooter>
            <MedFooterHold>
                <MedFooterTop>
                    <Foot1>
                        <img style={{width:'35px', height:"35px", display:"flex", justifyContent:"center"}} src="/images/AssignMed/logo-svg.svg" alt="" />
                        <Word>Med-Hub</Word>
                        <Words>We offer the best of services, which has provided a loyal and classy customer base over the years.</Words>
                        <Socials>
                            <img style={{ width:"25px", height:"25px", borderRadius:"50%" }} src="/images/facebook.png" alt="" />
                            <img style={{ width:"25px", height:"25px", borderRadius:"50%" }} src="/images/linkedin.png" alt="" />
                            <img style={{ width:"25px", height:"25px", borderRadius:"50%" }} src="/images/twitter.png" alt="" />
                        </Socials>
                    </Foot1>

                    <Foot2>
                        <About>
                            <Ab style={{ fontSize:"20px", cursor:"none" }}>ABOUT</Ab>
                            <Ab>Plans</Ab>
                            <Ab>Appointments</Ab>
                            <Ab>Enqiuries</Ab>
                            <Ab>FAQs</Ab>
                        </About>
                    </Foot2>

                    <Foot2>
                    <About>
                            <Ab style={{ fontSize:"20px", cursor:"none" }}>OFFICES</Ab>
                            <Ab>Lagos</Ab>
                            <Ab>Abuja</Ab>
                            <Ab>Port-Harcourt</Ab>
                            <Ab>Kaduna</Ab>
                        </About>
                    </Foot2>

                    <Foot3>
                        <Advan>Visit Us Today</Advan>
                        <Advan2>
                            <Place  placeholder='search' type="text" />
                            <img style={{width:"17px", height:"17px"
                        }} src="/images/search.png" alt="" />
                        </Advan2>
                    </Foot3>

                </MedFooterTop>

                <MedFooterBottom>c. 2022 MED-HUB Inc.</MedFooterBottom>

            </MedFooterHold>
        </MedFooter>
    )
}

export default MedFoot;

const MedFooter = styled.div`
width:100%;
height:45vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
overflow:hidden;`;

const MedFooterHold = styled.div`
width:85%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;`;

const MedFooterTop = styled.div`
width:100%;
height:85%;
display:flex;
justify-content:space-between;
align-items:center;`;

const Foot1 = styled.div`
width:20%;
height:75%;
display:flex;
justify-content:space-between;
flex-direction:column;`;

const Word = styled.div`
font-size:20px;
font-weight:600;
color:purple;`;

const Words = styled.div`
font-size:12px;
text-align:left;
color:purple;`;

const Socials = styled.div`
width:40%;
display:flex;
justify-content:space-between;
align-items:center;
cursor:pointer;`;

const Foot2 = styled.div`
width:20%;
height:75%;
display:flex;
justify-content:space-between;`;

const About = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:space-between;
flex-direction:column;`;

const Ab = styled.div`
font-weight:600;
color:purple;
cursor:pointer;`;

const Foot3 = styled.div`
width:20%;
height:75%;
display:flex;
flex-direction:column;`;

const Advan = styled.div`
font-size:20px;
font-weight:600;
margin-bottom:20px;
color:purple;`;

const Advan2 = styled.div`
width:210px;
height:35px;
border:1px solid purple;
border-radius:5px;
display:flex;
justify-content:center;
align-items:center;`;

const Place = styled.input`
width:85%;
height:90%;
outline:none;
border:none;
font-size:13px;`;

const MedFooterBottom = styled.div`
font-size:20px;
font-weight:600;
color:purple;`;
