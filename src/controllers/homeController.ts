import { Request, Response } from "express";
import { Product } from '../models/Product'

export const home = ( req: Request, res: Response ) => {
    let user = {
        name: 'Fulano de Tal',
        age: 90
    }
   
        let list = Product.getAll();
        let expensiveList = Product.getFromPriceAfter(12);

    res.render('home', {
        user,
        products: list,
        expensives: expensiveList
    });
};