import { AppBar, IconButton, Toolbar, Typography, Link } from "@mui/material"
import { FC, useContext } from "react"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { UiContext } from "../../context/ui";
import NextLink from "next/link";


export const Navbar:FC = () => {

  const { openSideMenu } = useContext(UiContext)

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton 
          size="large" 
          edge='start'
          onClick={ openSideMenu }
        >
          <MenuOutlinedIcon/>
        </IconButton>
        <NextLink href="/" passHref legacyBehavior>
          <Link underline='none' color="white">
            <Typography variant="h6">
              OpenJira App
            </Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  )
}
