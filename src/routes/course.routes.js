import express from 'express';
import { courseController } from './../controllers/course.controller.js';

const router = express.Router();

//Post request to create a new course
router.post('/', courseController.createCourse);

//Post request to get all courses with pagination
router.post('/all', courseController.getCourses);

//Get request to get a course by id
router.get('/:id', courseController.getCourseById);

//Put request to update a course by id
router.put('/:id', courseController.updateCourseById);

//Delete request to delete a course by id
router.delete('/:id', courseController.deleteCourseById);

export default router;
