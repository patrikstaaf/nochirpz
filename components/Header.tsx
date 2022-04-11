export default function Header() {
  const reasons = [
    'No more annoying chirps.',
    'No sudden wake-ups (almost always starts in the middle of the night).',
    'Less risk of malfunction when actually needed.',
    'One email, once a year.',
  ];
  return (
    <>
      <h1 className='pt-20 text-5xl font-semibold'>no chirpz</h1>
      <h2 className='pt-2 text-xl font-normal'>
        Get an annual reminder to replace your smoke alarm batteries.
      </h2>
      <ul className='list-inside list-disc pt-10 pb-4 text-lg font-normal'>
        {reasons.map((reason, idx) => {
          return <li key={idx}>{reason}</li>;
        })}
      </ul>
    </>
  );
}
