import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface UserInstance extends Model {
    id: number;
    name: string;
    age: number;
}

export const User = sequelize.define<UserInstance>("User", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        get() {
            const raw = this.getDataValue('name');
            return raw.tpUpperCase();
        }
    },
    firstLetterOfName: {
        type: DataTypes.VIRTUAL,
        get () {
            let name: string = this.getDataValue('name');
            return name.charAt(0);
        }
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18
        set(value) {
            this.setDataValue('age', value);
        }
    },
    /*password: {
        type: DataTypes.STRING
    }*/
}, {
    tableName: 'users',
    timeStamp: false
});
