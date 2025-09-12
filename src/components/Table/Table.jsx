import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import useFetch from '../../hooks/useFetch';

const Table = () => {
  const {
    data: products,
    loading: loadingProducts,
    error: errorProducts,
  } = useFetch('http://localhost:3000/api/products');

  const columns = products?.products?.length
    ? Object.keys(products.products[0]).map(key => ({
        field: key,
        headerName: key.toUpperCase(),
        width: 150,
        editable: false,
      }))
    : [];

  return (
    <>
      {products !== null && (
        <Box sx={{ height: 500, width: '100%' }}>
          <DataGrid
            rows={products.products}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
            loading={loadingProducts}
          />
        </Box>
      )}
    </>
  );
};

export default Table;
