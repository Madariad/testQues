import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function QuestionCards({ question, handleNextQuestion, totalQuestions, currentQuestion }) {
    console.log(question);

    if (question && question.question) { 
        return (
            <Container>
                <span style={{position: 'fixed', top: '0px', left: '0px', color: 'ButtonFace'}}>current question: {currentQuestion} of {totalQuestions}</span>
                <span style={{position: 'absolute', top: '30px', right: '100px', color: '#b5ff0a'}}>Madara</span>
                <Row className="justify-content-md-center" style={{ marginBottom: "30px" }}>
                    <Col xs={12} style={{ fontWeight: 'bold', color: '#9d007af2', backgroundColor: '#b597ff', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                        
                        {question.question}
                    </Col>
                </Row>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {question.answers?.map((answer, index) => (
                        <Col key={index} style={{cursor: 'pointer'}}>
                            <div onClick={handleNextQuestion} data-answer={answer} style={{ backgroundColor: '#6db4ed', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', padding: '20px', border: '5px #1bff00 solid' }}>
                                {answer}
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    } else {
        return <div>Loading...</div>;
    }
}
