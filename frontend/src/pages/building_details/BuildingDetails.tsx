import React, { useState } from 'react';
import { Box, Table, TableHead, TableCell, TableBody } from '@material-ui/core';
import ListItem from '../../components/ListItem';
import EditDialog from '../cities/EditDialog';
import { Building } from '../../client/gql/gql';

const funds = [
    { spent: 15060, name: 'Vnimanie' },
    { spent: 180000, name: 'Renaissance' },
    { spent: 25122, name: 'Tomer' },
  ]

type Props = {
    building: Building
}

const BuildingDetails: React.FC<Props> = ({ building }) => {
    const [isDialogOpened, setDialogOpened] = useState(false)
    const [fund, setFund] = useState<any>()

    return <Box>
        <Box>
            <Table>
                <TableHead>
                    <TableCell>Name</TableCell>
                    <TableCell>Architector</TableCell>
                    <TableCell>Construction year</TableCell>
                    <TableCell>Style</TableCell>
                    <TableCell>Description</TableCell>
                </TableHead>
                <TableBody>
                    <TableCell>{building.name}</TableCell>
                    <TableCell>{building.architector}</TableCell>
                    <TableCell>{building.constructionYear}</TableCell>
                    <TableCell>{building.style}</TableCell>
                    <TableCell>{building.description}</TableCell>
                </TableBody>
            </Table>
        </Box>
        { funds.map(fund => {
            return <ListItem rightValue={`${fund.spent} $`} leftValue={fund.name} 
            editClicked={() => { setDialogOpened(true); setFund(fund) }}/>
        })}
        <EditDialog isOpened={isDialogOpened} handleClose={() => setDialogOpened(false)} title={fund && fund.name}/>
    </Box>
}

export default BuildingDetails;
