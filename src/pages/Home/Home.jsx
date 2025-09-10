import { Grid } from '@mui/material';
import LastsContent from '../../components/Lasts/LastsContent';
import TotalsContent from '../../components/Totals/TotalsContent';

const Home = () => {
  return (
    <>
      <TotalsContent />
      <Grid sx={{ mt: 3 }}>
        <LastsContent sx={{ mt: 2 }} />
      </Grid>
    </>
  );
};

export default Home;
