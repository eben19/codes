import React from "react";
import styled from "styled-components";

const Illustration = () => {
  return (
    <Container>
      <PictureText>
        <Picture>
          <Right>
            <img src="./image/subfooter1.svg" />
          </Right>
          <Mid>
            <img src="./image/subfooter2.svg" />
          </Mid>
          <Left>
            <img src="./image/subfooter3.svg" />
          </Left>
        </Picture>

        <Text>
          <span>Let's create your first illustration!</span>
        </Text>
      </PictureText>

      <Button>
        <Click>Create Random!</Click>
      </Button>
    </Container>
  );
};
export default Illustration;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
`;
const PictureText = styled.div`
  width: 45%;
  height: 60%;
  margin-bottom: 1%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Picture = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const Text = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;

  span {
    margin-top: 5px;
    font-size: 30px;
    font-weight: 700;
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  position: relative;

  img {
    margin-top: 105px;
    position: absolute;
    left: 70px;
  }
`;
const Mid = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  img {
    margin-top: 100px;
    position: absolute;
    z-index: 1;
  }
`;
const Left = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  img {
    margin-top: 105px;
    position: absolute;
    right: 100px;
  }
`;
const Button = styled.div`
  width: 45%;
  height: 10%;
  display: flex;
  justify-content: center;
`;
const Click = styled.button`
  padding: 10px 20px;
  background: black;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
`;
