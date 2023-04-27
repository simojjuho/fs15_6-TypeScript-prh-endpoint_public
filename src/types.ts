/**
* Types from https://avoindata.prh.fi/ytj_en.html
*/

export interface BisCompany {
    businessId: string
    registrationDate: string
    companyForm?: string
    detailsUri?: string
    name: string
}

export interface BisCompanyDetails extends BisCompany {
    names: BisCompanyName[]
    auxiliaryNames?: BisCompanyName[]
    addresses?: BisAddress[]
    companyForms?: BisCompanyForm[]
    liquidations?: BisCompanyLiquidation[]
    businesSLines?: BisCompanyBusinessLine[]
    languages?: BisCompanyLanguage[]
    registeredOffices?: BisCompanyRegisteredOffice[]
    contactDetails?: BisCompanyContactDetail[]
    registeredEntries?: BisCompanyRegisteredEntry[]
    businessChanges?: BisCompanyBusinessChange[]
}

interface BisCompanyName extends BisBaseDetail {
    order: number
    name: string
}

interface BisAddress {
    careOf?: string
    street?: string
    postCode?: string
    city?: string
    type: number
    country?: string
}

interface BisCompanyForm extends BisBaseDetail {
    name: string
    type: string
}

interface BisCompanyLiquidation extends BisBaseDetail{
    name: string
    type: string
}

interface BisCompanyBusinessLine extends BisBaseDetail{
    order: number
    name: string
}

interface BisCompanyLanguage extends BisBaseDetail {
    name: string
}

interface BisCompanyRegisteredOffice extends BisBaseDetail {
    order: number
    name: string
}

interface BisCompanyContactDetail extends BisBaseDetail {
    value: string
    type: string
}

//BisCompanyRegisteredEntry extends BisBaseDetail except for with omitted source and version
interface BisCompanyRegisteredEntry extends Omit<BisBaseDetail, 'source' | 'version'> {
    description: string
    status: number
    register: number
    authority: number
}

interface BisCompanyBusinessChange {
    source?: number
    description: string
    reason: string
    changeDate?: string
    change: number
    oldBusinessId: string
    newBusinessId: string
    language?: string
}

interface BisBaseDetail {
    source?: number
    version: number
    registrationDate: string
    endDate?: string
    language?: string
}
