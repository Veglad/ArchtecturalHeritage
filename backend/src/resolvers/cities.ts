import { IFieldResolver } from 'graphql-tools';
import { Context } from 'src/dto/Context';

const cities: IFieldResolver<unknown, Context> = async (_root, _args, { repository }) => {
    // return await repository.cities()
    return [{
            id: 1,
            name: 'Kharkiv',
            country: 'Ukraine',
            chiefArchitector: 'Ivan'
        }, {
            id: 2,
            name: 'Lviv',
            country: 'Ukraine',
            chiefArchitector: 'Ivan'
        }, {
            id: 3,
            name: 'Kyiv',
            country: 'Ukraine',
            chiefArchitector: 'Ivan'
        }, {
            id: 4,
            name: 'Odesa',
            country: 'Ukraine',
            chiefArchitector: 'Ivan'
        }
    ]
}

export default cities
