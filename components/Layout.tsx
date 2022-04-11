import { PageLayout } from '../types/pagelayout';
import Pagehead from './Pagehead';
import Footer from './Footer';

export default function Layout({ children }: PageLayout) {
  return (
    <div>
      <div className='mx-auto max-w-xl p-3 antialiased selection:bg-indigo-200 sm:px-0 sm:py-3'>
        <Pagehead />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
