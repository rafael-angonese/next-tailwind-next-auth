import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import React from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

import { Header } from '../../../components/Header';
import { User } from '../../../components/User';
import { InputSearch } from '../../../components/InputSearch';

type User = {
    avatar_url: string;
    name: string;
    bio: string;
    login: string;
};

type HeaderProps = {
    user: User;
};

export default function Pokemon({ user }: HeaderProps) {
    const { isFallback } = useRouter();
    const [session] = useSession();

    if (isFallback) {
        return <p>Carregando...</p>;
    }

    return (
        <>
            <div className="font-sans relative min-h-screen flex flex-col items-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
                <Header
                    name={session?.user?.name || ''}
                    avatar={session?.user?.image || ''}
                />
                <InputSearch />

                <User
                    name={user.name}
                    avatar={user.avatar_url}
                    login={user.login}
                    bio={user.bio}
                />
            </div>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true
    };
};

export const getStaticProps: GetStaticProps = async context => {
    const login = context!.params!.login;

    const response = await fetch(`https://api.github.com/users/${login}`);
    const data = await response.json();

    return {
        props: {
            user: data
        }
    };
};
