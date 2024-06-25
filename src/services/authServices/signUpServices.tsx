"use server"
import { SignUpCreds } from '@/model/auth.model'
import { pb } from '@/utils/pocketbase'


const signUpServices = async (signUpData:SignUpCreds) => {
    console.log(signUpData)
    const record = await pb.collection('guffadis').create(signUpData)
    console.log(record)
}

export default signUpServices