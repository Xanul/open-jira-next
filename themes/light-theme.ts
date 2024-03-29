import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

// Creating a light theme with options like backfround 
// primary, secondary colors

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: grey[300]
    },
    primary: {
      main: '#4a148c'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  },

  // This can change the style of MaterialUI components
  components: {
    MuiAppBar: {
      defaultProps:{
        elevation: 0
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#FFF'
        }
      }
    }
  }

});