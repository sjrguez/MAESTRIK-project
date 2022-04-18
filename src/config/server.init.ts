import { ApolloServer } from 'apollo-server'
import { MainResolvers } from '../graphql/main.resolver';
import { MainTypeDefs } from '../graphql/main.typeDef';
import { AuthorTypeDefs } from '../modules/authors';

export class Server {
    constructor(){}

    private createInstaceServer () {
        const server = new ApolloServer({
            resolvers: MainResolvers,
            typeDefs: MainTypeDefs
        });


        return server;
    }


    async start() {
        const server = this.createInstaceServer();
        const data = await server.listen();
        console.log(`Server running at ${data.url}`);
        return data;
    }
}