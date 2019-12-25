import { ISQLQuery } from '../PgRepository'
import { City } from '../../dto/city'

function toCity(city: any): City {
    return {
        id: city.id,
        name: city.name,
        country: city.country,
        chiefArchitector: city.chiefarchitector
    }
}

export function citiesQuery(): ISQLQuery<City[]> {
    return {
        sql: `select * from city`,
        result: (packets) => (packets as any[]).map(toCity)
    }
}