import UserModel from "../model/users.js";

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
        const newUser=await UserModel.create(req.body)

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

