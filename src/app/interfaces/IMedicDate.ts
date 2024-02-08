import { Time } from "@angular/common"

export interface MedicDate {
    id : number,
    doctor : string,
    patient: string,
    hour : Time,
    date : Date
}