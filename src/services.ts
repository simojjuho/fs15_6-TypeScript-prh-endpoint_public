import axios from 'axios'
import { BisCompany } from './Types/BisCompany'
import { BisCompanyDetails } from './Types/BisCompanyDetails'

const baseUrl = 'https://avoindata.prh.fi/bis/v1'

/**
 * @param id A Finnish company id
 * @returns detailed information about the company specified with companyId parameter
 */
export const getDetailedEntry = async (id: string) => {
    const { data } = await axios.get(`${baseUrl}/${id}`)
    return data.results
   }

/**
 * Returns a list of businesses that meet the demandn given in the parametres:
 * @param maxResults how many results
 * @param resultsFrom Starting point for results
 * @param streetAddressPostCode A Finnish postal code to limit the results by area.
 * @returns result.data, BisCompany array
 */
 export const getListOfEntries = async (
    maxResults: number,
    resultsFrom: number,
    streetAddressPostCode: string ) => {
        const searchObject = `?totalResults=false&resultsFrom=${resultsFrom}&maxResults=${maxResults}&streetAddressPostCode=${streetAddressPostCode}`
        const result = await axios.get(`${baseUrl}${searchObject}`)
        return result.data.results
 }

 export const getListOfDetailedEntries = async () => {
   const entryList: BisCompany[] = await getListOfEntries(3, 0, '35300')
   const businessIds = entryList.map(business => business.businessId)
   return businessIds.map(async id => {
      return await getDetailedEntry(id)

   })
 }

getListOfDetailedEntries().then(elems => {
   Promise.all(elems).then(list => {
      list.forEach(elem => {
         if(Array.isArray(elem)) {
            elem.forEach(nestedElem => {
               console.log(nestedElem)
            })
         } else {
            console.log(elem)
         }
      })
   })
})

/* For testing the services with some pre-set parametres:
 const showList = async () => {
    const result = await getListOfEntries(5, 0, '35300')
    console.log(result)
 }
 
 const showBusinessInDetail = async () => {
    const result = await getDetailedEntry('3282203-3')
    console.log(result)
 }

 showBusinessInDetail()
 showList() */