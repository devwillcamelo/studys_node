import { Request, Response } from "express";
import { Todo } from '../models/Todo';

export const all = async ( req: Request, res: Response ) => {
    let list = Todo.findAll();
    res.json({ list });
}

export const add = async ( req: Request, res: Response ) => {
    if(req.body.title) {
        let newTodo = await Todo.create({
             title: req.body.title,
             done: req.body.done ? true : false
            });
        res.status(201);  
    }
    else {
        res.json({ error: 'Falha no envio da tarefa' });
    }
}

export const update = async ( req: Request, res: Response ) => {
    let { id } = req.params;
    let todo = await Todo.findByPk(id);
    if(todo) {
        if(req.body.title) {
            todo.title = req.body.title;
        }
        if(req.body.done) {
            switch(req.body.done) {
                case 'true':
                case '1':
                    todo.done = true;
                break;
                case 'false':
                case '0':
                    todo.done = false;
                break;
            }
        }
        await todo.save();
        res.json({ todo });
    }
    else {
        res.json({ error: 'Tarefa não encontrada' });
    }
}

export const remove = async ( req: Request, res: Response ) => {
    let { id } = req.params;
    let todo = await Todo.findByPk(id);
    if(todo) {
        await Todo.destroy();
    }
    else {
        res.json({ error: 'Tarefa não existe' });
    }
}