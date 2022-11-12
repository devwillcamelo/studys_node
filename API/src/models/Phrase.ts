import { Model, DataTypes } from "sequelize";
import { sequelize } from '../instances/pg';

export interface PhraseInstace extends Model {
    id: number,
    author: string,
    txt: string;
}

export const Phrase = sequelize.define<PhraseInstace>('Phrase', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    author: DataTypes.STRING,
    txt: DataTypes.STRING,
 
},{
    tableName: 'phrases',
    timestamps: false

});