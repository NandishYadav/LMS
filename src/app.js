import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import  userRoutes from './routes/user.routes.js';
import courseRoutes from './routes/course.routes.js';
import lessonRoutes from './routes/lesson.routes.js';
import authenticate from './middlewares/authenticate.js';

const app = express();


// Middlewares
app.use(cors());                // Enables CORS
app.use(express.json());        // Parses incoming JSON requests and puts the parsed data in req.body

//Datebase Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lms', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

//User Routes
app.use('/users', userRoutes);
app.use('/courses',authenticate, courseRoutes);
app.use('/lessons', authenticate,lessonRoutes);




export default app;
// The app object is an instance of express. We define a route handler / that sends the string Hello World! to the client. We make the app listen on port 3000. If we run this code with node index.js, the app will be running on http://localhost:3000.