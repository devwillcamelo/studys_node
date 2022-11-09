import { Request, Response } from "express";
import { Product } from '../models/Product'
import { sequelize } from "../instances/mysql";
import { User } from '../models/User';
import { Op } from 'sequelize';

export const home = async ( req: Request, res: Response ) => {
        //update
        await User.update({ name: 'Seu Chico', age: 56 /*age: 18*/}, {
            where:{
                id: 4

                /*age: {
                    [Op.lt]: 18 *atualizar todos para 18 anos
                }*/
            }
        })
    
    
        // build + save
        const userNew = User.build({
                name: 'Fulaninho',
                age: 25
        });
        await userNew.save();  //comando para salvar alterações
        
        // create
        /*const userNew = await User.create({
                name: 'Ciclano',
                age: 39
        });*/
        
    
        //let users = await User.findAll();
        let users = await User.findAll({
                where: { 
                    //name: Paulo, id: 3
                    //age: X, name: Y
                    /*[Op.or]: [
                        {age: 55},
                        {//name: Ciclano}
                    ]*/
                    //Op.gt, Op.gte, Op.lt, Op.let
                    /* GT = Greather Than
                        GTE = Greather Than Equal
                        LT = Lower Than
                        LTE = Lower Than Equal*/
                },
                order:[
                    ['name', 'ASC'],
                    ['age', 'DESC']            
                ],
                offset: 1, //pular itens
                limit: 2    // limitar exibição
            });

    try {
        await sequelize.authenticate();
        console.log("Conexão ok");
    }
    catch(error) {
        console.log("Deu erro: ", error)
    }
    
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