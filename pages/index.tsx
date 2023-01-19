import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';



// We use typography instead of default HTML tag to use materialUI options
// like variant and color 

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Typography variant='h1' color='primary'>Hola Mundo</Typography>
    </Layout>
  )
}

export default HomePage
