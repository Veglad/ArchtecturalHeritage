import { gql } from "apollo-boost"

export type City = {
    id: number
    name: string
    country: string
    chiefArchitector: string
}

export type Fund = {
    id: number
    name: string
    adressOfRegistration: string
    ceo: string
    yearHeritageBudget: number
}

export type Building = {
    id: number
    name: string
    architector: string
    constructionYear: string
    style: string
    description: string
}

export type Donation = {
    fund: Fund
    building: Building
    date: Date
    amount: number
}

export type CitiesData = {
    cities: City[]
}

export const GQL_CITIES_QUERY = gql`
    {
        cities {
            id
            name
            chiefArchitector
            country
        }
    }
`