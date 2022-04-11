import Nextlink from '../components/Nextlink';

export default function NotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <h1 className='my-4 text-xl font-semibold'>404 - Page don't exist.</h1>
      <Nextlink href='/' text='Return home' />
    </div>
  );
}
