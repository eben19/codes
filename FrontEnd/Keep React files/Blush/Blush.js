import React from "react";
import styled from "styled-components";

const Blush = () => {
  return (
    <Container>
      <Top>
        <span>How does Blush make designing</span>
        <span>your projects simple and fun?</span>
      </Top>
      <Bottom>
        <Right>
          <Up>
            <img src="./image/image(18).webp" />
          </Up>
          <Down>
            <h2>1. Choose a style</h2>
            <span>
              Choose a collection from multiple styles and themes made by
              artists around the world.
            </span>
          </Down>
        </Right>
        <Mid>
          <Up>
            <img src="./image/image(19).webp" />
          </Up>
          <Down>
            <h2>2. Customize the art</h2>
            <span>
              Play around with the variations until you create the art that
              tells your story.
            </span>
          </Down>
        </Mid>
        <Left>
          <Up>
            <img src="./image/image(20).webp" />
          </Up>
          <Down>
            <h2>3. Use on your design</h2>
            <span>
              Download a PNG or SVG of your creation and use it on your web app,
              presentation, or any project you want to bring to life.
            </span>
          </Down>
        </Left>
      </Bottom>
    </Container>
  );
};
export default Blush;

const Container = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Top = styled.div`
  height: 30%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  span {
    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
  }
`;

const Bottom = styled.div`
  height: 70%;
  width: 90%;
  margin: 25px 20px 0px 20px;
  display: flex;
  justify-content: space-between;
`;

const Right = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
`;
const Up = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 85%;
    width: 100%;
    object-fit: contain;
  }
`;
const Down = styled.div`
  width: 100%;
  height: 40%;

  span {
    font-size: 17px;
    letter-spacing: 0.5px;
  }
`;
const Mid = styled.div`
  height: 100%;
  width: 33%;
`;
const Left = styled.div`
  height: 100%;
  width: 33%;
`;
