import { Request, Response } from "express";    

export const age = (req: Request, res: Response) => {
    res.render('pages/idade');
};

export const ageAction = (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }
    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
};
