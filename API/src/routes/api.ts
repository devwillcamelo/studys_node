import { Router } from 'express';
import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/ping', ApiController.ping);
router.get('/random', ApiController.random);
router.get('/nome/:nome', ApiController.nome);

router.post('/frases', ApiController.createPharse);
router.get('/frases', ApiController.listPharses);
router.get('/frases/random', ApiController.randomPhrase);
router.get('/frases/:id', ApiController.getPhrase);
router.put('/frases/:id', ApiController.updatePhrase);
router.delete('/frases/:id', ApiController.deletePhrase);


export default router;