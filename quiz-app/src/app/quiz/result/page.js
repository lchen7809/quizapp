'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import personas from '../../../../data/personalities.json';

export default function ResultPage() {
  const params = useSearchParams();
  const type = params.get('type');
  const persona = personas[type] || {
    title: 'Explorer',
    motto: 'You did it!',
    values: ''
  };

  return (
    <div className="container">
      <h1>You are {persona.title}</h1>
      <p><strong>Motto:</strong> {persona.motto}</p>
      <p><strong>Values:</strong> {persona.values}</p>
      {persona.img && (
        <img src={persona.img} alt={persona.title} style={{ width: '100%', borderRadius: 8 }} />
      )}
      <Link href="/">
        <button className="button">Back to Home</button>
      </Link>
    </div>
  );
}