import React from 'react'
import Star from './Star'
import Vote from './vote'

const LayoutCard= ({studData}) => {
    //console.log(studData);
  return (
    <>
    <section className='main-card--cointainer ' >
    {studData.map((curElem)=>{
        return(
        <>
            <div className='card-container' key={curElem}>
            <div className='card'>
                <div className='card-body'>
                <div class="imageholder">
                  <span className='card-author subtle'>Department of Ai & Ds</span><br/>
                      <div class='circularframe'>
                        <img src={curElem.image} alt="images" className='card-media'/>
                      </div>
                    </div>
                  <hr/>
                  <div className='txt-mid'>
                    <h2 className='card-title'>{curElem.Name}</h2>
                </div>
                  <span className='card-description subtle'>       
                    Reg No : <i style={{color:'white'}}>{curElem.RegNo}</i> <br/>
                    Dob : <i style={{color:'white'}}>{curElem.DOB}</i> <br/>
                    Category : <i style={{color:'white'}}>{curElem.Category}</i> <br/>
                    Gender : <i style={{color:'white'}}>{curElem.sex}</i> <br/>
                    Father Name : <i style={{color:'white'}}>{curElem.Father}</i> <br/>
                    CPGA : <i style={{color:'white'}}>{curElem.CGPA}</i> <br/>
                    Contact : <i style={{color:'white'}}>{curElem.Contact} </i> <br/>
                  </span>
                  {/* <div className='card-read'> Photo</div> */}
                  <hr/>

                  <i style={{fontSize:'19px',color:'wheat'}}>Ratings : </i><br/>
                  <div class="roww">Acadamics :  <Star stars={curElem.CGPA/2} /></div>

                  <Vote studentId={curElem.No} />
                 
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