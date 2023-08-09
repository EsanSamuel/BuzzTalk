import express from 'express'
import * as dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'
import cors from 'cors'

import Post from '../mongoDB/models/post.js'
import Comment from '../mongoDB/models/comment.js'

dotenv.config()

const router = express.Router()

router.use(cors());

cloudinary.config({
    cloud_name: 'dirm0bwdw',
    api_key: '244737511899697',
    api_secret: 'LBf0Bay00WC4w1bonkdeapChUO4',
})

router.route('/').get(async (req, res) => {
    try {
        const posts = await Post.find({})

        res.status(200).json({ success: true, data: posts })
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
})

router.route('/').post(async (req, res) => {
    try {
        const { name, details, image, ProfileImage } = req.body
        const photoUrl = await cloudinary.uploader.upload(image)
        const ProfileUrl = await cloudinary.uploader.upload(ProfileImage)


        const newPost = await Post.create({
            name,
            details,
            image: photoUrl.url,
            ProfileImage: ProfileUrl.url

        })

        res.status(200).json({ success: true, data: newPost })
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
})

/*router.route('/').put(async (req, res) => {
    try {
        const likePost = await Post.findByIdAndUpdate(req.body.postId,
            {
                $push: { likes: req.user._id }
            }, {
            new: true
        })

        res.status(200).json({ success: true, data: likePost })
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
})*/

router.route('/:id').post(async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        
        post.likes += 1;
        await post.save();

        res.status(200).json({ success: true, message: 'Post liked successfully!' })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//delete post
router.route('/:id').delete(async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)

        //await post.remove()

        res.status(200).json({ success: true, message: 'Post deleted successfully!' })
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }

})


export default router