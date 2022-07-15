import { buildQueries } from "@testing-library/react";
import React from "react";
import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";

const Community = () => {
  return (
    <Container>
      <Title>
        <span
          style={{
            fontWeight: 600,
          }}
        >
          From the community
        </span>
        <span>
          Browse all{" "}
          <AiOutlineRight
            style={{
              fontSize: 12,
            }}
          />
        </span>
      </Title>
      <Body>
        <Top>
          <First>
            <img src="./image/1.png" />
          </First>
          <Second>
            <img src="./image/2.png" />
          </Second>
          <Third>
            <img src="./image/3.png" />
          </Third>
          <Fourth>
            <img src="./image/4.png" />
          </Fourth>
        </Top>
        <Bottom>
          <First>
            <img src="./image/5.png" />
          </First>
          <Second>
            <img src="./image/6.png" />
          </Second>
          <Third>
            <img src="./image/7.png" />
          </Third>
          <Fourth>
            <img src="./image/8.png" />
          </Fourth>
        </Bottom>
      </Body>
    </Container>
  );
};
export default Community;

const Container = styled.div`
  margin-top: 100px;
  height: calc(100vh - 100px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
`;
const Title = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 20px;
  }
`;
const Body = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Top = styled.div`
  width: 100%;
  height: 48%;
  display: flex;
  justify-content: space-between;
`;
const First = styled.div`
  width: 48%;
  height: 100%;
  margin-right: 1%;
  border: 1px solid lightgray;
  border-radius: 10px;
  overflow: hidden;

  img {
    height: 99%;
    object-fit: contain;
  }
`;
const Second = styled.div`
  width: 48%;
  height: 100%;
  margin-right: 1%;
  border: 1px solid lightgray;
  border-radius: 10px;
  overflow: hidden;

  img {
    height: 99%;
    object-fit: contain;
  }
`;
const Third = styled.div`
  width: 48%;
  height: 100%;
  margin-right: 1%;
  border: 1px solid lightgray;
  border-radius: 10px;
  overflow: hidden;

  img {
    height: 99%;
    object-fit: contain;
  }
`;
const Fourth = styled.div`
  width: 48%;
  height: 100%;
  border: 1px solid lightgray;
  border-radius: 10px;
  overflow: hidden;

  img {
    height: 99%;
    object-fit: contain;
  }
`;
const Bottom = styled.div`
  width: 100%;
  height: 48%;
  display: flex;
`;
