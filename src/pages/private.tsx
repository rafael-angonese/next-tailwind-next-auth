import { GetServerSideProps, GetStaticProps } from 'next';
import { getSession, useSession } from 'next-auth/client';

import { Header } from '../components/Header';
import { InputSearch } from '../components/InputSearch';

const Private = () => {
    const [session] = useSession();

    return (
        <>
            <div className="font-sans relative min-h-screen flex flex-col items-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
                <Header
                    name={session?.user?.name || ''}
                    avatar={session?.user?.image || ''}
                />
                <InputSearch />
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async context => {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        };
    }

    return {
        props: {}
    };
};

export default Private;
