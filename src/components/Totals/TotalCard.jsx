import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

const TotalCard = ({ total, title }) => {
  return (
    <>
      {!total ? (
        <Typography>No Products</Typography>
      ) : (
        <Card sx={{ backgroundColor: '#dbdbdbff', height: '100%' }}>
          <CardActionArea sx={{ height: '100%' }}>
            <CardContent sx={{ height: '100%' }}>
              <Typography variant='h6' component='h6' sx={{ textAlign: 'center' }}>
                {title}
              </Typography>
              <Typography
                variant='h3'
                color='text.dark'
                sx={{ textAlign: 'center', marginTop: 2, fontSize: 30 }}
              >
                {total}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
};

export default TotalCard;
