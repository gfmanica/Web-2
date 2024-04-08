import { ReactNode } from 'react';

export function Page({ children }: { children: ReactNode }) {
  return <main className="flex min-h-screen min-w-full">{children}</main>;
}
