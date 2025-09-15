import TotalCard from "./TotalCard";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";

const TotalsContent = ({
  products,
  loadingProducts,
  users,
  loadingUsers,
  totalCategories,
}) => {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, sm: 4, md: 4 }}>
        <TotalCard total={users.total} title="Usuarios Totales" />
      </Grid>
      <Grid size={{ xs: 12, sm: 4, md: 4 }}>
        <TotalCard total={products.total} title="Productos Totales" />
      </Grid>
      <Grid size={{ xs: 12, sm: 4, md: 4 }}>
        <TotalCard total={totalCategories} title="Categorias Totales" />
      </Grid>
    </Grid>
  );
};

export default TotalsContent;
