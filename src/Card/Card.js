
import React from 'react';
import './Card.css'
const card =[

    {image:'https://www.docplanner.com/images/warsaw.png', title:'Warsaw', textbtn:'See openings'},
    {image:'https://www.docplanner.com/images/barcelona.png' , title:'Barcelona' , textbtn:'See openings'},
    {image:'https://www.docplanner.com/images/istanbul.png' , title:'Istanbul' , textbtn:'See openings'},
    {image:'https://www.docplanner.com/images/rome.png' , title:'Rome' , textbtn:'See openings'},
    {image:'https://www.docplanner.com/images/mexico-city.png' , title:'Mexico City' , textbtn:'See openings'},
    {image:'https://www.docplanner.com/images/curitiba.png' , title:'Curitiba' , textbtn:'See openings'}

]

const Card =()=>{

    

    return(
    
    <div className='card-body'>
            
       
        
        { card.map((el)=>
                        
            <div className='card-div'>
            <a href="">
           
                <img className='img' src={el.image} />
                <span className='btn-txt'>
                {el.title}
                <span className="btn btn--small">{el.textbtn}</span>
                </span>
        
                
            </a>
            </div>
   )

   }

            </div>
               
   

      
    )
}

export default Card;