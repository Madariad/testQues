import { Container, Row, Col } from 'react-bootstrap';
import dataJson from '@/assets/json/questions.json'

import { useEffect, useState } from "react";

export default function questionsRandomPage() {
    const [question, setQuestion] = useState([])
    const [correntquestion, setCorrentquestion] = useState(0)

    useEffect(() => {
        setQuestion(dataJson[correntquestion])
    }, [correntquestion])

    console.log(question);
    
    return (
        <>
        <Container>
           
                <div className="">
                    <div style={{fontWeight: 'bold',color: '#9d007af2', width: '100%', height: '200px' , backgroundColor: '#b597ff', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>{question.question}</div>
                    <Row>
                        {question.answers && question.answers.map((el, index) => (
                            <Col onClick={() => {setCorrentquestion(correntquestion + 1)}}>
                                <div style={{backgroundColor: 'ButtonHighlight', width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{el}</div>
                            </Col>
                        ))}
                    </Row>
                </div>
            
        </Container>
        </>
    )
}
