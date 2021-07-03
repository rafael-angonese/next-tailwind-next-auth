import React, { FormEvent, useState } from 'react';
import Router from 'next/router';

export function InputSearch() {
    const [username, setUsername] = useState('');

    async function onSubmit(event: FormEvent) {
        event.preventDefault();

        if (username.trim() === '') {
            return;
        }

        Router.push(`/users/${username}`);
    }

    return (
        <>
            <div className="mt-10">
                <form className="flex" onSubmit={onSubmit}>
                    <input
                        className="rounded-l-lg p-4 border-t border-b border-l text-gray-800 border-gray-200 bg-white"
                        placeholder="Nome do usuário"
                        onChange={event => setUsername(event.target.value)}
                        value={username}
                    />

                    <button className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">
                        Buscar
                    </button>
                </form>
            </div>
        </>
    );
}
