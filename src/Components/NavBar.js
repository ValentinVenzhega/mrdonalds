import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import logoUser from '../image/sign.svg';

const NavBarStyled = styled.header`
   position: fixed;
   top: 0;
   left: 0;
   z-index: 999;
   height: 80px;
   width: 100vw;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 15px;
   background-color: #299B01;
   color: white;
`;

const Logo = styled.div`
   display: flex;
   align-items: center;
`;

const H1 = styled.h1`
   font-size: 24px;
   margin-left: 15px;
`;

const ImgLogo = styled.img`
   width: 50px;
`;

const User = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const ImgUser = styled.img`
   width: 30px
`;

const Button = styled.button`
   font-size: 16px;
   color: #ffffff;
   border: none;
   background: rgba(255, 255, 255, 0);
   font-weight: 600;
   margin-top: 3px;

   
`;

export const NavBar = () => (
   <NavBarStyled>
      <Logo>
         <ImgLogo src={logoImg} alt="logo" />
         <H1>MrDonald's</H1>
      </Logo>
      <User>
         <ImgUser src={logoUser} alt="user" />
         <Button>войти</Button>
      </User>
   </NavBarStyled>
);