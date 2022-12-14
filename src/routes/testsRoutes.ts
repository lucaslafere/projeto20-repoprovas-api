import { Router } from 'express';
import validateToken from '../middlewares/validateTokenMiddleware'
import * as testsController from '../controllers/testsController';

const testsRouter = Router();
testsRouter.post("/tests", validateToken, testsController.createTest);
testsRouter.get("/tests-by-terms", validateToken, testsController.getAllTestsByTerms)
testsRouter.get("/tests-by-teachers", validateToken, testsController.getAllTestsByTeachers)

export default testsRouter;