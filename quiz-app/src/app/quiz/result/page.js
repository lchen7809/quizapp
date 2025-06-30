import Link from 'next/link';
import personas from '../../../../data/personalities.json';
import Image from 'next/image'


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
          <Image
            src="/result-bg-top.webp"
            alt="Decorative top overlay"
            fill                  
            priority       
            loading="eager"             
            className="result-bg-top__img"
          />        
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
          <Image
          width={150}             
          height={300}             
          src={persona.img}
          alt={persona.title}
          loading="eager"      
          priority        
        />
        )}
        </div>
        <div className="back-to-home-button">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <button className="button">Back to Home</button>
        </Link>
        </div>
      </div>
      <div className="home-bg-bottom">
        <Image
          src="/home-bg-bottom.webp"
          alt="Decorative bottom overlay"
          fill                  
          priority              
          className="home-bg-bottom__img"
        />      
      </div>
    </div>
  );
}