import React from 'react';
import './Header.css';

const nav =[

 {name:'About Us' , color:"aqua"},

 {name:'Career'},
 
 {name :'Departements',

  sousmenu : [
                {link: 'Marketing & PR'},
                {link:'Customer Success & Sales'},
                {link:'IT , Product , Design & UX'},
                {link:'Finance & Administration'},
                {link:'HR & more'}
             ]
}

]
 

  const Header =()=>{

   return( 
    <div className='menu'>
      <div><a href=""><img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"></img></a>
      </div>
      <div className="test">
      <ul className='main-menu'>
        {nav.map((el)=>
        <li className="element"><a href="" className={` ${el.color}`} > {el.name}</a>
          {el.sousmenu && 
          <ul className='sous-menu' >
          {el.sousmenu.map((el)=>
            
              <li ><a href="">{el.link}</a>
              </li>
            )}
          </ul>
          }
          </li> 
        )} 
      </ul>
      </div>
    </div>   
   
      
   )}
export default Header;