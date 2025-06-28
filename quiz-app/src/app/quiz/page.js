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
      const winner = Object.entries({ ...tally, [val]: tally[val] + 1 })
        .sort(([,a],[,b]) => b - a)[0][0];
      router.push(`/quiz/result?type=${winner}`);
    } else {
      setStep(nextStep);
    }
  }

  const { text, options } = questions[step];
  return (
    <div className="container quiz-bg">
              <div className="quiz-bg-top">
          <img src="./quiz-bg-top.png"/> 
        </div>
      <div className="quiz-container">
        <span className="quiz-title">
        <h2>{text}</h2>
        </span>
        {options.map(opt => (
          <button
            key={opt.value}
            className="button"
            onClick={() => choose(opt.value)}
          >
            {opt.label}
          </button>
        ))}
            <span className="quiz-footer">
        <p>Question {step + 1} of {questions.length}</p></span>
      </div>
      <div className="quiz-bg-bottom">
          <img src="./quiz-bg-bottom.png"/> 
        </div>
    </div>
  );
}