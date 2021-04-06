import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';

const MenuStyled = styled.main`
   background-color: #ccc;
   margin-top: 80px;
`;

const SectionMenu = styled.section`
   padding: 30px;
`;

const Bunner = styled.section`
   height: 295px;  
   background-image: url(./menu/banner.png);
   background-position: center;
   background-size: cover;
`;


export const Menu = () => (
   <MenuStyled>
      <Bunner/>
      <SectionMenu>
         <h2>Бургеры</h2>
         <ListItem itemList={dbMenu.burger}/>
      </SectionMenu>
      <SectionMenu>
         <h2>Закуски / Напитки</h2>
         <ListItem itemList={dbMenu.other}/>
      </SectionMenu>
   </MenuStyled>
);