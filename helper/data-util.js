import { MongoClient } from "mongodb"

export async function connectMongo(){
    const client = await MongoClient.connect('mongodb+srv://zaki:zaki123@cluster0.jvzl4pa.mongodb.net/newsletter')
    return client
}

export async function addNewsletter(client, dataReg){
    const db = client.db()
    await db.collection('newsletter').insertOne(dataReg)
}