import { ApolloError } from 'apollo-server-errors';
import { MongoMemoryServer  } from 'mongodb-memory-server';
import {connect} from 'mongoose'
import { ErrorEnums } from '../common/errors.enum';


export class DataBase {

    private  async getMongoUri () {
        try {
            const mongoServer = await MongoMemoryServer.create();
            return mongoServer.getUri();
        } catch (error) {
            throw error            
        }
    } 

    async start() {
        try {
            console.log("Connecting to database")

            const mongoUri = await this.getMongoUri();
            const connection = await connect(mongoUri);
            
            console.log("Database is connected")
            return connection
        } catch (error) {
            console.log('Error connecting to database', error)
            throw new ApolloError('Couldnt connect to database', ErrorEnums.CONNECTING_DATABASE)
        }
    }
}