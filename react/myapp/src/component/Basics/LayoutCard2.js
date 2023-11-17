import React from 'react'
import Star from './Star'
import Vote from './vote'

const LayoutCard= ({studData}) => {
   
    // console.log(studData);
  return (
    <>

    <section className='main-card--cointainer2 ' >
    {studData.map((curElem)=>{
        return(
        <>
            <div className='card-container2' key={curElem}>
             
                <div className='card-body'>


                <div class="col" ontouchstart="this.classList.toggle('hover');">
                  <div class="container">

                    <div class="front" style={{backgroundImage: `url(${curElem.image})`}}>
                      <div class="inner">
                        <p>{curElem.Name}</p>
                        <span>Reg No. : {curElem.RegNo}</span>
                      </div>
                    </div>
                    
                    <div class="back">
                      <div class="inner">
                        <p>
                        <span className='card-description subtle'>       
                            Dob : <i style={{color:'white'}}>{curElem.DOB}</i> <br/>
                            Category : <i style={{color:'white'}}>{curElem.Category}</i> <br/>
                            Gender : <i style={{color:'white'}}>{curElem.sex}</i> <br/>
                            Father Name : <i style={{color:'white'}}>{curElem.Father}</i> <br/>
                            CPGA : <i style={{color:'white'}}>{curElem.CGPA}</i> <br/>
                            Contact : <i style={{color:'white'}}>{curElem.Contact} </i> <br/>
                        </span>
                        </p>
                      </div>
                    </div>
                    
                  </div>
                </div>







              
            </div>




                 
            </div>
      
       
    </>
        )
    })}
    </section>
    
 
    
    </>
  )
}

export default LayoutCard