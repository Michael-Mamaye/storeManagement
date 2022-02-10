import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
    },
    gender:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:[true,"username is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"]
    }
})


const UserModel=mongoose.model('UserModel',userSchema)

export default UserModel;

