import Nextlink from './Nextlink';

export default function Footer() {
  return (
    <footer className='pb-20 pt-10'>
      {/* <hr className='border-1 mt-10 w-full border-gray-100 pb-2' /> */}
      <p className='pb-6  text-sm italic'>
        Disclaimer: Do I even need this? Obviously I'm not liable that you
        actually change your batteries and test the alarm, nor it's function.
      </p>
      <p className='text-sm'>
        Until next year,
        <Nextlink href='https://github.com/patrikstaaf' text='Patrik Staaf' />
      </p>
    </footer>
  );
}
