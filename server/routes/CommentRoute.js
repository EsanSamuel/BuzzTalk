import express from 'express'
import * as dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'
import cors from 'cors'

import Comment from '../mongoDB/models/comment.js'
import mongoose from 'mongoose'
const { ObjectId } = mongoose.Schema.Types



const router = express.Router()

dotenv.config()

router.use(cors())

//get comments
router.route('/').get(async (req, res) => {
    //const id = req.params.id

    //const id = '64ceeae5563555a4cb815d04'
    //64ceeae5563555a4cb815d04
    try {
        const comments = await Comment.find({})
        //console.log(comments)

        res.status(200).json({ success: true, data: comments })
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
})

//create comments
router.route('/').post(async (req, res) => {
    try {
        const { name, comments, ProfileImage, time } = req.body
        const photoUrl = await cloudinary.uploader.upload(ProfileImage)

        const Comments = await Comment.create({
            name,
            comments,
            time,
            ProfileImage: photoUrl.url
        })

        res.status(200).json({ success: true, data: Comments })
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
})

export default router