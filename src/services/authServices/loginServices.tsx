"use client"
import PocketBase from 'pocketbase'

const pb = new PocketBase(process.env.PB_URL)

interface AuthCreds{
    identity:string,
    password:string
}


const loginServices = async (Credentials:AuthCreds) => {
    console.log(Credentials)
    const authData = await pb.collection('guffadis').authWithPassword(Credentials.identity, Credentials.password);
    console.log(authData)

}

export default loginServices