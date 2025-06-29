import Link from 'next/link';
import Image from 'next/image'



export default function Home() {
  return (
      <div className="container home-bg ">
        <div className="home-bg-top">
          <Image
            src="/home-bg-top.png"
            alt="Decorative top overlay"
            fill                  
            priority              
            className="home-bg-top__img"
          />
        </div>
        <div className="home-spot">
          <Image
            src="/home-spot.png"
            alt="Decorative top overlay"
            fill                  
            priority              
            className="home-spot__img"
          />
        </div>
        <div className="home-container"> {/* use this container to rotate  */}
          <p className="home-title">
            <h1>What Is Your Designer Personality?</h1>
          </p>
          <span className="home-subtitle" >Answer these 5 questions to find out what kind of designer you are! Ready for the quiz? </span>
          <div className="home-button">
          <Link href="/quiz" style={{ textDecoration: 'none' }}>
            <button className="button">Start Quiz</button>
          </Link>
          </div>
        </div> 
        <div className="home-bg-bottom">
          <Image
            src="/home-bg-bottom.png"
            alt="Decorative bottom overlay"
            fill                  
            priority              
            className="home-bg-bottom__img"
          />
        </div>
      </div> 


  );
}