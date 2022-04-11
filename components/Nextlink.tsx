import NextLink from 'next/link';
import { LinkData } from '../types/linkdata';

export default function Nextlink({ href, text }: LinkData) {
  return (
    <NextLink href={href}>
      <a className='block decoration-indigo-200 decoration-wavy decoration-2 underline-offset-8 hover:underline'>
        {text}
      </a>
    </NextLink>
  );
}
