
import { Pool, Client } from 'pg'
import { City } from 'src/dto/city';
import { citiesQuery } from './queries/cities';

export interface ISQLQuery<T> {
    readonly sql: string,
    readonly variables?: any,
    result?(packets: any): T
}

class PgRepository {
    private pool: Pool;

    constructor(pool: Pool) {
        this.pool = pool
    }

    private execute<T>(query: ISQLQuery<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            this.pool.query(query.sql, query.variables, (error, results) => {
                if (error) {
                    reject(error)
                    return
                }
                let res
                if (query.result) {
                    try {
                        res = query.result(results)
                        resolve(res)
                    } catch (e) {
                        reject(e)
                    }
                }
                resolve(res)
            })
        })
    }

    public async cities(): Promise<City[]> {
        return this.execute(citiesQuery())
    }
}

export default PgRepository
