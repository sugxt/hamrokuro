import PocketBase , {ClientResponseError} from 'pocketbase'
export const pb = new PocketBase(process.env.PB_URL)
export function pbErrorMessage(error:unknown){
    const errorObj = error as ClientResponseError
    return errorObj
}