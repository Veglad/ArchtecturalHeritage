import { readFileSync } from 'fs'
import express from 'express'
import bodyParser from 'body-parser'
import graphqlHTTP from 'express-graphql'
import { makeExecutableSchema } from 'graphql-tools'
import cors, { CorsOptions } from 'cors'
import resolverMap from './resolvers/resolverMap'

const PORT = 5000

const corsOptions: CorsOptions = {
    origin: true,
    credentials: true
}

const schema = makeExecutableSchema({
    typeDefs: readFileSync('./graphql/schema.graphql', 'utf8'),
    resolvers: resolverMap
})

const app = express()

app.use(cors(corsOptions))
app.use(bodyParser.json())

app.use('/graphql',
    graphqlHTTP(
        () => ({
            schema,
            graphiql: true
        })
    ));

app.get('/health', (req, res) => {
    res.send("It works")
})

// tslint:disable-next-line: no-console
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))
