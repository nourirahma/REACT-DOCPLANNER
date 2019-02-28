import React from 'react';
import './Intro.css'

const intro =[

    {titre : 'Making the healthcare experience more human' ,
    para1: 'We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that`s why we are always next to them: to help them find the best possible care. Anytime, anywhere.',
    para2 : 'We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.'}

]


const Intro = ()=>{

    return(

        <div className='healthcare'>

            
        
             <div className='paragraphe'>

             <div className="logo"></div>
                {
                    intro.map((el)=>
                      
                    <div>
                        <h1>{el.titre}</h1>
                        <div className='para'>
                            <p>{el.para1}</p>
                            <p>{el.para2}</p>
                        </div>
                    </div>
                     
                    )
                }
           </div>   
        
        
        </div>
    )
}

export default Intro;