import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

const TotalCard = ({ total, title }) => {
  return (
    <>
      {!total ? (
        <Typography>No Products</Typography>
      ) : (
        <Card
          sx={{ backgroundColor: '#dbdbdbff', height: '100%', borderLeft: '5px solid #585858ff' }}
        >
          <CardActionArea sx={{ height: '100%' }}>
            <CardContent sx={{ height: '100%' }}>
              <Typography variant='p' component='p' sx={{ textAlign: 'center' }}>
                {title}
              </Typography>
              <Typography variant='h6' color='text.dark' sx={{ textAlign: 'center' }}>
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
