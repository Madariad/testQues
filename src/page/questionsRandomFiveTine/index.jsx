import { useEffect, useState } from "react";
import QuestionCards from "@/components/questionCards";

function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

export default function questionsRandomFiveTine() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [randomQuestions, setRandomQuestions] = useState([]);
    const [storedQuestions, setStoredQuestions] = useState(() => {
        const questionsFromStorage = localStorage.getItem('questions');
        return questionsFromStorage ? JSON.parse(questionsFromStorage) : null;
    });

    useEffect(() => {
        const questionsFromStorage = localStorage.getItem('questions');
        if (questionsFromStorage) {
            const storedQuestions = JSON.parse(questionsFromStorage);
            const shuffledQuestions = shuffleArray([...storedQuestions]);
            const questionsWithShuffledAnswers = shuffledQuestions.slice(0, 50).map(q => ({
                ...q,
                answers: shuffleArray([...q.answers])
            }));
            setRandomQuestions(questionsWithShuffledAnswers);
        }
    }, []);

    function nextQuestion(e) {
        const selectedAnswer = e.target.textContent;
        const correctAnswerElement = document.querySelector(`[data-answer='${randomQuestions[currentQuestion].correctAnswer}']`);

        if (selectedAnswer === randomQuestions[currentQuestion].correctAnswer) {
            e.target.style.backgroundColor = 'green';
        } else {
            e.target.style.backgroundColor = 'red';
            if (correctAnswerElement) {
                correctAnswerElement.style.backgroundColor = 'green';
            }
        }

        const updatedQuestions = storedQuestions.map(q => {
            if (q.question === randomQuestions[currentQuestion].question) {
                console.log(selectedAnswer === randomQuestions[currentQuestion].correctAnswer ? q.correctCount + 1 : q.correctCount,)
                return {
                    ...q,
                    correctCount: selectedAnswer === randomQuestions[currentQuestion].correctAnswer ? q.correctCount + 1 : q.correctCount,
                    incorrectCount: selectedAnswer !== randomQuestions[currentQuestion].correctAnswer ? q.incorrectCount + 1 : q.incorrectCount,
                };
            }
            return q;
        });

        console.log(updatedQuestions);

        setStoredQuestions(updatedQuestions);
        localStorage.setItem('questions', JSON.stringify(updatedQuestions));


        setTimeout(() => {
            setCurrentQuestion(currentQuestion + 1);
            e.target.style.backgroundColor = '#6db4ed';
            if (correctAnswerElement && selectedAnswer !== randomQuestions[currentQuestion].correctAnswer) {
                correctAnswerElement.style.backgroundColor = '#6db4ed';
            }
            console.log(storedQuestions);
        }, 2000);
    }

    return (
        <>
            {randomQuestions.length > 0 && (
                <QuestionCards
                    question={randomQuestions[currentQuestion]}
                    handleNextQuestion={nextQuestion}
                    totalQuestions={randomQuestions.length}
                    currentQuestion={currentQuestion}
                />
            )}
        </>
    );
}
