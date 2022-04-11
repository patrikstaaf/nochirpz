// import { QuestionProps } from '../pages';
import { QuestionsData } from '../types/questionsdata';

type Props = {
  questions: QuestionsData[];
};

export default function Questions({ questions }: Props) {
  return (
    <div className='pt-10'>
      {questions.map((question) => (
        <div key={question.id}>
          <h3 className='mt-5 text-lg font-semibold'>{question.title}</h3>
          <p className='text-lg'>{question.content}</p>
        </div>
      ))}
    </div>
  );
}
