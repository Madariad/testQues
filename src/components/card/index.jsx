import clame from './card.module.css'
import { Container } from 'react-bootstrap'

export default function card({title, subtitle}) {
    


    return (
 
    

      
           <div className={clame.card}>
               <div className={clame.cardHeader}>
                    {title}
               </div>
               <div className={clame.cardBody}>
                    {subtitle}
               </div>
           </div>
      
    
    )
}