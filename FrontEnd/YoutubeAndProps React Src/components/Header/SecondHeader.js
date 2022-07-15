import React from "react";
import styled from "styled-components";
import Box from "./Box";

const SecondHeader = () => {
  return (
    <Container>
      <Box name="Sasuke Uchiha" />
      <Box name="Music" />
      <Box name="Character" />
      <Box name="Trevoah Noah" />
      <Box name="Trevoah Noah" />
    </Container>
  );
};

export default SecondHeader;

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-left: none;
  border-right: none;
  /* overflow: hidden; */
`;
