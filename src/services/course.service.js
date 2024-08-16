import Course from "../models/course.schema.js";

//create  New Course
async function createCourse(courseData) {
    return await Course.create(courseData);
};

//Get All Courses with Pagination
async function getCourses(page, limit) {
    const courses =  await Course.find({ isDeleted:false }).sort({ createdAt: -1 }).limit(limit * 1).skip((page - 1) * limit).exec();
    const total = await Course.countDocuments({ isDeleted:false });
    return {
        data: courses,
        page: page,
        limit: limit,
        total:total
    }
}

//Get Course By Id
async function getCourseById(id) {
    const course = await Course.findById(id);
    if (!course) {
        throw new Error('Course not found');
    };
    return course;
};

//Update Course By Id
async function updateCourse(id, course) {
    const updatedCourse = await Course.findByIdAndUpdate
    ({_id:id
    }, course, { new: true });
    if (!course) {
        throw new Error('Course not found');
    }
    return updatedCourse;
};

//Delete Course By Id
async function deleteCourse(id) {
    const course = await Course.findByIdAndUpdate
    ({_id:id}, { isDeleted: true }, { new: true });
    if (!course) {
        throw new Error('Course not found');
    }
    return course;
};

//search course by name or description or searchKey
async function searchCourse(searchKey, page, limit) {
    const courses = await Course.find({$or: [{name: { $regex: searchKey, $options: 'i' }}, {description: { $regex: searchKey, $options: 'i' }}]}).limit(limit * 1).skip((page - 1) * limit).exec();
    const total = await Course.countDocuments({$or: [{name: { $regex: searchKey, $options: 'i' }}, {description: { $regex: searchKey, $options: 'i' }}]});
    return {
        data: courses,
        page: page,
        limit: limit,
        total:total
    }
}



export const courseService = {
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
    searchCourse
};