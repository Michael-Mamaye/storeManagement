import express from 'express'
import { addNewUser, getAllUsers, UpdateUser,getSingleUser,deleteUser, userLogin } from '../controller/usersController.js';
import auth from '../middleware/auth.js'
const userRouter=express.Router()


userRouter.route('/users')
    .get(getAllUsers)
    .post(addNewUser)

userRouter.route('/users/:id') 
    .put(UpdateUser)
    .get(getSingleUser)
    .delete(deleteUser)
userRouter.route('/login')
    .post(userLogin)
export default userRouter;




