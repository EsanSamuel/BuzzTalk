import mongoose from "mongoose";

const Auth = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const AuthSchema = mongoose.model('Auth', Auth)

export default AuthSchema