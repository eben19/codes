import React from "react";
import styled from "styled-components";

const Artist = () => {
  return (
    <Container>
      <Top>
        <span>Customize incredible illustrations from</span>
        <span>artists around the world</span>
      </Top>
      <Bottom>
        <Right>
          <First>
            <img src="./image/image(12).webp" />
          </First>
          <Second>
            <h2>Isabela Humphrey</h2>
            <span>
              Visual designer and illustrator currently based in Mexico City.
              Her work is inspired by the vibrant and colorful culture that
              surrounds her.
            </span>
          </Second>
          <Third>
            <Button>Meet all the artists</Button>
          </Third>
        </Right>
        <Mid>
          <First>
            <img src="./image/image(5).webp" />
          </First>
          <Second>
            <h2>Elina Cecilia Giglio</h2>
            <span>
              UX/UI Designer who loves to doodle, illustrate, and move stuff.
              Before part of Mercado Libre UX & Eventbrite.
            </span>
          </Second>
        </Mid>
        <Left>
          <First>
            <img src="./image/image(21).webp" />
          </First>
          <Second>
            <h2>Susana Ortiz</h2>
            <span>
              Artist from Baja, Mexico. Color is essential in my life and my
              work reflects it among my paintings. Abstract and floral designs
              are my main style.
            </span>
          </Second>
        </Left>
      </Bottom>
    </Container>
  );
};
export default Artist;

const Container = styled.div`
  height: 110vh;
  width: 100%;
  /* margin-bottom: 100px; */
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Top = styled.div`
  height: 20%;
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
  height: 100%;
  width: 90%;
  margin: 0px 20px 0px 20px;
  display: flex;
  justify-content: space-between;
`;
const Right = styled.div`
  height: 100%;
  width: 40%;
  margin-right: 1%;
  display: flex;
  flex-direction: column;
`;
const First = styled.div`
  height: 65%;

  img {
    height: 100%;
    width: 100%;
    /* object-fit: contain; */
  }
`;
const Second = styled.div`
  height: 20%;
  margin-top: 5%;

  h2 {
    margin-top: 0px;
    margin-bottom: 10px;
  }
  span {
    color: #838383;
  }
`;
const Third = styled.div`
  height: 10%;
  margin-top: 5%;
  display: flex;
  align-items: flex-end;
  transition: all 350ms;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: white;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 350ms;

  :hover {
    border: 2px solid blue;
  }
`;

const Mid = styled.div`
  height: 100%;
  width: 40%;
  margin-right: 1%;
  display: flex;
  flex-direction: column;
`;
const Left = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
`;
