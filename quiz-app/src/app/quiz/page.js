// src/app/quiz/page.js
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import questions from '../../../data/questions.json';
import Image from 'next/image';

export default function QuizPage() {
  const [step, setStep] = useState(0);
  // keep track of which option was picked on each question
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const router = useRouter();

  function choose(val) {
    // record this choice
    const newAnswers = [...answers];
    newAnswers[step] = val;
    setAnswers(newAnswers);

    // move forward (or finish)
    const next = step + 1;
    if (next >= questions.length) {
      // tally up the results
      const tally = newAnswers.reduce(
        (acc, ans) => ans ? { ...acc, [ans]: acc[ans] + 1 } : acc,
        { A: 0, B: 0, C: 0, D: 0, E: 0 }
      );
      const winner = Object.entries(tally)
        .sort(([, a], [, b]) => b - a)[0][0];
      router.push(`/quiz/result?type=${winner}`);
    } else {
      setStep(next);
    }
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
  }

  const { text, options } = questions[step];

  return (
    <div className="container quiz-bg">
      <div className="quiz-bg-top">
        {/* <Image
          src="/quiz-bg-top.webp"
          alt=""
          fill
          priority
          loading="eager"
          className="quiz-bg-top__img"
        /> */}
      </div>

      <div className="quiz-container">
        <h2 className="quiz-title">{text}</h2>
        <div className="options-container">
          {options.map((opt) => (
            <button
              key={opt.value}
              className={`button ${answers[step] === opt.value ? 'selected' : ''}`}
              onClick={() => choose(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <div className="quiz-navigation">
          <div className="quiz-footer">
            Question {step + 1} of {questions.length}
          </div>

          {step > 0 && (
            <button className="button back-button" onClick={goBack}>
              ← Back
            </button>
          )}

        </div>
      </div>

      <div className="quiz-bg-bottom">
        {/* <Image
          src="/quiz-bg-bottom.webp"
          alt=""
          fill
          priority
          loading="eager"
          className="quiz-bg-bottom__img"
        /> */}
      </div>
    </div>
  );
}
