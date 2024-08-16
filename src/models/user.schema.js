import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcryptjs';


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: (email) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message: 'Please enter a valid email'
        }
    },
    password: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,  // Adds createdAt and updatedAt timestamps,
    versionKey: false  // Disable __v field
});

// Middleware to hash password before saving
userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

// Method to check password validity
userSchema.methods.isValidPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

export default User;