
import { useEffect, useState } from "react";

import { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";

import mdPos from '@/assets/img/madara.png'




export default function testPos() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions, setQuestions] = useState(() => {
        const questionsFromStorage = localStorage.getItem('questions');
        return questionsFromStorage ? JSON.parse(questionsFromStorage) : null;
    });
    
    function nextQuestion(e) {
       
        
        setCurrentQuestion(currentQuestion + 1);
           
    }
    

    const el = useRef(null);
    const child = gsap.utils.selector(el);
    const tl = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);
  
   
  
    return (
        <main ref={el} className="containerA">
        <section className="panel red">
          <h1 style={{color: 'rgb(255 0 198)', padding: '20px', maxWidth: '900px'}} className="1">Ах… кто бы сомнивалься величия Мадары 🫦</h1>
          <h2 style={{color: '#f5ffe7', padding: '20px', maxWidth: '900px'}} className="">прокручвайте вниз 👇</h2>
        </section>
        {questions &&
          questions.map((question, index) => (
            <section key={index} className="panel blue">
                <img style={{position: 'absolute', top: '20px', right: '80px', width: '10%'}} src={mdPos} alt="" />
              <h1 className="2" style={{color: '#f5ffe7', padding: '20px', maxWidth: '900px'}}>{question.question}</h1>
              <h2 style={{color: '#04ea79', padding: '20px', maxWidth: '900px'}}>{question.correctAnswer}</h2>
            </section>
          ))}
      </main>
    );
}
