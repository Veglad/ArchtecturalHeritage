import { Fund } from './fund'
import { Building } from './building'

export type Donation = {
    fund: Fund
    building: Building
    date: Date
    amount: number
}