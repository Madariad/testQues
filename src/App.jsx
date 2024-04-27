import { useEffect, useState } from 'react'


import './App.css'

import { Navigate, useNavigate } from "react-router-dom";

import dataJson from '@/assets/json/questions.json';
import Card from '@/components/card'

import { Container, Row, Col } from 'react-bootstrap'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function App() {
  const navigate = useNavigate()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  useEffect(() => {
    console.log(dataJson)
    if (localStorage.getItem('questions') === null) {
      localStorage.setItem('questions', JSON.stringify(dataJson))
    } else {
      const storedQuestions = JSON.parse(localStorage.getItem('questions'))
      // Now you can use storedQuestions as an object
    }
  }, [])
  



  return (
    <>
    <Container>
    <Button variant="primary" onClick={handleShow}>
       Обезательно читать!
      </Button>
    <Row style={{ justifyContent: 'center', gap: '30px'}}>
        <Col md={4}  onClick={() => navigate('/questionsRandom')}>
            <Card title='Random' subtitle='' />
        </Col>
        <Col md={4}  onClick={() => navigate('/questionsRandomFiveTine')}>
            <Card title='Random 50' subtitle='test' />
        </Col>
        <Col md={4}  onClick={() => navigate('/questionsStatistics')}>
            <Card title='Statistics' subtitle='test' />
        </Col>
        <Col md={4}  onClick={() => navigate('/questionsNo')}>
            <Card title='Questions' subtitle='Questions that cannot be answered correctly' />
        </Col>
    </Row>

   

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Вы придупрежденны</Modal.Title>
        </Modal.Header>
        <Modal.Body>Вопросы и ответы были импортированы автоматически. Никто не гарантирует их точность, и никто не несет ответственности за их содержание.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
</Container>

      
    </>
  )
}

export default App
