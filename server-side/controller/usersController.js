import UserModel from "../model/users.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
export const getAllUsers= async (req,res)=>{

    try{
        const userslist= await UserModel.find();
        res.set('Access-Control-Expose-Headers', 'X-Total-Count')
        res.set('X-Total-Count', userslist.length)
        res.send(userslist)
    }
    catch{

    }
}
export const getSingleUser= async (req,res)=>{

    try{
        const userslist= await UserModel.findById({id:req.params.id});
        res.send(userslist)
    }
    catch{

    }
}

export const addNewUser=async(req,res)=>{
    
    try{
        const {firstName, username, password,email, dateOfBirth, gender}=req.body;
        const exist=await UserModel.findOne({email:req.body.email})
        if(exist)
            res.send("user already exist")

        const encryptedpassword= await bcrypt.hash(password,10);
        
        const newUser= await UserModel.create(req.body)
        
        console.log(newUser)

        const token = jwt.sign(
            {user_id:newUser._id,email},

            process.env.TOKEN_KEY,
            {
                expiresIn:"2h"
            }
        )

        newUser.token=token;
        
        res.send(newUser)
    }
    catch{

    }

}
export const UpdateUser= async(req,res)=>{
    try{
        const user=await UserModel.findOneAndUpdate({id:req.params.id},req.body)
        res.send(user)
    }
    catch(err)
    {
        console.log(err)
    }
}
export const deleteUser =async(req,res)=>{
    try{
        const user=await UserModel.findOneAndDelete({id:req.params.id})
    }
    catch(err)
    {
        console.log(err)
    }
}

