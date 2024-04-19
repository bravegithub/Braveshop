import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import { TypeORMAdapter } from '@auth/typeorm-adapter';
// import custom from 'openid-client';
import { ConnectOptions } from 'typeorm';

const connection= {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "ecommerce",
}
export default NextAuth({
    providers: [
        GoogleProvider({
                    clientId: process.env.GOOGLE_CLIENT_ID,
                    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                  }),
    ],
    adapter: TypeORMAdapter(connection),
    session: {
       strategy: "jwt"
      },
      jwt: {
        secret: 'asdcvbtjhm'
      },
      callbacks: {
        session: async ({ session,user }) => {
          session.customValue = new Date().toISOString();
          console.log(session);
          return Promise.resolve(session);
        }
    }

})