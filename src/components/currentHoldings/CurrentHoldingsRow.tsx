import { TableCell, TableRow } from '@mui/material';
import { IHolding } from 'types/interfaces';
import React from 'react';

interface ICurrentHoldingsRowProps {
  holding: IHolding;
}

const CurrentHoldingsRow = ({ holding }: ICurrentHoldingsRowProps) => (
  <TableRow>
    <TableCell>{holding.pair}</TableCell>
    <TableCell>{holding.amountCrypto}</TableCell>
    <TableCell>${holding.estimatedAmountCents.toFixed(2)}</TableCell>
  </TableRow>
);

export default CurrentHoldingsRow;
