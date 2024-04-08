'use client';

import { signIn } from 'next-auth/react';

export default function HomePage() {
  return (
    <>
      <button onClick={() => signIn('google')}>google</button>
    </>
  );
}
