import Link from 'next/link';
import personas from '../../../../data/personalities.json';
import Image from 'next/image'


export const dynamic = 'force-dynamic';

export default function ResultPage({ searchParams }) {
  const type = searchParams.type;
  const persona = personas[type] || {
    title: 'Explorer',
    motto: 'You did it!',
    values: '',
    desc1: '',
    desc2: '',
    desc3: '',
    img: ''
  };

  const descriptions = [persona.desc1, persona.desc2, persona.desc3].filter(Boolean);


  return (
    <div className="container result-bg">

      <div className="result-container">
        <div className="result-container-subtitle">You are a type {searchParams.type} explorer</div>
        <div className="result-title">
          <p>{persona.title}</p>
        </div>
        <p style={{fontSize:13, marginTop: 10, marginBottom:3 }}><i>{`"${persona.motto}"`} </i></p>
        <p style={{fontSize:14}}>{persona.value}</p>

        <div className="persona-container">
          {persona.img && (
            <Image
    
            width={120}
            height={220}
            src={persona.img}
            alt={persona.title}
            loading="eager"      
            priority        
            className="persona-img"
          />
          )}
        </div>

        <div className="desc-boxes-vertical">
          {descriptions.map((desc, idx) => (
            <div key={idx} className={`desc-box desc-box-${idx + 1}`}>
              {desc}
            </div>
          ))}
        </div>

        <div className="back-to-home-button">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <button className="button back-to-home" >Take The Quiz Again</button>
        </Link>
        </div>
      </div>

    </div>
  );
}