import { courseService } from "../services/course.service.js";

async function createCourse(req, res, next) {
    try {
        const course = await courseService.createCourse(req.body);
        res.status(201).json(course);
    } catch (error) {
        next(error);
    }
}

async function getCourses(req, res, next) {
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        const courses = await courseService.getCourses(page, limit);
        res.status(200).json(courses);
    } catch (error) {
        next(error);
    }
}

async function getCourseById(req, res, next) {
    try {
        const course = await courseService.getCourseById(req.params.id);
        res.status(200).json(course);
    } catch (error) {
        next(error);
    }
}

async function updateCourseById(req, res, next) {
    try {
        const course = await courseService.updateCourse(req.params.id, req.body);
        res.status(200).json(course);
    } catch (error) {
        next(error);
    }
}

async function deleteCourseById(req, res, next) {
    try {
        const course = await courseService.deleteCourse(req.params.id);
        res.status(200).json(course);
    } catch (error) {
        next(error);
    }
}

//search course by name or description or searchKey
async function searchCourse(req, res, next) {
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        const searchKey = req.query.searchKey;
        const courses = await courseService.searchCourse(searchKey, page, limit);
        res.status(200).json(courses);
    } catch (error) {
        next(error);
    }
}

export const courseController =   {
    createCourse,
    getCourses,
    getCourseById,
    updateCourseById,
    deleteCourseById,
    searchCourse
};
