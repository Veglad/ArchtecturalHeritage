import React from 'react';
import { Box } from '@material-ui/core';
import ListItem from '../../components/ListItem';

const buildings = [
    { city: 'Kharkiv', name: 'Astoria' },
    { city: 'Kharkiv', name: 'Manufactura' },
    { city: 'Lviv', name: 'Town house' },
    { city: 'Odesa', name: 'Opera theater' },
  ]

const Buildings: React.FC = () => {
    return <Box>
        { buildings.map(building => {
            return <ListItem rightValue={building.city} leftValue={building.name}/>
        })}
    </Box>
}

export default Buildings;
