import { Grid, Skeleton, Card } from "@mui/material";
import LastUserCard from "../../components/Last/LastUserCard";
import TotalsContent from "../../components/Totals/TotalsContent";
import Table from "../../components/Table/Table";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const {
    data: users,
    loading: loadingUsers,
    error: errorUsers,
  } = useFetch("http://localhost:3000/api/users");

  const {
    data: products,
    loading: loadingProducts,
    error: errorProducts,
  } = useFetch("http://localhost:3000/api/products");

  const totalCategories = products
    ? Object.keys(products.countByCategory).length
    : 0;

  const isLoading = loadingUsers || loadingProducts;

  return (
    <Grid container spacing={3}>
      {/* Totales */}
      <Grid size={{ xs: 12, md: 12 }}>
        {isLoading ? (
          <Grid container spacing={3}>
            {[1, 2, 3].map((i) => (
              <Grid size={{ xs: 12, sm: 4, md: 4 }} key={i}>
                <Card sx={{ p: 2 }}>
                  <Skeleton variant="rectangular" width="100%" height={80} />
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          products &&
          users && (
            <TotalsContent
              products={products}
              users={users}
              loadingProducts={loadingProducts}
              loadingUsers={loadingUsers}
              totalCategories={totalCategories}
            />
          )
        )}
      </Grid>

      {/* Dos columnas */}
      <Grid container spacing={3} alignItems="stretch">
        {/* Columna izquierda */}
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{ display: "flex", flexDirection: "column" }}>
          <Grid container spacing={3} sx={{ flex: 1, flexDirection: "column" }}>
            <Grid size={{ xs: 12 }} sx={{ flex: 1, display: "flex" }}>
              {isLoading && !users ? (
                <Card sx={{ p: 2, flex: 1 }}>
                  <Skeleton variant="rectangular" width="100%" height="100%" />
                </Card>
              ) : (
                users && (
                  <LastUserCard
                    loadingUsers={loadingUsers}
                    users={users}
                    sx={{ flex: 1 }}
                  />
                )
              )}
            </Grid>
            <Grid size={{ xs: 12 }} sx={{ flex: 1, display: "flex" }}>
              {isLoading ? (
                <Card sx={{ p: 2, flex: 1 }}>
                  <Skeleton variant="rectangular" width="100%" height="100%" />
                </Card>
              ) : (
                products && (
                  <CategoryCard
                    categories={products.countByCategory}
                    sx={{ flex: 1 }}
                  />
                )
              )}
            </Grid>
          </Grid>
        </Grid>

        {/* Columna derecha (tabla) */}
        <Grid size={{ xs: 12, md: 8 }} sx={{ display: "flex" }}>
          {isLoading ? (
            <Card sx={{ p: 2, flex: 1 }}>
              <Skeleton variant="rectangular" width="100%" height="100%" />
            </Card>
          ) : (
            products && (
              <Table
                products={products.products}
                loadingProducts={loadingProducts}
                sx={{ flex: 1, height: "100%" }}
              />
            )
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
