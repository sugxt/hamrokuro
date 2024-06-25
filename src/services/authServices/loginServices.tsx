"use client"
import { AuthCreds } from '@/model/auth.model'
import { userConstants } from '@/utils/db.constants';
import { pb } from '@/utils/pocketbase'

export default async function loginServices(Credentials:AuthCreds) {

    const authData = await pb.collection(userConstants.users).authWithPassword(Credentials.identity, Credentials.password);
    console.log(authData)
    if(authData.token){ 
        return true
    }
}