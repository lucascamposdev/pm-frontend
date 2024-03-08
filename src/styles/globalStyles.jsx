
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
  --first-color: #FFFFFF;
  --second-color: #ededed;
  --third-color: #023430;
  --fourth-color: #b9feea;
  --dark-grey: #1D2125;

  --grey: #343b41;
  --light-grey: #c4c4c4;
  
  --blue-color: #006CFA;
  --orange-color: orange;
  --green-color: rgb(12, 171, 73);
  --red-color: #e73939;
  --first-font-color: #FFFFFF;
}

@font-face {
    font-family: 'Main';
    src: url('public/fonts/Euclid-Regular.ttf') format('truetype');
}

@font-face {
    font-family: 'Second';
    src: url('public/fonts/Libre-Regular.ttf') format('truetype');
}

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  position: relative;
}

a{
  text-decoration: none;
  color: inherit;
}
a:visited {
  color: inherit; 
  text-decoration: none;
}
  
/* Scrollbars */
::-webkit-scrollbar {
  width: 5px; 
}

::-webkit-scrollbar-thumb {
  background-color: #d8d8d8; 
  border-radius: 10px; 
}

::-webkit-scrollbar-track {
  background-color: #f1f1f1; 
}

::-ms-scrollbar {
  width: 5px; 
}

::-ms-scrollbar-thumb {
  background-color: #d8d8d8; 
  border-radius: 10px; 
}

::-ms-scrollbar-track {
  background-color: #f1f1f1; 
}

`;

export default GlobalStyle