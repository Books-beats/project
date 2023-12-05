import React from 'react'
import Gender from './Gender'
import Species from './Species'
import Status from './Status'

const Accordian = ({setSpecies, setGender, setStatus, setPage}) => {
  //Clear option
  let clear = () =>{
    setSpecies("");
    setGender("");
    setStatus("");
    setPage("");
    //Reload the page everytime clear button is clicked
    window.location.reload(false);
  }
  return (
    <>
    {/* Generate offcanvas by using bootstrap. Here we will toggle the offcanvas*/}
  <div className="d-flex justify-content-center mt-4">
   <button className="btn btn-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft"> Filters </button>
  </div>
  <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
  
    {/* Title of offcanvas*/}
    <div className="offcanvas-header">
    <h5 style={{fontFamily:"Georgia"}} className="offcanvas-title fs-3 mx-2 fw-bold text-dark" id="offcanvasLeftLabel">Filters</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> 
    </div>
   
   <div className="offcanvas-body">
   <div onClick= {clear} style={{fontFamily:"Georgia", cursor:"pointer", textShadow: "2px 2px 2px grey"}} className="fs-6 fw-bold text-center mx-2 mb-2">Clear</div>
   {/* Use of accordians to display the filters*/}
   <div className="accordion accordian-flush" id="accordionFlushExample">
    {/*Prop "setPage" is assigned to setPage function as well as "setStatus" is assigned to setStatus function 
    to all the components- Species, Gender and Status*/}
    <Species setPage={setPage} setSpecies={setSpecies}/>
    <Gender setPage={setPage} setGender={setGender}/>
    <Status setPage={setPage} setStatus={setStatus} />
   </div> 
   </div>
  
  </div>
    </>
  )
}

export default Accordian
