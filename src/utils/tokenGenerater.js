import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secrete'; 
const JWT_EXPIRES_IN = '7d'; // Token expiration time


// Function to generate a JWT
export const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
    );
};