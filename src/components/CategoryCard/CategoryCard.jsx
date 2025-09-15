import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#dbdbdbff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.primary,
  flexGrow: 1,
  borderRadius: "12px",
  boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
  transition: "transform 0.2s, box-shadow 0.2s",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0px 6px 12px rgba(0,0,0,0.2)",
  },
}));

const CategoryCard = ({ categories }) => {
  return (
    <>
      {categories == null ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}>
          <Typography variant="h6" component="h2" gutterBottom>
            No data available
          </Typography>
        </Box>
      ) : (
        <Box sx={{ width: "100%", height: "100%" }}>
          <Stack
            spacing={3}
            direction="row"
            useFlexGap
            sx={{ flexWrap: "wrap" }}>
            <Item sx={{ width: "25%", bgcolor: "#000000ff", color: "white" }}>
              <Typography variant="subtitle1">Camisetas</Typography>
              <Typography variant="h5" fontWeight="bold">
                {categories.camisetas}
              </Typography>
            </Item>

            <Item sx={{ width: "25%", bgcolor: "#000000ff", color: "white" }}>
              <Typography variant="subtitle1">Pantalones</Typography>
              <Typography variant="h5" fontWeight="bold">
                {categories.pantalones}
              </Typography>
            </Item>

            <Item sx={{ width: "25%", bgcolor: "#000000ff", color: "white" }}>
              <Typography variant="subtitle1">Bermudas</Typography>
              <Typography variant="h5" fontWeight="bold">
                {categories.bermudas}
              </Typography>
            </Item>

            <Item sx={{ width: "25%", bgcolor: "#000000ff", color: "white" }}>
              <Typography variant="subtitle1">Zapatillas</Typography>
              <Typography variant="h5" fontWeight="bold">
                {categories.zapatillas}
              </Typography>
            </Item>
          </Stack>
        </Box>
      )}
    </>
  );
};

export default CategoryCard;
