import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme, darkTheme } from '../themes'; // Imported themes from ./themes
import { UiProvider } from '../context/ui';
import { EntriesProvider } from '../context/entries';



// We add Theme provider and Cssbaseline to apply the styles to the whole project
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UiProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UiProvider>  
    </EntriesProvider>
  )
}

export default MyApp
