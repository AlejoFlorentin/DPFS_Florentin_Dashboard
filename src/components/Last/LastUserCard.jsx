import {
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from '@mui/material';
import useFetch from '../../hooks/useFetch';
import { formatDate } from '../../services/formatDate';
import { Link } from 'react-router';

const LastUserCard = () => {
  const {
    data: users,
    loading: loadingUsers,
    error: errorUsers,
  } = useFetch('http://localhost:3000/api/users');

  return (
    <>
      {loadingUsers ? (
        <Box
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}
        >
          <CircularProgress color='inherit' />
        </Box>
      ) : (
        users != null && (
          <Card sx={{ backgroundColor: '#dbdbdbff' }}>
            <Grid container spacing={1}>
              <Grid size={{ xs: 12, md: 6 }}>
                <CardMedia
                  component='img'
                  height='auto'
                  image={
                    users.users[users.users.length - 1].image
                      ? `http://localhost:3000${users.users[users.users.length - 1].image.url}`
                      : '/src/assets/img/default.jpg'
                  }
                  alt='User'
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                  variant='p'
                  component='p'
                  sx={{ m: 2, mb: 0, borderBottom: '1px solid #b6b3b3ff' }}
                >
                  Ultimo usuario creado
                </Typography>
                <CardHeader
                  sx={{ m: 0, mb: 0 }}
                  title={`${users.users[users.users.length - 1].name} ${
                    users.users[users.users.length - 1].last_name
                  }`}
                  subheader={`Fecha Creación:  ${formatDate(
                    users.users[users.users.length - 1].created_at.slice(0, 10)
                  )}`}
                />
                <Link to={`${users.users[users.users.length - 1].detail}`}>
                  <Button
                    size='small'
                    variant='contained'
                    sx={{ backgroundColor: 'black', m: 2, mt: 0 }}
                  >
                    Ver Detalle
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Card>
        )
      )}
    </>
  );
};

export default LastUserCard;
