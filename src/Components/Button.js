import React from 'react';
import styled from 'styled-components';

const Buttons = styled.button`
   width: 250px;
   height: 65px;
   background: #299B01;
   font-size: 21px;
   color: #fff;
   margin-top: 210px;
   font-family: Roboto, sans-sarif;
`;

export const Button = () => (
   <Buttons>
      Добавить
   </Buttons>
);