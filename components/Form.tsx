import React, { useState } from 'react';

export default function Form() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('api/subscribe', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const { error } = await res.json();

    if (error) {
      setMessage(error);
      setLoading(false);
      return;
    }

    setMessage('Success! You are now a subscriber.');
    setLoading(false);
  };
  return (
    <div className='w-full rounded-lg'>
      <form onSubmit={handleSubmit} id='form'>
        <label htmlFor='email' className='sr-only'>
          Your email
        </label>
        <div className='flex'>
          <input
            onChange={onChange}
            value={email}
            id='email'
            type='email'
            placeholder='your@email.com'
            required
            className='text-md min-w-[80px] grow rounded-lg border p-2'
          />
          <div className='group relative'>
            <div className='absolute  ml-2 h-12 w-24 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur-md transition duration-200 group-hover:opacity-100 group-hover:duration-200'></div>
            {!loading && (
              <button
                type='submit'
                className='relative ml-2 h-12 w-24 rounded-lg bg-white text-black'
              >
                Subscribe
              </button>
            )}
            {loading && (
              <button
                type='submit'
                className='relative ml-2 h-12 w-24 rounded-lg bg-white text-black'
              >
                Saving...
              </button>
            )}
          </div>
        </div>
        <div>{message ? message : 'No spam. Unsubscribe at any time.'}</div>
      </form>
    </div>
  );
}
