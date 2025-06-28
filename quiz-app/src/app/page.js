import Link from 'next/link';


export default function Home() {
  return (
      <div className="container home-bg ">
        <div className="home-bg-top">
          <img src="./home-bg-top.png"/> 
        </div>
        <div className="home-spot">
          <img src="./home-spot.png"/> 
        </div>
        <div className="home-container"> {/* use this container to rotate  */}
          <span className="home-title">
            <h1>What Is Your Designer Personality?</h1>
          </span>
          <span className="home-subtitle" >Answer these 5 questions to find out what kind of designer you are! Ready for the quiz? </span>
          <div className="home-button">
          <Link href="/quiz" style={{ textDecoration: 'none' }}>
            <button className="button">Start Quiz</button>
          </Link>
          </div>
        </div> 
        <div className="home-bg-bottom">
          <img src="./home-bg-bottom.png"/> 
        </div>
      </div> 


  );
}