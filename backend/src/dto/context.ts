import { Repository } from '../db/Repository';
import PgRepository from 'src/db/PgRepository';

export interface Context {
    readonly repository: PgRepository;
}
