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

        const {fullName,dateOfBirth,gender,role,username,password,email,id}=req.body

        const exist=await UserModel.findOne({email:req.body.email})
        if(exist)
            res.send("user already exist")

        const encryptedpassword= await bcrypt.hash(password,10);

        console.log(process.env.TOKEN_KEY)
        const newUser= await UserModel.create({fullName,dateOfBirth,gender,role,username,password:encryptedpassword,email,id})
        
        const token = jwt.sign(
            {user_id:newUser._id,email},process.env.TOKEN_KEY,{expiresIn:"2h"}
        )

        newUser.token=token;
        console.log(newUser)
        res.send(newUser)
    }
    catch(err){
        console.log(err)
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

export const userLogin = async (req,res) =>{
    
    const {email,password}=req.body

    const exist= await UserModel.findOne({email:email})
    console.log(exist)
    if(!exist)
        res.send("user does not exist");

    else if (await bcrypt.compare(password,exist.password)){
        const token = jwt.sign(
            {user_id:exist._id,email},process.env.TOKEN_KEY,{expiresIn:"2h"}
        )
        res.send("Welcome")
        // res.cookie('token',token,{maxAge:2*60*60*1000, httpOnly:true})
        res.redirect('/')
        return
    }
    else{
        res.send("Invalid email or password")
    }

}