'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import questions from '../../../data/questions.json';

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [tally, setTally] = useState({ A:0, B:0, C:0, D:0 });
  const router = useRouter();

  function choose(val) {
    setTally(prev => ({ ...prev, [val]: prev[val] + 1 }));
    const nextStep = step + 1;
    if (nextStep >= questions.length) {
      // navigate to result page with query param
      const winner = Object.entries({ ...tally, [val]: tally[val] + 1 })
        .sort(([,a],[,b]) => b - a)[0][0];
      router.push(`/quiz/result?type=${winner}`);
    } else {
      setStep(nextStep);
    }
  }

  const { text, options } = questions[step];
  return (
    <div className="container">
      <h2>{text}</h2>
      {options.map(opt => (
        <button
          key={opt.value}
          className="button"
          onClick={() => choose(opt.value)}
        >
          {opt.label}
        </button>
      ))}
      <p>Question {step + 1} of {questions.length}</p>
    </div>
  );
}