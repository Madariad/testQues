import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Navigate, useNavigate } from "react-router-dom";


import Card from '@/components/card'

import { Container, Row, Col } from 'react-bootstrap'



function App() {
  const navigate = useNavigate()
  const [questions, setQuestions] = useState(0)



  return (
    <>
    <Container>
      <Row>
        <Col onClick={() => navigate('/questionsRandom')}>
        
            <Card title='Random' subtitle='' />
        </Col>
        <Col onClick={() => navigate('/questionsRandomFiveTine')}>
        
      <Card title='Random 50' subtitle='test' />
        </Col>

        <Col onClick={() => navigate('/questionsStatistics')}>
        
      <Card title='statistics' subtitle='test' />
        </Col>

        <Col onClick={() => navigate('/questionsNo')}>
        
      <Card title='questions' subtitle='questions that cannot be answered correctly' />
        </Col>

      </Row>
    </Container>
      
    </>
  )
}

export default App
