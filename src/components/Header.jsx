import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ backgroundColor: '#000000ff' }}>
        <Toolbar>
          <Typography variant='h4' component='div'>
            Superlative
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
