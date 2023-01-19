import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

// Creating a default basic theme, we can use a light or dark mode
const basicTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

// We add Theme provider and Cssbaseline to apply the styles to the whole project
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={basicTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
