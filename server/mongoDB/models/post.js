import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types

const Post = new mongoose.Schema({
    name: { type: String, required: true },
    details: { type: String, required: true },
    image: { type: String, required: true },
    ProfileImage: { type: String, required: true },
    likes: [{ type: ObjectId, ref: 'User' }],
})

const PostSchema = mongoose.model('Post', Post)

export default PostSchema