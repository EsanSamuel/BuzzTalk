import express from 'express'
import * as dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'
import cors from 'cors'
import Auth from '../mongoDB/models/auth.js'

dotenv.config()

const router = express.Router()

router.route('/').post(async (req, res) => {
    Auth.create(req.body).
        then(auth => res.json(auth))
        .catch((err) => console.log(err))

})

router.route('/').get(async (req, res) => {
    res.send('Auth server working!')
})


export default router