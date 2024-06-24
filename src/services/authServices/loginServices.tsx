"use client"
import PocketBase from 'pocketbase'

const pb = new PocketBase(process.env.PB_URL)


const loginServices = async (Credentials:any) => {

    const authData = await pb.collection('guffadis').authWithPassword(Credentials.username, Credentials.password);
    console.log(authData)

}

export default loginServices