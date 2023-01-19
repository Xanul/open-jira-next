import { Typography } from '@mui/material';
import type { NextPage } from 'next';

// We use typography instead of default HTML tag to use materialUI options
// like variant and color 
const HomePage: NextPage = () => {
  return (
    <Typography variant='h1' color='primary'>Hola Mundo</Typography>
  )
}

export default HomePage
