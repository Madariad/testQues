import './card.css'
import { Container } from 'react-bootstrap'

export default function card({title, subtitle}) {
    


    return (
        <div className="ag-format-container">
        <div className="ag-courses_box">
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
      
              <div className="ag-courses-item_title">
                {title}
              </div>
      
              <div className="ag-courses-item_date-box">
                Status:
                <span className="ag-courses-item_date">
                  Testing
                </span>
              </div>
            </a>
          </div>
      
          
      
        </div>
      </div>
      
    
    )
}