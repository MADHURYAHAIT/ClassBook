import React from 'react'



const LayoutCard= ({studData}) => {
    //console.log(studData);
  return (
    <>
    <section className='main-card--cointainer '>
    {studData.map((curElem)=>{
        return(
        <>
            <div className='card-container' key={curElem}>
            <div className='card'>
                <div className='card-body'>
                  <span className='card-author subtle'>Department of Ai & Ds</span>
                  <h2 className='card-title'>{curElem.Name}</h2>
                  <span className='card-description subtle'>       
                    Reg No : {curElem.RegNo} <br/>
                    Dob : {curElem.DOB}<br/>
                    Category:{curElem.Category}<br/>
                    Gender:{curElem.Gender}<br/>
                    Father's Name:{curElem.Father}<br/>
                    CPGA : {curElem.CGPA}<br/>
                    Contact : {curElem.Contact} <br/>
                    
                  </span>

                  <div className='card-read'> Photo</div>
                  <img src={curElem.image} alt="images" className='card-media'/>
                  <br/>
                  <span className='card-tag subtle'>Rate Me</span>
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