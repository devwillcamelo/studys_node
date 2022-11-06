import { Router, Request, Response } from 'express'

import { home } from '../controllers/homeController';  
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';     

const router = Router();

router.get('/', home);

router.get('/idade', UserController.age);

router.post('/idade-resultado',UserController.ageAction );

router.get('/contato', InfoController.contato);

router.get('/sobre', InfoController.sobre);

export default router;