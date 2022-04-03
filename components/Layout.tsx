import Pagehead from './Pagehead';
import Navbar from './Navbar';
import Footer from './Footer';

type PageLayout = {
  children: React.ReactNode;
};

export default function Layout({ children }: PageLayout) {
  return (
    <>
      <Pagehead />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
