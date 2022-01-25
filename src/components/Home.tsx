import { Box, Typography } from '@mui/material';
import CurrentHoldingsTable from './currentHoldings/CurrentHoldingsTable';
import React from 'react';

const Home = () => (
  <Box>
    <Typography>Cryptobot</Typography>
    <CurrentHoldingsTable />
  </Box>
);

export default Home;
