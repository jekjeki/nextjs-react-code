import { MongoClient } from "mongodb"

async function handler(req, res){
    if(req.method == 'POST'){
        const id = new Date().toISOString()
        const email = req.body.email

        if(!email || !email.includes('@')){
            res.status(400).json({
                status: 'fail',
                message: 'invalid address'
            })
            return 
        }

        const client = await MongoClient.connect('mongodb+srv://zaki:zaki123@cluster0.jvzl4pa.mongodb.net/'
        )
        const db = client.db('newsletter')
        await db.collection('newsletter').insertOne({email: email})
        client.close()

        res.status(200).json({
            status: 'success',
            message: 'email successful saved',
            data: {email: email}
        })
        
    }
    else{
        return res.status(200).json({
            message: 'success'
        })
    }
}

export default handler