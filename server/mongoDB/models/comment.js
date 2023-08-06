import mongoose from "mongoose";

const Comment = new mongoose.Schema({
    name: { type: String, required: true },
    comments: { type: String, required: true },
    ProfileImage: { type: String, required: true },
    time: { type: String, required: true },
})

const CommentSchema = mongoose.model('Comment', Comment)

export default CommentSchema