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
    <div className=''>
      <hr className='my-5' />
      <h2 className='font-title text-3xl font-semibold md:text-3xl'>
        Remind me
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Your email</label>
        <div className='mt-5'>
          <input
            onChange={onChange}
            value={email}
            id='email'
            type='email'
            placeholder='your@email.com'
            required
            className='input input-primary input-bordered'
          />
          {!loading && (
            <button type='submit' className=''>
              Subscribe
            </button>
          )}
          {loading && (
            <button type='submit' className=''>
              Subscribing..
            </button>
          )}
        </div>
        <div>{message ? message : 'Recieve a reminder once a year.'}</div>
      </form>
      <hr className='my-5' />
    </div>
  );
}
