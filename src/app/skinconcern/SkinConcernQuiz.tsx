'use client'
import React, { useState } from 'react';

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is your main skin issue when you look in the mirror?",
    options: [
      { text: "Pimples or blackheads", concern: "Acne", points: 3 },
      { text: "Fine lines or wrinkles", concern: "Aging", points: 3 },
      { text: "Dark spots or uneven tone", concern: "Hyperpigmentation", points: 3 },
      { text: "Redness or irritation", concern: "Sensitivity", points: 3 },
      { text: "Lack of radiance or glow", concern: "Dullness", points: 3 },
      { text: "Roughness or bumpiness", concern: "Uneven Texture", points: 3 }
    ]
  },
  {
    id: 2,
    question: "What is your biggest skincare goal?",
    options: [
      { text: "Clear up breakouts", concern: "Acne", points: 2 },
      { text: "Reduce signs of aging", concern: "Aging", points: 2 },
      { text: "Even out skin tone", concern: "Hyperpigmentation", points: 2 },
      { text: "Soothe and calm irritation", concern: "Sensitivity", points: 2 },
      { text: "Brighten dull skin", concern: "Dullness", points: 2 },
      { text: "Smooth out rough patches", concern: "Uneven Texture", points: 2 }
    ]
  },
  {
    id: 3,
    question: "What skincare ingredients are you most interested in?",
    options: [
      { text: "Retinol, benzoyl peroxide, or salicylic acid", concern: "Acne", points: 1 },
      { text: "Retinol, peptides, or vitamin C", concern: "Aging", points: 1 },
      { text: "Vitamin C, niacinamide, or kojic acid", concern: "Hyperpigmentation", points: 1 },
      { text: "Aloe, ceramides, or colloidal oatmeal", concern: "Sensitivity", points: 1 },
      { text: "Vitamin C, glycolic acid, or niacinamide", concern: "Dullness", points: 1 },
      { text: "AHAs, BHAs, or physical exfoliants", concern: "Uneven Texture", points: 1 }
    ]
  }
];

type SkinConcernResult = 'Acne' | 'Aging' | 'Hyperpigmentation' | 'Sensitivity' | 'Dullness' | 'Uneven Texture' | null;

interface SkinConcernQuizProps {
  onComplete: (concern: SkinConcernResult) => void;
}

export default function SkinConcernQuiz({ onComplete }: SkinConcernQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    'Acne': 0,
    'Aging': 0,
    'Hyperpigmentation': 0,
    'Sensitivity': 0,
    'Dullness': 0,
    'Uneven Texture': 0
  });
  const [completed, setCompleted] = useState(false);
  const [result, setResult] = useState<SkinConcernResult>(null);

  const handleAnswer = (concern: string, points: number) => {
    const newScores = { ...scores };
    newScores[concern as keyof typeof scores] += points;
    setScores(newScores);
    
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Find the concern with the highest score
      let maxScore = 0;
      let maxConcern: SkinConcernResult = null;
      
      Object.entries(newScores).forEach(([concern, score]) => {
        if (score > maxScore) {
          maxScore = score;
          maxConcern = concern as SkinConcernResult;
        }
      });
      
      setResult(maxConcern);
      setCompleted(true);
      onComplete(maxConcern);
    }
  };

  const concernDescriptions = {
    'Acne': "Acne is the result of hair follicles being clogged with oil and dead skin cells, and bacteria, resulting in whiteheads, blackheads, and pimples.",
    'Aging': "As a natural consequence of getting older, your body will produce less collagen and elastin, resulting in thinner, drier skin with more wrinkles.",
    'Hyperpigmentation': "Hyperpigmentation occurs when certain parts of the skin become darker in color, caused by excess melanin production.",
    'Sensitivity': "Sensitive skin reacts easily to environmental factors, products, or allergens, often resulting in redness, irritation, or discomfort.",
    'Dullness': "Dull skin often appears lackluster, uneven, or tired, usually caused by dead skin cells, dehydration, or poor circulation.",
    'Uneven Texture': "Uneven skin texture refers to a lack of smoothness, often caused by clogged pores, dead skin cells, or scarring."
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScores({
      'Acne': 0,
      'Aging': 0,
      'Hyperpigmentation': 0,
      'Sensitivity': 0,
      'Dullness': 0,
      'Uneven Texture': 0
    });
    setCompleted(false);
    setResult(null);
  };

  if (completed && result) {
    return (
      <div className="p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-sky-600 mb-4 text-center">Your Skin Concern: {result}</h2>
        <p className="text-gray-700 mb-8 text-center">
          {concernDescriptions[result]}
        </p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={restartQuiz}
            className="font-bold text-center bg-sky-600 text-white py-3 px-8 rounded-full transition duration-150 ease-in-out hover:bg-sky-700"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  const currentQ = QUIZ_QUESTIONS[currentQuestion];

  return (
    <div>
      <h2 className="font-bold text-3xl text-sky-600 mb-4 text-center">Skin Concern Quiz</h2>
      <div className="mb-6 text-center">
        <p className="text-lg mb-2">Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}</p>
        <p className="text-xl font-medium">{currentQ.question}</p>
      </div>
      <div className="grid justify-center gap-4">
        {currentQ.options.map((option, index) => (
          <button
            key={index}
            className="w-80 font-bold text-center bg-sky-600 text-white p-2 rounded-full transition duration-150 ease-in-out hover:bg-sky-800 hover:drop-shadow-md"
            onClick={() => handleAnswer(option.concern, option.points)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}