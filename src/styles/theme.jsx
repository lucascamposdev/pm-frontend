import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#023430', // Modifica a cor primária
      },
      secondary: {
        main: '#ededed', // Modifica a cor secundária
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif', // Modifica a família de fontes padrão
      fontSize: 16, // Modifica o tamanho da fonte padrão
    },
    // Outras propriedades do tema que você pode modificar conforme necessário
  });

  export default theme;
