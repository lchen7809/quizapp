import Link from 'next/link';
import personas from '../../../../data/personalities.json';

export const dynamic = 'force-dynamic';

export default function ResultPage({ searchParams }) {
  const type = searchParams.type;
  const persona = personas[type] || {
    title: 'Explorer',
    motto: 'You did it!',
    values: ''
  };

  return (
    <div className="container result-bg">
        <div className="result-bg-top">
          <img src="/result-bg-top.png"/> 
        </div>
      <div className="result-container">
        <h1>You are...</h1>
        <span className="result-title">
        <h1>{persona.title}</h1>
        </span>
        <p><strong>Motto:</strong> {persona.motto}</p>
        <p><strong>Values:</strong> {persona.values}</p>
        <div className="persona-container">
        {persona.img && (
          <img src={persona.img} alt={persona.title} style={{ width: '60%', borderRadius: 8 }} />
        )}
        </div>
        <div className="back-to-home-button">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <button className="button">Back to Home</button>
        </Link>
        </div>
      </div>
      <div className="home-bg-bottom">
          <img src="/home-bg-bottom.png"/> 
        </div>
    </div>
  );
}