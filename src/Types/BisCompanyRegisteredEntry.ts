import { BisBaseDetail } from "./BisBaseDetail"

//BisCompanyRegisteredEntry extends BisBaseDetail except for with omitted source and version
export interface BisCompanyRegisteredEntry extends Omit<BisBaseDetail, 'source' | 'version'> {
    description: string
    status: number
    register: number
    authority: number
}