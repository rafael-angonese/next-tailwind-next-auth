import Link from 'next/link';

type UserProps = {
    name: string;
    avatar: string;
    login: string;
    bio: string;
};

export function User({ name, avatar, bio, login }: UserProps) {
    return (
        <>
            <div className="profile mt-10 w-full flex justify-center text-dark">
                <img
                    className="w-28 h-28 p-1 rounded-full"
                    src={avatar}
                    alt="Avatar"
                />
                <div className="title mt-8 ml-3 font-bold flex flex-col">
                    <h2 className="text-xl font-medium">{name}</h2>
                    <p>{bio}</p>

                    <div className="mt-7">
                        <Link href={`https://github.com/${login}?tab=repositories`}>
                            <button className="tracking-wide font-bold rounded border-2 border-indigo-500 bg-yellow-400 hover:bg-yellow-500 shadow-md py-2 px-6 inline-flex items-center transition duration-500">
                                <span className="mx-auto">Projetos 📁</span>
                            </button>
                        </Link>
                        <Link href={`https://github.com/${login}?tab=stars`}>
                            <button className="tracking-wide font-bold rounded border-2 border-indigo-500 bg-yellow-400 hover:bg-yellow-500 shadow-md py-2 px-6 inline-flex items-center transition duration-500">
                                <span className="mx-auto">Estrelas 🌟</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
