import mongoose from "mongoose"
const newUser = new mongoose.Schema({
    email: {type: String,required: true, unique: true},
    password: {type: String,required: true}

})
const User = mongoose.model('User',newUser)
export default User