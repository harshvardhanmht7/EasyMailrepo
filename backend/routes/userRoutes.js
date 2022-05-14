import express from "express";
import {addUser,getUsers, loign} from '../controllers/userController.js'

const router=express.Router()

 router.route('/adduser').post(addUser)
 
 router.route('/').get(getUsers)

 router.route('/login').post(loign)

export default router
