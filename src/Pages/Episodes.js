import React, {useState, useEffect} from 'react'
import Cards from '../components/Cards';

const Episodes = () => {
  //State for storing episodes' id
  let [id, setId] = useState(1);
  //State for storing information
  let [info, setInfo] = useState([]);
  //State to store the results
  let [results, setResults] = useState([]);
  //Destructuring
  let {air_date, name} = info;
  let total = 51;
  let title = "Episode"
  
  let api= `https://rickandmortyapi.com/api/episode/${id}`;
  
  //Fetching episodes' infromation 
  useEffect(() => {
  (async function () {
    let data = await fetch(api).then((res) => res.json());
    setInfo(data);

    let k = await Promise.all(
      data.characters.map((z) =>{
       return fetch(z).then((res) => res.json());
      })
    );
    setResults(k);
  })()
  }, [api]);
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center" style={{fontFamily:"Georgia", textShadow:"2px 2px 2px grey"}}>Episode: <span className="text-warning fw-bold">{name === "" ? "Unknown" : name }</span> </h2>
        <h5 className="text-center fw-bold" style={{fontFamily:"Georgia", textShadow:"2px 2px 2px grey"}}>Air Date: {air_date === "" ? "Unknown" : air_date}</h5>
      </div>
      <div className="row">
          <div className="container-fluid bg-light py-2">
          <div className="d-flex flex-row flex-nowrap overflow-auto" style={{backgroundColor:"#FFFFF0"}} >
          <Cards page="/episodes/" results= {results} /> 
          </div>
          </div>
      </div>

   <div className="d-flex justify-content-center mt-4">
   <button className="btn btn-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft"> Episodes </button>
  </div>
  <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
    
    <div className="offcanvas-header">
    <h5 style={{fontFamily:"Georgia"}} className="offcanvas-title fs-3 mx-2 fw-bold text-dark" id="offcanvasLeftLabel">Select the episode</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> 
    </div>
   
    <div className="offcanvas-body">
      <div className="input-group mb-3">
        {/*Creating a dropdown list based on the total number of episodes.
       On clicking on an episode, the state variable "id" is updated*/}
         <select onChange={(e) => setId(e.target.value)} className="form-select" id="inputGroup">
           <option value="1" selected>Choose...</option>
           {[...Array(total).keys()].map((y) => {
               return (
               <option value={y + 1}>
                {title} - {y + 1}
               </option>
               );
           })}
           
           
          </select>
      </div>
  
    </div>
      
    </div>
    </div>
  )
}

export default Episodes
