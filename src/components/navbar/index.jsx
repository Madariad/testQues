import { Button, Navbar, Nav , NavDropdown, Offcanvas, Container} from 'react-bootstrap';


import { NavLink, Link, Navigate, useNavigate } from 'react-router-dom';


import Modal from 'react-bootstrap/Modal';

import { useState, useEffect } from "react";





export default function navbar() {
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    function clearLocalStorage() {
        if (localStorage.getItem('questions')) {
            localStorage.removeItem('questions');
        }
        window.location.reload();
        
    }
    



    
 
    return (
      <Navbar fixed="top" expand="lg" style={{backgroundColor: '#D4ADFC'}}>
                <Container>
                  <Navbar.Brand onClick={() => navigate.goBack()}>Online Test</Navbar.Brand>
                  <Navbar.Toggle aria-controls="offcanvasNavbar-expand-xs" />
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-xs`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-xs`}
                    placement="start"
                  >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xs`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="ml-auto gap-2">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/testQues/test">Test</Nav.Link>
                  <Button variant="primary" onClick={handleShow}>
                    Обезательно прочитать!
                    </Button>

                    <Button variant="warning" onClick={clearLocalStorage}>
                       очистить результаты
                    </Button>
                   
                    
                    </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
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
              </Navbar>
        
        
    )
  }
  