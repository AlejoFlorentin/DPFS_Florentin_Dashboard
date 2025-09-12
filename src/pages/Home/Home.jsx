import { Grid } from '@mui/material';
import LastUserCard from '../../components/Last/LastUserCard';
import TotalsContent from '../../components/Totals/TotalsContent';
import Table from '../../components/Table/Table';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  return (
    <>
      <TotalsContent />
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid size={{ xs: 12, sm: 5, md: 5 }}>
          <LastUserCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 7, md: 7 }}>
          <Table />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
