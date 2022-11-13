import { Router } from 'express';
import * as ApiController from '../controllers/apiController';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './tmp/');
    },
    filename: (req, file, cb) => {
        let randomName = Math.floor(Math.random() * 99999);
        cb(null, `${randomName+Date.now()}.jpg`);
        //cb(null, file.fieldname+'-'+Date.now());
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const allowed: string[] = [
            'image/jpeg',
            'image/jpg',
            'image/png'
        ];
        cb(null, allowed.includes( file.mimetype ));
    },
    limits: { fieldSize: 20000000 }
});



/*const upload = multer({
    dest: '/tmp'
});*/

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

//rotas de recebimento de arquivos
router.post('/upload', upload.single('avatar'), ApiController.uploadFile);
router.post('/upload', upload.array('avatars', 4 ), ApiController.uploadFiles);
router.post('/upload', upload.fields([
    { name: 'avatar', maxCount: 1},
    { name: 'gallery', maxCount: 2 }
]), ApiController.uploadList);


export default router;