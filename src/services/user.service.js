import User from '../models/user.schema.js';
import { generateToken } from '../utils/tokenGenerater.js';
import bcrypt from 'bcryptjs';
    

    //create  New User
    async function createUser(userData) {
        const user = await User.findOne({ email: userData.email });
        if (user) {
            throw new Error('User already exists');
        }
        return await User.create(userData);
    };

    //Get All Users with Pagination
    async function getUsers(page, limit) {
        const users =  await User.find({ isDeleted:false }).sort({ createdAt: -1 }).select({password:0}).limit(limit * 1).skip((page - 1) * limit).exec();
        const total = await User.countDocuments({ isDeleted:false });
        return {
            data: users,
            page: page,
            limit: limit,
            total:total
        }
    };

    //Get User By Id
    async function getUserById(id) {
        const user = await User.findById(id).select({password:0});
        if (!user) {
            throw new Error('User not found');
        };
        return user;
    }

    //Update User By Id
    async function updateUser(id, user) {
        if(user.email) {
            const userData = await User.findOne({ email: user.email });
            if (userData) {
                throw new Error('User already exists');
            }
        };
        if(user.password) {
            user.password = await bcrypt.hash(user.password, 10);
        };
        const updatedUser = await User.findByIdAndUpdate
        ({_id:id}, user, { new: true });
        if (!user) {
            throw new Error('User not found');
        }
        return updatedUser;
    };

    //Delete User By Id
    async function deleteUser(id) {
        const user = await User.findByIdAndUpdate
        ({_id:id}, { isDeleted: true }, { new: true });
        if (!user) {
            throw new Error('User not found');
        }
        return {
            message: 'User deleted successfully'
        };
    };

    //Login User
    async function login(email, password) {
        const user = await User.findOne({ email: email });
        if (!user) {
            throw new Error('User not found');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }
       
            const token= generateToken({id:user._id,email:user.email})
        return {
            token: token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        }
    }
export const userService = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    login
};