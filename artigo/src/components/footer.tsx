'use client';

import { useSession } from 'next-auth/react';

export function Footer() {
  const { status } = useSession();
  const isAuthenticated = status === 'authenticated';

  if (!isAuthenticated) {
    return null;
  }

  return (
    <header className="mt-auto flex w-full items-center justify-start">
      Aqui fica o footer
    </header>
  );
}
