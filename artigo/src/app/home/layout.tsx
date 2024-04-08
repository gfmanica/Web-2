import { Footer, Header, Page } from '@/components';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
    </>
  );
}
