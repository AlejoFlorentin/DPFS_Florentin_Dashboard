import { AppBar, Container, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: 'black',
        height: '100px',
      }}
      component='nav'
    >
      <Container
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
        maxWidth='md'
      >
        <Toolbar>
          <Typography variant='h4' component='div'>
            Superlative Dashboard
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
