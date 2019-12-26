import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { Building } from '../../client/gql/gql'
import BuildingDetails from './BuildingDetails'

const building: Building = {
    id: 1,
    name: 'Astoria',
    architector: 'Vasilyev',
    constructionYear: '1913',
    style: 'modern',
    description: 'The Astoria Hotel was built in 1910-1913 and had six floors: the first three were occupied by a merchant bank and office space, the top three were occupied by the hotel itself. The project of architects from St. Petersburg, OI Rzepyshevsky and MV Vasilyev, was executed in the Art Nouveau style.'
}

storiesOf('Building', module)
    .addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
    .add('Primary', () => <BuildingDetails building={building} />)
