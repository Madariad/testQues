import {useNavigate} from 'react-router-dom'

import Card from '@/components/card'

import { Container, Row, Col } from 'react-bootstrap'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useState, useEffect } from "react";
import dataJson from '@/assets/json/questions.json'


export default function testListPage() {
    
const navigate = useNavigate()


    useEffect(() => {
    if (localStorage.getItem('questions') === null || localStorage.getItem('questions') === undefined) {
          localStorage.setItem('questions', JSON.stringify(dataJson))
        } else {
          const storedQuestions = JSON.parse(localStorage.getItem('questions'))
        }
      }, [])
  return (
    <Container style={{paddingTop: '80px'}}>
   
    <Row style={{ justifyContent: 'center', gap: '30px'}}>
        <Col sm={5} md={3}  onClick={() => navigate('/testpos')}>
            <Card title='Test' subtitle='test' />
        </Col>
        <Col sm={5} md={3}  onClick={() => navigate('/questionsRandom')}>
            <Card title='Random' subtitle='' />
        </Col>
        <Col md={3}  onClick={() => navigate('/questionsRandomFiveTine')}>
            <Card title='Random 50' subtitle='test' />
        </Col>
        <Col md={6}  onClick={() => navigate('/questionsStatistics')}>
            <Card title='Statistics' subtitle='test' />
        </Col>
        <Col md={5}  onClick={() => navigate('/questionsNo')}>
            <Card title='Questions' subtitle='Questions that cannot be answered correctly' />
        </Col>
    </Row>

   

      
</Container>
  )
}
