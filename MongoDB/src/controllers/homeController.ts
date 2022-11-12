import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User';

export const home = async (req: Request, res: Response)=>{
    /*let usuarios = await User.find({});  // busca por usuário: findOne findById
    console.log("USUÁRIOS: ", usuarios);
    
    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    // atualizar todos usuários
    await User.updateMany(          //updateOne
        { age: {$lte: 18 }},
        { age: 18 }
    )

    //atualizar usuário especifico
    let paulo = await User.findOne({ email: 'paulo@gmail.com' });
    paulo.age = 47;
    await paulo?.save();;

    //let user = await User.findOneAndUpdate();

    //deletar um usuário
    let user = await User.findOneAndDelete ({ email: 'paulo@gmail.com' })*/


    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
};