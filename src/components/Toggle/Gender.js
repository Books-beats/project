import React from 'react'
import Button from './Button'

const Gender = ({setPage, setGender}) => {
    let gender= ["Male", "Female", "Genderless", "Unknown"];
  return (
    
    
  <div className="accordion-item border border-dark rounded-top">
    <h2 className="accordion-header bg-warning" id="flush-headingTwo">
      <button className="accordion-button bg-warning text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Gender
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body d-flex flex-wrap gap-2">
      {/*Use of map function to iterate over the "gender" array. Each item of the array will be displayed 
       as a different button with specified properties */}
      {gender.map((items, index) =>
        <Button 
        //Updating the state related to gender
        x= {setGender}
        setPage= {setPage}
        key={index} 
        name="gender" 
        index={index} 
        items={items}/>
        )}
        </div>
    </div>
   </div>
   
  )
}

export default Gender
