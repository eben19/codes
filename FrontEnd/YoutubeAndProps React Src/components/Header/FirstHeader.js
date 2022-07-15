import React from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { MdMic, MdVideoCall, MdOutlineApps } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";

const FirstHeader = () => {
  return (
    <Container>
      <Left>
        <MenuIcon>
          <AiOutlineMenu />
        </MenuIcon>
        <Logo src="/image/logo.svg" />
      </Left>
      <Mid>
        <InputHolder>
          <Input placeholder="Search" />
          <SearchIcon>
            <BiSearch />
          </SearchIcon>
        </InputHolder>
        <MicIcon>
          <MdMic />
        </MicIcon>
      </Mid>
      <Right>
        <Icon>
          <MdVideoCall />
        </Icon>
        <Icon>
          <MdOutlineApps />
        </Icon>
        <Icon>
          <IoIosNotificationsOutline />
        </Icon>
        <Profile>r</Profile>
      </Right>
    </Container>
  );
};

export default FirstHeader;

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const MenuIcon = styled.div`
  font-size: 25px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  margin-left: 20px;
`;

const Mid = styled.div`
  align-items: center;
  display: flex;
  flex: 0.6;
`;

const InputHolder = styled.div`
  display: flex;
  background: #323232;
  flex: 1;
  align-items: center;
`;

const Input = styled.input`
  height: 35px;
  background: #121212;
  flex: 1;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 17px;
  padding-left: 10px;
`;

const SearchIcon = styled.div`
  padding: 0 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const MicIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  cursor: pointer;
  background: #121212;
  border-radius: 100px;
  margin-left: 10px;
`;

const Right = styled.div`
  display: flex;
`;

const Icon = styled.div`
  font-size: 25px;
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const Profile = styled.div`
  background: #004c3f;
  border-radius: 100px;
  height: 40px;
  width: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const Container = styled.div``

// const Container = styled.div``
