import React from "react";
import styled from "styled-components";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';




function People() {
  return (
      
    <Peop>

      <PeopHold>

          <Why>Why people are raving about Blush</Why>

          <div style={{position:"absolute", background:"white",width:"50px",height:"50px",borderRadius:"50%",top:"150px",right:"30px"}}>
                  <FaArrowRight />
              </div>

              <div style={{position:"absolute", background:"white",width:"50px",height:"50px",borderRadius:"50%",top:"150px",left:"30px"}}>
                  <FaArrowLeft />
              </div>

          <Design>

             

              <DesignHold style={{height:"95%",backgroundColor:"#F6D9F9"}}>
                  <Image src="/images/BlushImg/sideImg.webp" alt="" />
                  <DesWord>We're using Blush to find illustrations for digital products, to add some color and personality. Experience is great so far. Site is lovely. Lush illustrations. Super-easy to add to Figma and play with.</DesWord>
                  <Title>Noam Sohachevsky, Co-founder of SIDE Labs</Title>
                  <Logo src="/images/BlushImg/sideLogo.svg" alt="" />
              </DesignHold>

              <DesignHold style={{height:"80%",backgroundColor:"#F6D9F9"}}>
                  <Image src="/images/BlushImg/figmaImg.webp" alt="" />
                  <DesWord>We're using Blush to find illustrations for digital products, to add some color and personality. Experience is great so far. Site is lovely. Lush illustrations. Super-easy to add to Figma and play with.</DesWord>
                  <Title>Rogie, Designer Advocate at Figma</Title>
                  <Logo src="/images/BlushImg/figmaLogo.svg" alt="" />
              </DesignHold>

              <DesignHold style={{height:"82%",backgroundColor:"#FBF5E2"}}>
                  <Image src="/images/BlushImg/googleImg.webp" alt="" />
                  <DesWord>We're using Blush to find illustrations for digital products, to add some color and personality. Experience is great so far. Site is lovely. Lush illustrations. Super-easy to add to Figma and play with.</DesWord>
                  <Title>Una Kravets, Web Developer Advocate at Google</Title>
                  <Logo src="/images/BlushImg/googleLogo.webp" alt="" />
              </DesignHold>

              <DesignHold style={{height:"80%",backgroundColor:"#F6D9F9"}}>
                  <Image src="/images/BlushImg/zenputImg.webp" alt="" />
                  <DesWord>We're using Blush to find illustrations for digital products, to add some color and personality. Experience is great so far. Site is lovely. Lush illustrations. Super-easy to add to Figma and play with.</DesWord>
                  <Title>Edgar Chaparro, UX Designer at Zenput</Title>
                  <Logo src="/images/BlushImg/zenLogo.webp" alt="" />
              </DesignHold>

              <DesignHold style={{height:"70%",backgroundColor:"#FBF5E2"}}>
                  <Image src="/images/BlushImg/mrcImg.webp" alt="" />
                  <DesWord>We're using Blush to find illustrations for digital products, to add some color and personality. Experience is great so far. Site is lovely. Lush illustrations. Super-easy to add to Figma and play with.</DesWord>
                  <Title>Noam Sohachevsky, Co-founder <br/>of SIDE Labs</Title>
                  <Logo src="/images/BlushImg/mrcLogo.svg" alt="" />
              </DesignHold>

              <DesignHold style={{height:"78%",backgroundColor:"#F6D9F9"}}>
                  <Image src="/images/BlushImg/lexRoman.webp" alt="" />
                  <DesWord>We're using Blush to find illustrations for digital products, to add some color and personality. Experience is great so far. Site is lovely. Lush illustrations. Super-easy to add to Figma and play with.</DesWord>
                  <Title>Noam Sohachevsky, Co-founder <br/>of SIDE Labs</Title>
                  
              </DesignHold>
              
              <DesignHold style={{height:"80%",backgroundColor:"#F6D9F9"}}>
                  <Image src="/images/BlushImg/cdroImg.webp" alt="" />
                  <DesWord>We're using Blush to find illustrations for digital products, to add some color and personality. Experience is great so far. Site is lovely. Lush illustrations. Super-easy to add to Figma and play with.</DesWord>
                  <Title>Caitlin Sowers, UX Designer at EDVO</Title>
                  <Logo src="/images/BlushImg/cdroLogo.svg" alt="" />
              </DesignHold>

              <DesignHold style={{height:"70%",backgroundColor:"#FBF5E2"}}>
                  <Image src="/images/BlushImg/Devin.webp" alt="" />
                  <DesWord>We're using Blush to find illustrations for digital products, to add some color and personality. Experience is great so far. Site is lovely. Lush illustrations. Super-easy to add to Figma and play with.</DesWord>
                  <Title>Devin Mancuso, Design Strategist at Google</Title>
              </DesignHold>

          </Design>


      </PeopHold>

    </Peop>

  );
}

export default People;

const Peop = styled.div`
width:100%;
height:120vh;
display:flex;
justify-content:center;`;

const PeopHold = styled.div`
height:100%;
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;
position:relative;`;

const Why = styled.div`
font-size:30px;
font-weight:bold;`;

const Design = styled.div`
height:85%;
width:100%;
display:flex;
justify-content:space-around;
align-items:center;
flex-direction: row;
overflow-y: hidden;
overflow-x: scroll;
object-fit: contain;`;

const DesignHold = styled.div`
width:350px;
border-radius:10px;
display:flex;
justify-content:space-around;
flex-direction:column;
align-items: center;
margin-left:25px;
margin-right:25px;`;

const Image = styled.img`
width:100px;
height:100px;
border-radius:50%;`;

const DesWord = styled.div`
width:75%;
font-size:15px;
text-align:center;`;

const Title = styled.div`
width:80%;
font-size:17px;
font-weight:700;
text-align:center;`;

const Logo = styled.img`
width:80px;
height:40px;
margin-bottom:30px;`;

// const People = styled.div``;

// const People = styled.div``;

// const People = styled.div``;