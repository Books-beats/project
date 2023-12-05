import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';


const CardDetails = () => {
    //Extracting the id parameter from the url
    let {id} = useParams();
    //Used to get the detailed description of each character
    let api = `https://rickandmortyapi.com/api/character/${id}`;
    //Storing the updated data
    let [updatedData, setUpdatedData]= useState([]);
    //Destructuring the updated data
    let {name, image, location, origin, gender, species, status, type} = updatedData;
    
    //Whenever id is changed, the updated data is fetched using useEffect hook
    useEffect(()=>{
        (async function () {
          let data= await fetch(api).then((res) => res.json());
          setUpdatedData(data);
        })()
      }, [api])
  return (
    <div className="container d-flex justify-content-center mt-0">
       <div className="d-flex flex-column gap-2">
        {/*Name of each character */}
        <h2 className="mb-1 p-2 fw-bold text-center" style={{fontFamily:"Georgia"}}>{name}</h2>
        {/*Image of each character */}
        <img src={image} alt="" className={`img-fluid`} style={{height:"35vh"}}/>
        {/*Status of each character */}
               {(()=>{
                        if(status=== "Dead"){
                            return (
                                <span className="badge bg-danger fs-5"> {status} </span>
                            )
                        } 
                        else if(status=== "Alive"){
                            return (
                                <span className="badge bg-success fs-5"> {status} </span>
                            )
                        }
                        else {
                            return (
                                <span className="badge bg-secondary fs-5"> {status} </span>  
                            )
                        }
                })()}
            {/*Additional description of each character */}
            <div className="info">
                <div className="fs-6 mb-1 px-2"><b>Location:</b> {location?.name}</div>
                <div className="fs-6 mb-1 px-2"><b>Origin:</b> {origin?.name}</div>
                <div className="fs-6 mb-1 px-2"><b>Gender:</b> {gender}</div>
                <div className="fs-6 mb-1 px-2"><b>Species:</b> {species}</div>
                <div className="fs-6 mb-1 px-2"><b>Status:</b> {status}</div>
                <div className="fs-6 mb-1 px-2"><b>Type:</b> {type === "" ? "Unknown" : type}</div>
                </div>
       </div>
    </div>
  )
}

export default CardDetails
