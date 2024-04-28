import {useEffect} from 'react'
import './mainPage.css'
import { Row, Col } from "react-bootstrap";

import mdImg from '@/assets/img/md.png'


export default function mainPage() {

  return (
   <div style={{paddingTop: '80px'}}>
     <div style={{backgroundColor: 'rgb(138 102 180 / 96%)', opacity: '.8', height: '80vh'}} className='parent-container'>
        <div className="home-header-light-blue"></div>
        <div className="home-header-light-pink"></div>

        <div style={{height: '100%'}}>
            <Row style={{height: '100%', display: 'flex', alignItems: 'center'}}>
                <Col md={'6'} style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <div style={{color: 'hsl(304.29deg 100% 60%)', fontWeight: 'bold', fontSize: '2em'}}>Online Test </div>
                    <div style={{color: 'yellow', fontSize: '1.5em'}}>Platform</div>
                  
                </Col>
                <Col md={'6'} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5em'}}>
                    <img style={{minWidth: '100px', width: '400px'}} src={mdImg} alt="Madara image" />
                </Col>
            </Row>
        </div>
    </div>

    <section style={{marginTop: '100px'}}>
           <div style={{backgroundColor: 'rgb(41 187 213 / 96%)', opacity: '.8', height: '80vh'}}>
           <div className="home-header-light-red"></div>
           <div className="home-header-light-s"></div>
           <div className="">это секция разработке </div>
                        <div style={{maxWidth: '80%', padding: '90px', color: 'black', letterSpacing: '7px'}}>
                        <p >
                        Великий Мадара, как могучий дуб, Стоит веками, властвуя своим гневом. Его глаза — две звезды, вечно светящиеся, И в них заключена мудрость и сила.
                        </p>
                        <p>
                        Он — тень на полях битвы, молния в небе, Сквозь которую проникают его клинки. Его имя — легенда, его деяния — эпос, И величие Мадары несомненно.
                        </p>
                        <p>
                        Так пусть же звучит его имя вечно, Как гром в горах, как ветер в степи. Мадара — великий воин, вечный символ, Чья сила и мудрость остаются нам вдохновением.
                        </p>
                        </div>
           </div>
    </section>
   </div>
  )
}
