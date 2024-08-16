import Lesson from "../models/lessons.schema.js";

//create  New Lesson
async function createLesson(lessonData) {
    return await Lesson.create(lessonData);
}

//Get All Lessons with Pagination
async function getLessons(page, limit) {
    const lessons =  await Lesson.find({ isDeleted:false }).sort({ createdAt: -1 }).limit(limit * 1).skip((page - 1) * limit).exec();
    const total = await Lesson.countDocuments({ isDeleted:false });
    return {
        data: lessons,
        page: page,
        limit: limit,
        total:total
    }
}

//Get Lesson By Id
async function getLessonById(id) {
    const lesson = await Lesson.findById(id);
    if (!lesson) {
        throw new Error('Lesson not found');
    };
    return lesson;
}

//Update Lesson By Id
async function updateLesson(id, lesson) {
    const updatedLesson = await Lesson.findByIdAndUpdate
    ({_id:id
    }, lesson, { new: true });
    if (!lesson) {
        throw new Error('Lesson not found');
    }
    return updatedLesson;
}

//Delete Lesson By Id
async function deleteLesson(id) {
    const lesson = await Lesson.findByIdAndUpdate
    ({_id:id}, { isDeleted: true }, { new: true });
    if (!lesson) {
        throw new Error('Lesson not found');
    }
    return lesson;
}

//search lesson by name or description or searchKey
async function searchLesson(searchKey, page, limit) {
    const lessons = await Lesson.find({$or: [{name: { $regex: searchKey, $options: 'i' }}, {description: { $regex: searchKey, $options: 'i' }}]}).limit(limit * 1).skip((page - 1) * limit).exec();
    const total = await Lesson.countDocuments({$or: [{name: { $regex: searchKey, $options: 'i' }}, {description: { $regex: searchKey, $options: 'i' }}]});
    return {
        data: lessons,
        page: page,
        limit: limit,
        total:total
    }
}

export const lessonService = {
    createLesson,
    getLessons,
    getLessonById,
    updateLesson,
    deleteLesson
};
    