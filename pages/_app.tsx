import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme, darkTheme } from '../themes'; // Imported themes from ./themes
import { UiProvider } from '../context/ui';
import { EntriesProvider } from '../context/entries';
import { SnackbarProvider } from 'notistack'



// We add Theme provider and Cssbaseline to apply the styles to the whole project
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
      <EntriesProvider>
        <UiProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UiProvider>  
      </EntriesProvider>
    </SnackbarProvider>
  )
}

export default MyApp
