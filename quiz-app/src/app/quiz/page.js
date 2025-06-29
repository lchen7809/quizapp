'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import questions from '../../../data/questions.json';
import Image from 'next/image'


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
        <Image
          src="/quiz-bg-top.png"
          alt="Decorative top overlay for quiz page"
          fill                  
          priority              
          className="quiz-bg-top__img"
        />
        </div>
      <div className="quiz-container">
        <p className="quiz-title">
          <h2>{text}</h2>
        </p>
        {options.map(opt => (
          <button
            key={opt.value}
            className="button"
            onClick={() => choose(opt.value)}
          >
            {opt.label}
          </button>
        ))}
        <p className="quiz-footer">
          <p>Question {step + 1} of {questions.length}</p>
        </p>
      </div>
      <div className="quiz-bg-bottom">
        <Image
            src="/quiz-bg-bottom.png"
            alt="Decorative bottom overlay for quiz page"
            fill                  
            priority              
            className="quiz-bg-bottom"
          />        
      </div>
    </div>
  );
}