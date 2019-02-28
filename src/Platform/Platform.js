import React from 'react';
import './Platform.css'

const groups =[

    {title:'Leader in 10 countries',
    para:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile',
    image:'https://www.docplanner.com/img/flag.png'},

    {title:'30 million unique patients',
    para:'visit us every month',
    image:'https://www.docplanner.com/img/flag.png'},

    {title:'1 million appointments',
    para:'booked last month',
    image:'https://www.docplanner.com/img/visits.png'},

    {title:'2 million active doctors',
    para:'trust in our solutions',
    image:'https://www.docplanner.com/img/doctors.png'}

]


const Platform = ()=>{

    return(

        <div >
            
            

            <div className='platform'>
                    <div className="titre">
                        <h1>The world's <br/> biggest healthcare platform </h1>
                        <p> We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries. </p>
                    </div>
                    <div className='container'>
                        {groups.map((el)=>
                            <div className='col'>
                                <img className='image' src={el.image}/>
                                <h3>{el.title}</h3>
                                <p>{el.para}</p>
                            </div>)}
                    </div>
            </div>

        </div>
     
    )
}

export default Platform;