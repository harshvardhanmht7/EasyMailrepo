import express from "express";
import {addMessage} from '../controllers/messageController.js'

const router=express.Router()


  router.route('/addmessage').post(addMessage)


  export default router