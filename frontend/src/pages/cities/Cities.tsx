import React from 'react';
import { Box, Typography } from '@material-ui/core';
import ListItem from '../../components/ListItem';
import { useQuery } from '@apollo/react-hooks';
import { CitiesData, GQL_CITIES_QUERY } from '../../client/gql/gql';
import FullscreenLoading from '../../components/FullscreenLoading'

const Cities: React.FC = () => {
    const { loading, data, error } = useQuery<CitiesData>(GQL_CITIES_QUERY)

    if (loading) return <FullscreenLoading/>
if (error) return <Typography>{error.message}</Typography>

    return <Box>
        { data?.cities.map(city => {
            return <ListItem rightValue={city.country} leftValue={city.name}/>
        })}
    </Box>
}

export default Cities;
