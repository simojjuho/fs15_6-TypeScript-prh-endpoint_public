import { BisAddress } from "./BisAddress"
import { BisCompany } from "./BisCompany"
import { BisCompanyBusinessChange } from "./BisCompanyBusinessChange"
import { BisCompanyBusinessLine } from "./BisCompanyBusinessLine"
import { BisCompanyContactDetail } from "./BisCompanyComtactDetail"
import { BisCompanyForm } from "./BisCompanyForm"
import { BisCompanyLanguage } from "./BisCompanyLanguage"
import { BisCompanyLiquidation } from "./BisCompanyLiquidation"
import { BisCompanyName } from "./BisCompanyName"
import { BisCompanyRegisteredEntry } from "./BisCompanyRegisteredEntry"
import { BisCompanyRegisteredOffice } from "./BisCompanyRegisteredOffice"

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