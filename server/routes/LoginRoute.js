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
                    res.json('Success')
                } else {
                    res.json('Incorrect password!')

                }
            } else {
                res.json('User does not exists')
            }
        })
})

router.route('/').get(async (req, res) => {
    res.send('Login server working!')
})


export default router