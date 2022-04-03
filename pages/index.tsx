import type { NextPage } from "next";
import Head from "next/head";
import Form from "../components/Form";
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Chirpzzz</h1>
      <Form />
    </div>
  );
};

export default Home;
