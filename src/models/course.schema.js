import { Schema,model } from "mongoose";

const courseSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    searchKeys: {
        type: [String],
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    versionKey: false
});

const Course = model('Course', courseSchema);

export default Course;