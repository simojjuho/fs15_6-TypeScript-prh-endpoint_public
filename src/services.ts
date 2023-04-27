import axios from 'axios'
import { BisCompany, BisCompanyDetails } from './types'

const baseUrl = 'https://avoindata.prh.fi/bis/v1'

 const getDetailedEntry = async (id: string) => {
    const result = await axios.get(`${baseUrl}/${id}`)
    return result.data.results[0].addresses as BisCompanyDetails
 }

 const getListOfEntries =async (
    maxResults: number,
    resultsFrom: number,
    streetAddressPostCode: string ) => {
        const searchObject = `?totalResults=false&resultsFrom=${resultsFrom}&maxResults=${maxResults}&streetAddressPostCode=${streetAddressPostCode}`
        const result = await axios.get<BisCompany[]>(`${baseUrl}${searchObject}`)
        return result.data
 }

 const showList = async () => {
    const result = await getListOfEntries(5, 0, '35300')
    console.log(result)
 }
 
 const showBusinessInDetail = async () => {
    const result = await getDetailedEntry('3282203-3')
    console.log(result)
 }

 showBusinessInDetail()
 //showList()