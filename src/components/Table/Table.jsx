import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import useFetch from "../../hooks/useFetch";
import { formatNumber } from "../../services/formatNumber";

const Table = ({ products, loadingProducts }) => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "title",
      headerName: "Titulo",
      flex: 2,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "price",
      headerName: "Precio",
      flex: 1,
      align: "center",
      headerAlign: "center",
      valueGetter: (value, row) => formatNumber(row.price),
    },
    {
      field: "sizes",
      headerName: `Size`,
      flex: 1,
      align: "center",
      headerAlign: "center",
      valueGetter: (value, row) => row.sizes[0].size,
    },
    {
      field: "stock",
      headerName: "Stock",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
  ];

  return (
    <>
      <Box sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={products}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 8,
              },
            },
          }}
          pageSizeOptions={[8]}
          disableRowSelectionOnClick
          loading={loadingProducts}
        />
      </Box>
    </>
  );
};

export default Table;
