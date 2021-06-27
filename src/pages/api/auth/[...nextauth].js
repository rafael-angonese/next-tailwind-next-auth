import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],

    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60 // 30 days
    },

    jwt: {
        secret: process.env.SECRET
    }
});
