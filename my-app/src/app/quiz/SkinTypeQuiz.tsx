'use client'
import React, { useState } from 'react';

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "How does your skin feel a few hours after washing your face?",
    options: [
      { text: "Shiny and oily all over", skinType: "Oily", points: 3 },
      { text: "Tight and sometimes flaky", skinType: "Dry", points: 3 },
      { text: "Oily in the T-zone but normal/dry on cheeks", skinType: "Combination", points: 3 },
      { text: "Irritated, itchy, or red", skinType: "Sensitive", points: 3 }
    ]
  },
  {
    id: 2,
    question: "How often do you experience breakouts?",
    options: [
      { text: "Frequently, especially in the T-zone", skinType: "Oily", points: 2 },
      { text: "Rarely", skinType: "Dry", points: 1 },
      { text: "Sometimes, usually in the T-zone only", skinType: "Combination", points: 2 },
      { text: "When I use certain products or during stress", skinType: "Sensitive", points: 2 }
    ]
  },
  {
    id: 3,
    question: "How would you describe your pores?",
    options: [
      { text: "Visibly enlarged, especially on nose and forehead", skinType: "Oily", points: 2 },
      { text: "Nearly invisible", skinType: "Dry", points: 2 },
      { text: "Enlarged in T-zone, fine on cheeks", skinType: "Combination", points: 2 },
      { text: "Normal sized but products can cause irritation", skinType: "Sensitive", points: 1 }
    ]
  },
  {
    id: 4,
    question: "How does your skin react to new products?",
    options: [
      { text: "May cause more oiliness or breakouts", skinType: "Oily", points: 1 },
      { text: "May feel tight or cause flaking", skinType: "Dry", points: 1 },
      { text: "Differs depending on where applied", skinType: "Combination", points: 1 },
      { text: "Often causes redness, burning, or irritation", skinType: "Sensitive", points: 3 }
    ]
  },
  {
    id: 5,
    question: "By midday, how does your face usually feel?",
    options: [
      { text: "Noticeably oily and shiny", skinType: "Oily", points: 2 },
      { text: "Tight and possibly uncomfortable", skinType: "Dry", points: 2 },
      { text: "Oily in the T-zone but fine elsewhere", skinType: "Combination", points: 2 },
      { text: "Can be reactive to environmental factors", skinType: "Sensitive", points: 1 }
    ]
  }
];

type SkinTypeResult = 'Oily' | 'Dry' | 'Combination' | 'Sensitive' | null;

interface SkinTypeQuizProps {
  onComplete: (type: SkinTypeResult) => void;
}

export default function SkinTypeQuiz({ onComplete }: SkinTypeQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    Oily: 0,
    Dry: 0,
    Combination: 0,
    Sensitive: 0
  });
  const [completed, setCompleted] = useState(false);
  const [result, setResult] = useState<SkinTypeResult>(null);

  const handleAnswer = (skinType: string, points: number) => {
    const newScores = { ...scores };
    newScores[skinType as keyof typeof scores] += points;
    setScores(newScores);
    
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Find the skin type with the highest score
      let maxScore = 0;
      let maxSkinType: SkinTypeResult = null;
      
      Object.entries(newScores).forEach(([type, score]) => {
        if (score > maxScore) {
          maxScore = score;
          maxSkinType = type as SkinTypeResult;
        }
      });
      
      setResult(maxSkinType);
      setCompleted(true);
      onComplete(maxSkinType);
    }
  };

  const skinTypeDescriptions = {
    Oily: "Skin produces excess oil (sebum), often leading to a shiny appearance, enlarged pores, and a higher likelihood of acne or blackheads.",
    Dry: "Lacks sufficient moisture and natural oils, often feeling tight, rough, or flaky. May appear dull and is prone to irritation or redness.",
    Combination: "Features areas of both oily and dry skin. Typically, the T-zone (forehead, nose, and chin) is oily, while cheeks are dry or normal.",
    Sensitive: "Easily irritated or inflamed by products, environmental factors, or stress. Frequently experiences redness, itching, or stinging sensations."
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScores({
      Oily: 0,
      Dry: 0,
      Combination: 0,
      Sensitive: 0
    });
    setCompleted(false);
    setResult(null);
  };

  if (completed && result) {
    return (
      <div className="p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-sky-600 mb-4 text-center">Your Skin Type: {result}</h2>
        <p className="text-gray-700 mb-8 text-center">
          {skinTypeDescriptions[result]}
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
      <h2 className="font-bold text-3xl text-sky-600 mb-4 text-center">Skin Type Quiz</h2>
      <div className="mb-6 text-center">
        <p className="text-lg mb-2">Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}</p>
        <p className="text-xl font-medium">{currentQ.question}</p>
      </div>
      <div className="grid justify-center gap-4">
        {currentQ.options.map((option, index) => (
          <button
            key={index}
            className="w-80 font-bold text-center bg-sky-600 text-white p-2 rounded-full transition duration-150 ease-in-out hover:bg-sky-800 hover:drop-shadow-md"
            onClick={() => handleAnswer(option.skinType, option.points)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}