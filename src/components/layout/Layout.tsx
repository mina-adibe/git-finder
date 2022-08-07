import { Box } from "@mui/material";
import Header from "../haeder/Header";

const Layout = (props: any) => (
  <Box
    sx={{
      padding: "20px",
      marginTop: "63px",
    }}>
    <Header />

    {props.children}
  </Box>
);
export default Layout;
