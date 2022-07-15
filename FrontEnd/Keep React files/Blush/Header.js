import React from "react";
import { FiChevronDown, FiSearch, FiMoreVertical } from "react-icons/fi";
import styled from "styled-components";

const Header = () => {
  window.addEventListener("scroll", () => {
    const getHeader = document.getElementById("container");
    const getHeight = getHeader.getBoundingClientRect().height;
    const getScroll = window.pageYOffset;
    if(getScroll > getHeight) {
      getHeader.style.position = "fixed";
      getHeader.style.background = "gray";
    } else {
      getHeader.style.position = "unset";
      getHeader.style.background = "unset";
    }
  })


  return (
    <Container id="container">
      <Left>
        <Logo src="/images/AssignMed/logo-svg.svg" />
        <Nav>
          <span>Illustration</span>
          <Icon>
            <FiChevronDown />
          </Icon>
        </Nav>
        <Nav>
          <span>Artist</span>
        </Nav>
      </Left>
      <Mid>
        <InputHolder>
          <SearchIcon>
            <FiSearch />
          </SearchIcon>
          <Input placeholder="Search" />
        </InputHolder>
      </Mid>
      <Right>
        <Button>try pro free</Button>
        <Button2>Sign In</Button2>
        <MenuIcon>
          <FiMoreVertical />
        </MenuIcon>
      </Right>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top:0;
  z-index:1000;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Mid = styled.div`
  flex: 0.8;
`;

const Right = styled.div`
  display: flex;
`;

const Logo = styled.img`
width:35px;
height:35px;`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  font-weight: 500;
  cursor: pointer;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-left: 3px;
`;

const InputHolder = styled.div`
  display: flex;
  height: 40px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  align-items: center;
`;

const SearchIcon = styled.div`
  margin: 10px;
  opacity: 0.3;
`;

const Input = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  ::placeholder {
    /* color: red; */
  }
`;

const Button = styled.div`
  text-transform: capitalize;
  background-color: #005eff;
  color: white;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    color: #005eff;
    outline: 1px solid #005eff;
    background: white;
  }
`;

const Button2 = styled.div`
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 350ms;
  margin-left: 20px;
  /* color: #005eff; */
  outline: 1px solid rgba(0, 0, 0, 0.3);
  background: white;
  :hover {
    outline: 2px solid #005eff;
  }
`;

const MenuIcon = styled.div`
  outline: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 100px;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  font-size: 20px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    outline: 1px solid #005eff;
  }
`;
