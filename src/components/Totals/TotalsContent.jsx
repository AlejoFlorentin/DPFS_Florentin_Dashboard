import useFetch from '../../hooks/useFetch';
import TotalCard from './TotalCard';
import { Box, CircularProgress, Grid } from '@mui/material';

const TotalsContent = () => {
  const {
    data: users,
    loading: loadingUsers,
    error: errorUsers,
  } = useFetch('http://localhost:3000/api/users');

  const {
    data: products,
    loading: loadingProducts,
    error: errorProducts,
  } = useFetch('http://localhost:3000/api/products');

  const totalCategorias = products ? Object.keys(products.countByCategory).length : 0;

  return (
    <>
      {loadingProducts || (loadingUsers && !products) || !users ? (
        <Box
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}
        >
          <CircularProgress color='inherit' />
        </Box>
      ) : (
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <TotalCard total={users.total} title='Usuarios Totales' />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <TotalCard total={products.total} title='Productos Totales' />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <TotalCard total={totalCategorias} title='Categorias Totales' />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default TotalsContent;
