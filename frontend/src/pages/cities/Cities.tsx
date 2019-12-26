import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import ListItem from '../../components/ListItem';
import { useQuery } from '@apollo/react-hooks';
import { CitiesData, GQL_CITIES_QUERY } from '../../client/gql/gql';
import FullscreenLoading from '../../components/FullscreenLoading'
import EditDialog from './EditDialog';

const Cities: React.FC = () => {
    const { loading, data, error } = useQuery<CitiesData>(GQL_CITIES_QUERY)
    const [isDialogOpened, setDialogOpened] = useState(false)
    const [city, setCity] = useState<any>()

    if (1===1) return <FullscreenLoading />
    if (error) return <Typography>{error.message}</Typography>

    return <Box>
        {data?.cities.map(city => {
            return <ListItem rightValue={city.country} leftValue={city.name} 
            editClicked={() => { setDialogOpened(true); setCity(city) }}/>
        })}
        <EditDialog isOpened={isDialogOpened} handleClose={() => setDialogOpened(false)} title={city && city.name}/>
    </Box>
}

export default Cities;
