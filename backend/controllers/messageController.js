import messages from '../data/messages.js'
import messageModel  from '../models/messageModel.js'
import asyncHandler from 'express-async-handler'
 export const addMessage=asyncHandler(async(req,res)=>{

    const {description,from,to}=req.body

    if(description,from,to){

        const message= await messageModel.create({
            description,
            from,
            to
        })
       
        res.json(message)
    }

    else{
        throw new Error('all fields are mandatory !')
    }


 })



