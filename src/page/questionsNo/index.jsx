
import { useEffect, useState } from "react";

import QuestionCards from "@/components/questionCards";
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
export default function questionsNo() {
    const [question, setQuestion] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [storedQuestions, setStoredQuestions] = useState(() => {
        const questionsFromStorage = localStorage.getItem('questions');
        return questionsFromStorage ? JSON.parse(questionsFromStorage) : null;
    });

    useEffect(() => {
        if (storedQuestions && storedQuestions.length > currentQuestion) {
            // Отфильтровать вопросы, на которые был дан неправильный ответ
            const incorrectQuestions = storedQuestions.filter(q => q.incorrectCount > 0);

            // Отсортировать вопросы по количеству неправильных ответов (по убыванию)
            const sortedQuestions = incorrectQuestions.sort((a, b) => b.incorrectCount - a.incorrectCount);

            // Выбрать случайный вопрос для отображения
            const randomIndex = Math.floor(Math.random() * sortedQuestions.length);
            const selectedQuestion = sortedQuestions[randomIndex];

            // Перемешать ответы
            const questionWithShuffledAnswers = {
                ...selectedQuestion,
                answers: shuffleArray([...selectedQuestion.answers])
            };

            setQuestion(questionWithShuffledAnswers);
        }
    }, [currentQuestion, storedQuestions]);
    

    function nextQuestion(e) {
        const selectedAnswer = e.target.textContent;
        const correctAnswerElement = document.querySelector(`[data-answer='${question.correctAnswer}']`);
    
        if(selectedAnswer === question.correctAnswer) {
            
            e.target.style.backgroundColor = 'green';
        } else {
         
            e.target.style.backgroundColor = 'red';
            if (correctAnswerElement) {
                correctAnswerElement.style.backgroundColor = 'green';
            }
        }
    
       
    
        

        const updatedQuestions = storedQuestions.map(q => {
            if (q.question === question.question) {
                
                return {
                    ...q,
                    correctCount: selectedAnswer === question.correctAnswer ? q.correctCount + 1 : q.correctCount,
                    incorrectCount: selectedAnswer !== question.correctAnswer ? q.incorrectCount + 1 : q.incorrectCount,
                };
            }
            return q;
        });

    
        localStorage.setItem('questions', JSON.stringify(updatedQuestions));

        setTimeout(() => {
            setCurrentQuestion(currentQuestion + 1);
            e.target.style.backgroundColor = '#6db4ed';
            if (correctAnswerElement && selectedAnswer !== question.correctAnswer) {
                correctAnswerElement.style.backgroundColor = '#6db4ed';
            }
        }, 2000);
    }
    
   

    return (
       <>
        <QuestionCards question={question} handleNextQuestion={nextQuestion}  totalQuestions={question.length} currentQuestion={currentQuestion}/>
             
       </>
    );
}
