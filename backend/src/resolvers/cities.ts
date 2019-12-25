import { IFieldResolver } from 'graphql-tools';
import { City } from 'src/dto/city';

const cities: IFieldResolver<unknown, any> = (_root, _args) => {

    const cities: City[] = [
        {
            id: 1,
            name: "Kharkiv",
            chiefArchitector: "Ivan",
            country: "Ukraine"
        },
        {
            id: 2,
            name: "Lviv",
            chiefArchitector: "Ivane",
            country: "Ukraine"
        }
    ]

    return cities
}

export default cities
