import { FC } from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import { Navbar, Sidebar } from "../ui";

// We need to 
interface Props {
  title?: string;
  children?: JSX.Element;
}

export const Layout: FC<Props> = ({ title = "OpenJira App", children }) => {
  return (
    // The sx property its like css code but it has access to the themes
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Box sx={{ padding: "10px 20px" }}>
        {children}
      </Box>
    </Box>
  );
};
