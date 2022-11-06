import express, { Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';
//import express from "express";

import mainRoutes from './routes/indext';
import painel from './routes/painel';

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended: true}));

server.use(mainRoutes);
server.use('/painel', painel);

server.use(( req: Request, res: Response ) => {
    res.status(404).send('404 Página não encontrada!');
});


server.listen(80);

/*server.get('/', (req: Request, res: Response) => {
    res.send('Olá mundo!');
});

server.get('/noticia/:slug', (req: Request, res: Response) => {
    let slug: string = req.params.slug;
    res.send(`Notícias: ${slug}`);
});

server.get('/voo/:origem-:destino', ( req: Request, res: Response ) => {
    let { origem, destino } = req.params;
    res.send('Procurando voos de ${origem.toUpperCase} até ${destino.toUpperCase}');
});*/
