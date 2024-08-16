import { lessonController } from "../controllers/lesson.controller.js";

import express from 'express';

const router = express.Router();

//Post request to create a new lesson
router.post('/', lessonController.createLesson);

//Post request to get all lessons with pagination
router.post('/all', lessonController.getLessons);

//Get request to get a lesson by id
router.get('/:id', lessonController.getLessonById);

//Put request to update a lesson by id
router.put('/:id', lessonController.updateLessonById);

//Delete request to delete a lesson by id
router.delete('/:id', lessonController.deleteLessonById);

export default router;

