import { createTheme } from "@mui/material";
import { red, pink } from "@mui/material/colors";

// Creating a dark theme with options using the default primary and 
// background color
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },

    // This can change the style of MaterialUI components
  components: {
    MuiAppBar: {
      defaultProps:{
        elevation: 0
      },
      styleOverrides: {
        root: {
          backgroundColor: '#4a148c'
        }
      }
    },
  },
});
