"use client"
import PocketBase from 'pocketbase'

const pb = new PocketBase(process.env.PB_URL)

interface AuthCreds {
    username: string,
    password: string,
}


const loginServices = async (Credentials:AuthCreds) => {

    const authData = await pb.collection('guffadis').authWithPassword(Credentials.username, Credentials.password);
    console.log(authData)

}

export default loginServices