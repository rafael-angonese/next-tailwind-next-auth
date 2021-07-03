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
    },

    callbacks: {
        redirect: async url => {
            return Promise.resolve(url);
        }
    }

    // pages: {
    //     signIn: {
    //         callbackUrl: '/home',
    //     },
    //     // signOut: '/auth/signout',
    //     // error: '/auth/error', // Error code passed in query string as ?error=
    //     // verifyRequest: '/auth/verify-request', // (used for check email message)
    //     // newUser: null // If set, new users will be directed here on first sign in
    //   }
});
