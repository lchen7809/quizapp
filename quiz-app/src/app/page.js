import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to the Personality Quiz</h1>
      <Link href="/quiz">
        <button className="button">Start Quiz</button>
      </Link>
    </div>
  );
}