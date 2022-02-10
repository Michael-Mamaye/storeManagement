import express from 'express'
import { addNewUser, getAllUsers, UpdateUser,getSingleUser,deleteUser } from '../controller/usersController.js';

const userRouter=express.Router()


userRouter.route('/users')
    .get(getAllUsers)
    .post(addNewUser)

userRouter.route('/users/:id') 
    .put(UpdateUser)
    .get(getSingleUser)
    .delete(deleteUser)

export default userRouter;




