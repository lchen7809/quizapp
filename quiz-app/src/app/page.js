import Link from 'next/link';
import Image from 'next/image'



export default function Home() {
  return (
      <div className="container home-bg ">
        <div className="home-bg-top">
          {/* <Image
            src="/home-bg-top.webp"
            alt="Decorative top overlay"
            fill                  
            priority   
            loading="eager"           
            className="home-bg-top__img"
          /> */}
        </div>
        <div className="home-spot">
          {/* <Image
            src="/home-spot.webp"
            alt="Decorative top overlay"
            fill                  
            priority      
            loading="eager"        
            className="home-spot__img"
          /> */}
        </div>
        <div className="home-container"> {/* use this container to rotate  */}
          <p className="home-title">
            WHAT IS YOUR DESIGNER PERSONALITY?
          </p>
          <span className="home-subtitle" >Answer these 5 questions to find out what kind of designer you are! Ready for the quiz? </span>
          <div className="home-button">
          <Link href="/quiz" style={{ textDecoration: 'none' }}>
            <button className="button">Start Quiz</button>
          </Link>
          </div>
        </div> 
        <div className="home-bg-bottom">
          {/* <Image
            src="/home-bg-bottom.webp"
            alt="Decorative bottom overlay"
            fill                  
            priority  
            loading="eager"            
            className="home-bg-bottom__img"
          /> */}
        </div>
      </div> 


  );
}