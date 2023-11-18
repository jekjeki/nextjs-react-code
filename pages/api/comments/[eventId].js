import { MongoClient } from "mongodb"

async function handler(req, res){

    const eventId = req.query.eventId 

    const client = await MongoClient.connect('mongodb+srv://zaki:zaki123@cluster0.jvzl4pa.mongodb.net/')

    if(req.method == 'POST'){

        const {name, email, comment} = req.body
        
        if(!comment || !email || !name){
            return res.status(400).json({
                status: 'fail',
                message: 'data not saved'
            })
        }  
        
        const newComment = {
            name,
            email,
            comment,
            eventId
        }

        const db = client.db('comments')
        const result = await db.collection('comments').insertOne(newComment)
        console.log(result)

        const resultId = result.insertedId

        return res.status(200).json({
            status: 'success', 
            data: {id: resultId}
        })
    } 

    if(req.method == 'GET'){

        const db = client.db('comments')
        const result = await db.collection('comments').find().sort({_id: -1}).toArray()

        const dummy_list = [
            {id: 'c1', email:'budi@email.com',comment: 'good !'},
            {id: 'c2', email:'gogo@email.com',comment: 'well !'}
        ]

        return res.status(200).json({
            status: 'success',
            comments: result
        })
    }

    client.close()
}

export default handler