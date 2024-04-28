import { Link, Outlet, useNavigate } from "react-router-dom"
import Navbar from '@/components/navbar'

import { Container } from "react-bootstrap";

function App() {
  const navigate = useNavigate();

  



  return (
    <>
    

      <div >
      <Navbar />
      </div>

<Container>
<Outlet />
</Container>
    
    </>
  )
}

export default App
