import { lessonService } from "../services/lessons.service.js";

async function createLesson(req, res, next) {
    try {
        const lesson = await lessonService.createLesson(req.body);
        res.status(201).json(lesson);
    } catch (error) {
        next(error);
    }
}

async function getLessons(req, res, next) {
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        const lessons = await lessonService.getLessons(page, limit);
        res.status(200).json(lessons);
    } catch (error) {
        next(error);
    }
}

async function getLessonById(req, res, next) {
    try {
        const lesson = await lessonService.getLessonById(req.params.id);
        res.status(200).json(lesson);
    } catch (error) {
        next(error);
    }
}

async function updateLessonById(req, res, next) {
    try {
        const lesson = await lessonService.updateLesson(req.params.id, req.body);
        res.status(200).json(lesson);
    } catch (error) {
        next(error);
    }
}

async function deleteLessonById(req, res, next) {
    try {
        const lesson = await lessonService.deleteLesson(req.params.id);
        res.status(200).json(lesson);
    } catch (error) {
        next(error);
    }
}

//search lesson by name or description or searchKey
async function searchLesson(req, res, next) {
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        const searchKey = req.query.searchKey;
        const lessons = await lessonService.searchLesson(searchKey, page, limit);
        res.status(200).json(lessons);
    } catch (error) {
        next(error);
    }
}


export const lessonController = {
    createLesson,
    getLessons,
    getLessonById,
    updateLessonById,
    deleteLessonById,
    searchLesson
};
