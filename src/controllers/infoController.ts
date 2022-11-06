import { Request, Response } from "express";

export const contato = ( req: Request, res: Response ) => {
    res.send('Formulário de contato');
};

export const sobre = ( req: Request, res: Response ) => {
    res.send('Página institucional sobre a empresa');
};