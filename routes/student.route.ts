import { Router } from 'express';
import { GETStudent, GETStudents, PATCHStudent, POSTStudent } from '../controllers/student.controller';

const studentRouter = Router()
export const studentPath = '/students'
studentRouter.get('/', GETStudents)
studentRouter.get('/:id', GETStudent)
studentRouter.post('/', POSTStudent)
studentRouter.patch('/:id', PATCHStudent)

export default studentRouter;