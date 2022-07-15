import React from "react";
import styled from 'styled-components';


function Creativity() {
  return (
   <Create>
       <CreateHold>

           <Unlock>
              <Lock>Unlock your creativity</Lock>
              <Under>
                  <img style={{width:"150px",height:"10px",position:"absolute",top:"70px",right:"440px"}} src="/images/BlushImg/underline.png" alt="" />
            </Under> 
         </Unlock>

           <Control>

               <ControlHold>
                   <Pen src="/images/BlushImg/control.webp" alt="" />
                   <TheHold>
                       <Have>
                           You have the Control
                       </Have>
                       <Gives>Blush gives you control on every little piece of the artwork. You can mix-and-match different components until you get the perfect doodle.</Gives>
                       </TheHold>
               </ControlHold>

               <ControlHold>
                   <Pen src="/images/BlushImg/worryFree.webp" alt="" />
                   <TheHold>
                       <Have>
                           Worry-Free license
                       </Have>
                       <Gives>The Blush license allows you to use every graphic for personal and commercial purposes without the need for attribution.</Gives>
                       </TheHold>
               </ControlHold>

               <ControlHold>
                   <Pen src="/images/BlushImg/never.webp" alt="" />
                   <TheHold>
                       <Have>
                           Never lose context
                       </Have>
                       <Gives>Blush works with your favorite design tools, that way you can test and iterate the illustrations on your design. No more drag-and-drop from a folder!.</Gives>
                       </TheHold>
               </ControlHold>

               <ControlHold>
                   <Pen src="/images/BlushImg/everything.webp" alt="" />
                   <TheHold>
                       <Have>
                           Everything vector
                       </Have>
                       <Gives>Scale your images up and down without losing any quality. Upgrade to use your illustrations in SVG format.</Gives>
                       </TheHold>
               </ControlHold>

           </Control>

       </CreateHold>
   </Create>
  );
}

export default Creativity;

const Create  = styled.div`
width:100%;
height:60vh;
display:flex;
justify-content:center;
align-items:center;
margin-top:15px;`;

const CreateHold  = styled.div`
width:90%;
height:100%;
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;`;

const Unlock  = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:25%;
position:relative;`;

const Lock  = styled.div`
font-size:30px;
font-weight:bold;
text-align:center;`;

const Under  = styled.div`
`;

const Control  = styled.div`
width:100%;
height:70%;
display:flex;
justify-content:space-between;
flex-wrap: wrap;`;

const ControlHold  = styled.div`
width:48%;
height:45%;
display:flex;
justify-content:space-between`;

const Pen  = styled.img`
width:70px;
height:70px;
margin-top:15px;`;

const TheHold  = styled.div`
width:75%;
height:75%;
display:flex;
justify-content:space-between;
flex-direction:column;
width:83%;`;

const Have  = styled.div`
font-size:23px;
font-weight:bold;
margin-top:10px;`;

const Gives  = styled.div`
font-size:16px;
color:#A2A2A2;
line-height:25px;`;

