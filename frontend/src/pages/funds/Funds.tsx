import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import ListItem from '../../components/ListItem';
import EditDialog from '../cities/EditDialog';
import { Fund } from '../../client/gql/gql';

const funds = [
    { ceo: 'Varlamov Ilya', name: 'Vnimanie' },
    { ceo: 'Kravtsov Alexey', name: 'Soyerr' },
    { ceo: 'Belynskiy Anton', name: 'Renaissance' },
  ]

const Funds: React.FC = () => {
    const [isDialogOpened, setDialogOpened] = useState(false)
    const [fund, setFund] = useState<any>()
    
    return <Box>
        { funds.map(fund => {
            return <ListItem rightValue={fund.name} leftValue={fund.ceo}
             editClicked={() => { setDialogOpened(true); setFund(fund) }}/>
        })}
        <EditDialog isOpened={isDialogOpened} handleClose={() => setDialogOpened(false)} title={fund && fund.name}/>
    </Box>
}

export default Funds;
