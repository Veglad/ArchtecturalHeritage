import React from 'react';
import { Box } from '@material-ui/core';
import ListItem from '../../components/ListItem';

const funds = [
    { ceo: 'Varlamov Ilya', name: 'Vnimanie' },
    { ceo: 'Kravtsov Alexey', name: 'Soyerr' },
    { ceo: 'Belynskiy Anton', name: 'Renaissance' },
  ]

const Funds: React.FC = () => {
    return <Box>
        { funds.map(fund => {
            return <ListItem rightValue={fund.name} leftValue={fund.ceo}/>
        })}
    </Box>
}

export default Funds;
