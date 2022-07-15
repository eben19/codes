import React from 'react';
import styled from 'styled-components';
import { BsChevronRight } from 'react-icons/bs';



const Collections = () => {
    return(
        <Try>
            <TryHold>

                <TryTop>
                    <New>Try the New Collections</New>
                    <Brow>Browse All <Bsi> <BsChevronRight /></Bsi> </Brow>
                </TryTop>

                <TryBott>
                    <GoodHold>
                    <Bott src="/images/BlushImg/goddies.jfif" alt="" />
                    <Good>
                        <GoodImg src="/images/BlushImg/spokkyS.png" alt="" />
                        <GoodWord>
                            <Goodies>Goodies</Goodies>
                            <Team>by Blush Team</Team>
                        </GoodWord>
                        </Good>
                        </GoodHold>

                        <GoodHold>
                    <Bott src="/images/BlushImg/wonder.jfif" alt="" />
                    <Good>
                        <GoodImg src="/images/BlushImg/wonderS.png" alt="" />
                        <GoodWord>
                            <Goodies>Wonder Learners</Goodies>
                            <Team>by Sr. Guti</Team>
                        </GoodWord>
                        </Good>
                        </GoodHold>

                        <GoodHold>
                    <Bott src="/images/BlushImg/green.jfif" alt="" />
                    <Good>
                        <GoodImg src="/images/BlushImg/greenSmall.png" alt="" />
                        <GoodWord>
                            <Goodies>Go Green</Goodies>
                            <Team>by Edward Tapia</Team>
                        </GoodWord>
                        </Good>
                        </GoodHold>

                        <GoodHold>
                    <Bott src="/images/BlushImg/spooky.jfif" alt="" />
                    <Good>
                        <GoodImg src="/images/BlushImg/spokkyS.png" alt="" />
                        <GoodWord>
                            <Goodies>Spooky Stickers</Goodies>
                            <Team>by Team Blush</Team>
                        </GoodWord>
                        </Good>
                        </GoodHold>

                </TryBott>

            </TryHold>
        </Try>
    )
}

export default Collections;

const Try  = styled.div`
width:100%;
height:40vh;
display:flex;
justify-content:center;
align-items:center;`;

const TryHold  = styled.div`
width:90%;
height:100%;
display:flex;
justify-content:space-between;
flex-direction:column;`;

const TryTop  = styled.div`
width:100%;
height:10%;
display:flex;
justify-content:space-between;
align-items:center`;

const New  = styled.div`
font-size:18px;
font-weight:600;`;

const Brow  = styled.div`
width:8%;
display:flex;
justify-content:space-between;
font-weight:400;`;

const Bsi  = styled.div`
margin-top:3px`;

const TryBott  = styled.div`
width:100%;
height:85%;
display:flex;
justify-content:space-between;
align-items:center;`;

const GoodHold  = styled.div`
width:24%;
height:100%;
display:flex;
justify-content:space-between;
flex-direction:column;
margin-top:15px;`;

const Bott  = styled.img`
width:100%;
height:75%;
border-radius:15px;`;

const Good  = styled.div`
display:flex;
align-items:center;`;

const GoodImg  = styled.img`
width:40px;
height:40px;
border-radius:50%;
margin-right:10px;`;

const GoodWord  = styled.div`
width:50%;
display:flex;
justify-content:center;
flex-direction:column;`;

const Goodies  = styled.div`
font-size:14px;
font-weight:600;`;

const Team  = styled.div`
font-size:14px;
color:#A2A2A2`;