import  { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   html {
      box-sizing: border-box;
   }

   *,
   *::before,
   *::after {
      box-sizing: border-box;
   }

   body {
      margin: 0;
      background-color: #f0f0f0;
      font-family: Roboto, sans-sarif;
      font-size: 20px;
      color: black;
   }

   img {
      max-width: 100%;
      height: auto;
   }

   a {
      text-decoration: none;
      color: inherit;
   }

   ul {
      list-style: none;
      padding: 0;
      margin: 0;
   }

   h1, h2, h3 {
      font-family: Pacifico;
      padding: 0;
      margin: 0;
   }

   p {
      padding: 0;
      margin: 0;
   }

   button {
      cursor: pointer;
   }

   input, button {
      font-style: inherit;
   }
`;