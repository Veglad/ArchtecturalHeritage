import { IResolvers } from 'graphql-tools'
import cities from './cities'

const resolverMap: IResolvers<any, any> = {
    // Mutation: {
        
    // },
    Query: {
        cities
    }
}

export default resolverMap
