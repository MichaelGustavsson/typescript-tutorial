import { useRouter } from 'next/router';

export default function MovieInfoPage() {
  const router = useRouter();
  return (
    <article>
      <h1 className='page-title'>Information</h1>
    </article>
  );
}
