import * as R from 'ramda';
import { Table, TableBody, TableCell, TableContainer, TableHead } from '@mui/material';
import CurrentHoldingsRow from './CurrentHoldingsRow';
import { IHolding } from 'types/interfaces';
import React from 'react';
import useCurrentHoldings from '../../hooks/useCurrentHoldings';

const mapCurrentHoldings = (holding: IHolding) => <CurrentHoldingsRow holding={holding} />;

const CurrentHoldingsTable = () => {
  const { currentHoldings } = useCurrentHoldings();
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableCell>Coin</TableCell>
          <TableCell>Current Holding</TableCell>
          <TableCell>Estimated Value</TableCell>
        </TableHead>
        <TableBody>{R.map(mapCurrentHoldings, currentHoldings)}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default CurrentHoldingsTable;
