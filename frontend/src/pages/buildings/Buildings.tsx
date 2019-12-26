import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import ListItem from '../../components/ListItem';
import EditDialog from '../cities/EditDialog';

const buildings = [
    { city: 'Kharkiv', name: 'Astoria' },
    { city: 'Kharkiv', name: 'Manufactura' },
    { city: 'Odesa', name: 'Opera theater' },
  ]

const Buildings: React.FC = () => {
    const [isDialogOpened, setDialogOpened] = useState(false)
    const [building, setBuilding] = useState<any>()

    return <Box>
        { buildings.map(building => {
            return <ListItem rightValue={building.city} leftValue={building.name} 
            editClicked={() => { setDialogOpened(true); setBuilding(building) }}/>
        })}
        <EditDialog isOpened={isDialogOpened} handleClose={() => setDialogOpened(false)} title={building && building.name}/>
    </Box>
}

export default Buildings;
