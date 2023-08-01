import express from 'express'
import * as dotenv from 'dotenv'
import Auth from '../mongoDB/models/auth.js'

dotenv.config()

const router = express.Router()

router.route('/').post(async (req, res) => {
    const { email, password } = req.body
    Auth.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json('success')
                } else {
                    res.json('Something went wrong!')
                }
            }
        })
})

router.route('/').get(async (req, res) => {
    res.send('Login server working!')
})


export default router