import PgRepository from 'src/db/PgRepository';

export interface Context {
    readonly repository: PgRepository;
}
