import { signOut } from 'next-auth/client';

type HeaderProps = {
    name: string;
    avatar: string;
};

export function Header({ name, avatar }: HeaderProps) {
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

                    <div className="flex items-center justify-center space-x-3 md:justify-start">
                        <button
                            onClick={() =>
                                signOut({
                                    callbackUrl: '/'
                                })
                            }
                            className="transition-transform transform hover:scale-125"
                        >
                            Sair
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
