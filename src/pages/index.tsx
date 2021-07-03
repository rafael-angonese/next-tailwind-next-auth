import { signIn } from 'next-auth/client';

export default function Home() {
    return (
        <>
            <div className="font-sans">
                <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
                    <div className="relative sm:max-w-md w-full">
                        <div className="card bg-blue-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6" />
                        <div className="card bg-red-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6" />
                        <div className="relative w-full rounded-3xl px-8 py-8 bg-gray-100 shadow-md">
                            <label className="block mt-3 text-sm text-gray-700 text-center font-semibold" />

                            <h1 className="text-4xl text-center font-bold text-indigo-600 transition duration-500">
                                Autenticação social
                            </h1>

                            <h2 className="mt-5 text-xl text-center text-gray-700 transition duration-500">
                                Para continuar faça seu login social
                            </h2>

                            <div className="mt-7">
                                <button
                                    className="tracking-wide w-full font-bold rounded border-2 border-indigo-500 hover:text-white hover:border-blue-600 hover:bg-blue-600 shadow-md py-2 px-6 inline-flex items-center transition duration-500"
                                    onClick={() =>
                                        signIn('github', {
                                            callbackUrl: '/private'
                                        })
                                    }
                                >
                                    <span className="mx-auto">GitHub</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
