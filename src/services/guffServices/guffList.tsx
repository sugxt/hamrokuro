import React from 'react'
import PocketBase from 'pocketbase'

const pb = new PocketBase(process.env.PB_URL)

const guffList = async () => {

    const records = await pb.collection('guffs').getFullList({
        sort: '-created',
    });

    console.log(records)
}

export default guffList