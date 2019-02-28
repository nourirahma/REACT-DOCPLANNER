import React from 'react';
import './Doctors.css';

const doctor =[

    {title:'For patients',intro:'Find a doctor, book a visit and solve any health-related doubt' , image:'https://www.docplanner.com/img/screen-marketplace@2x.png', isBlue:'true' ,isSelect:'true'},
    {title:'For doctors',intro:'Save time managing visits and cut no-shows by half' , image:'https://www.docplanner.com/img/screen-saas@2x.png' }
]


const Doctor =()=>{

    return(

        <div>
              <div className='items'>

                  {
                      doctor.map((el)=>
                        <div className='fiche' style={{backgroundColor: el.isBlue ?  '#00ccb1' : ' #3d83df'}}> 
                            <h2>{el.title}</h2>
                            <h1>{el.intro}</h1>
                            <div className="country">
                                <img className='image' src={el.image}/>
                            
                                    {
                                        el.isSelect ? 
                                        <select className='choose'>
                                            <option  >Choose country</option>
                                            <option>Argentina</option>
                                            <option>Australia</option>
                                            <option>Brazil</option>
                                            <option>Chile</option>
                                            <option >Colombia</option>
                                            <option >Czech</option>
                                            <option>France</option>
                                            <option>Italy</option>
                                            <option>Mexico</option>
                                            <option>Peru</option>
                                            <option>Poland</option>
                                            <option>Portugal</option>
                                            <option>Spain</option>
                                            <option>Turkey</option>
                                            <option>UK</option>
                                            </select>
                                        :

                                        'false'
                                    }
                            </div>
                        </div>
                      )
                  }
              </div>
        </div>
    )
}

export default Doctor;