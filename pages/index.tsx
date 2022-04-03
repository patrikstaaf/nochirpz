import type { NextPage } from 'next';
import Content from '../components/Content';
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <h1>Chirpzzz</h1>
      <Content />
    </div>
  );
};

export default Home;
