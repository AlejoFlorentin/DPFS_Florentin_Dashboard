import Header from './Header';
import { Container } from '@mui/material';

const Layout = props => {
  return (
    <>
      <Header />
      <Container component='main' maxWidth='lg' sx={{ marginTop: 18 }}>
        {props.children}
      </Container>
    </>
  );
};

export default Layout;
