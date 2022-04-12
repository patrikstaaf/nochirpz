import Nextlink from './Nextlink';

export default function Footer() {
  return (
    <footer className='pb-20 pt-10'>
      <p className='pb-2 text-sm italic'>
        Disclaimer: Do I even need this? Obviously I'm not liable that you
        actually change your batteries and test the alarm, nor it's function.
      </p>
      <p className='pb-6  text-sm italic'>
        *GDPR* - When you sign up, your email will be added to my SendGrid
        contact list and if you ever want me to delete your email from the list,
        reach out to me{' '}
        <a href='mailto:nochirpz@nochirpz.com' className='underline'>
          here
        </a>
        .
      </p>
      <p className='text-sm'>
        Until next year,
        <Nextlink href='https://github.com/patrikstaaf' text='Patrik Staaf' />
      </p>
    </footer>
  );
}
