import userModel  from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import {generateToken} from '../utils/generateToken.js'

//POST api/users/addUser

 export const addUser=asyncHandler(async(req,res)=>{

    const {name,email,password}=req.body

    if(name,email,password){

        const exist=await userModel.find({email})
        if(!exist){
            const user= await userModel.create({
                name,
                email,
                password
            })
            res.json(user)
        }
       else{
           throw new Error('User already  exist ! ')
       }
       
        
    }

    else{
        throw new Error('all fields are mandatory for user !')
    }


 })



//POST api/users/login

export const loign=asyncHandler(async(req,res)=>{

const {email,password}=req.body



if(email,password){

    

    const [user]=await userModel.find({email:email})
    
    
    
    if (user){
        
         if(password===user.password){
            
           res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
           })

         }
         else{
             res.status(401)
             throw new Error('Password is incorrect !')
         }
    }
    else{
        throw new Error('user does not exist with this email !')
    }

}
else{
    throw new Error('Please fill all fields !')
}

})





//GET api/users/
 export const getUsers=asyncHandler(async(req,res)=>{
     console.log('test')

  try {
    
    const users= await userModel.find({ _id: { $nin: [req.user._id] } })
       
        res.json(users)
    }

 catch (error) {
       throw new Error('error in find get all users !')
  }



 })



