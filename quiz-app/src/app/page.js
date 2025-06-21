import Link from 'next/link';

export default function Home() {
  return (
    <div className="container home-bg">
      <h1>What Is Your Designer Personality?</h1>
      <div >Answer these 5 questions to find out what kind of designer you are! Ready for the test? </div>
      <Link href="/quiz">
        <button className="button">Start Quiz</button>
      </Link>
    </div>
  );
}