import type { GetStaticProps } from 'next';
import { questions } from '../data/questions';
import { QuestionsData } from '../types/questionsdata';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Form from '../components/Form';
import Questions from '../components/Questions';

type Props = {
  questions: QuestionsData[];
};

export default function Home({ questions }: Props) {
  return (
    <>
      <Layout>
        <Header />
        <Form />
        <Questions questions={questions} />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      questions,
    },
  };
};
