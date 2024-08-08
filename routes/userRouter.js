import express from "express";
import userList from '../src/controllers/user/userList.js';
import createUser from '../src/controllers/user/createUser.js';
import userById from '../src/controllers/user/userById.js';
import editUser from '../src/controllers/user/edituser.js';
import deleteUser from '../src/controllers/user/deleteUser.js';
import editNameUser from '../src/controllers/user/editNameUser.js';

const router = express.Router();


    
router.get('/', userById);
router.get('/list',  userList );
router.post('/', createUser)
router.put('/', editUser);
router.patch('/', editNameUser);  
router.delete('/', deleteUser);

 

export default router;