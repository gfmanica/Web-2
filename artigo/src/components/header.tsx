'use client';
import { signOut, useSession } from 'next-auth/react';

export function Header() {
  const { data, status } = useSession();
  const isAuthenticated = status === 'authenticated';

  if (!isAuthenticated) {
    return null;
  }

  return (
    <header className="flex w-full items-center justify-start">
      Aqui fica o header {data?.user?.name} {status}
      <button onClick={() => signOut()}>Sair</button>
    </header>
  );
}
