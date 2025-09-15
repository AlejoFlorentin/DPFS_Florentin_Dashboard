import Header from "./Header";
import { Container } from "@mui/material";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Container
        component="main"
        maxWidth="xl"
        sx={{ mt: 20, height: 200, mb: 200 }}>
        {props.children}
      </Container>
    </>
  );
};

export default Layout;
