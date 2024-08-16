import { Schema,model } from "mongoose";

const lessonSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    notes: {
        type: String,
        required: true,
    },
    videoUrl: {
        type: String,
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

const Lesson = model('Lesson', lessonSchema);

export default Lesson;