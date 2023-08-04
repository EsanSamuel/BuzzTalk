import express from 'express'
import * as dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'
import cors from 'cors'
import Auth from '../mongoDB/models/auth.js'

dotenv.config()

const router = express.Router()

router.route('/').post(async (req, res) => {
    const { name, password, email } = req.body

    try {
        const auth = await Auth.create({
            name,
            password,
            email
        })
        res.status(200).json({ success: true, data: auth })
    } catch (error) {
        res.status(400).json({ success: false, message: error })
    }


})

router.route('/').get(async (req, res) => {
    res.send('Auth server working!')
})


export default router