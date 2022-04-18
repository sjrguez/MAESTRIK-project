import { ApolloError } from "apollo-server-errors";
import { DataBase } from "./src/config/database.init"
import { Server } from "./src/config/server.init";

const initServer = async () => {
    const database = new DataBase();

    try {
        await database.start();
        const server = new Server();
        await server.start();        

    } catch (error) {
        if(error instanceof ApolloError) {
            throw new ApolloError(error.message, error.code)
        }
        console.log(error)

        throw new Error("Cound start server");
    }
}


initServer().then();

