import { Schema, model, connection, Model  } from 'mongoose';

type UserType = {
    email: string,
    age: number,
    interest: [string],
    name: string
}

const schema = new Schema<UserType>({
    email: String,
    age: Number,
    interest: [String],
    name: { type: String, required: true }
});

const modelName: string = 'User';

//export default model<UserType>(modelName, schema);

/*export default (connection && connection.models[modelName]) ?
    connection.models[modelName]
:
    model<UserType>(modelName, schema)
;*/

export default (connection && connection.models[modelName]) ?
    connection.models[modelName] as Model<UserType> : 
    model<UserType>(modelName, schema);