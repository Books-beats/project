import React from 'react'
import css from './Cards.module.css'
import {Link} from "react-router-dom"

const Cards = ({results, page}) => {
    let myStyle={
        fontFamily: 'Georgia'
      }
    let display;
  if(results){
    //If results are matched then, cards are generated for each character
    display=results.map(funct=>{
     let {id, name, image, status, location}= funct;
        return ( 
        /*Use of <link> to set the url. It is used so that each card can become clickable link which will enable
        them to get to the detailed description of each character*/
        <Link
         style={{textDecoration: "none"}} 
         to= {`${page}${id}`}
         key={id} className="col-lg-4 col-md-6 col-sm-6 col-12 position-relative my-3 text-dark">
            <div className={css.cards}>
                <img src={image} alt="" className={`${css.img} img-fluid`}/>
                <div className="content">
                    <div className="fs-4 mb-1 p-2 fw-bold" style={myStyle}>{name}</div>
                </div>
                <div className="info">
                    <div className="fs-6 mb-1 px-2"><b>Status</b>:  
                    {(()=>{
                        if(status=== "Dead"){
                            return (
                                <span className="badge bg-danger"> {status} </span>
                            )
                        } 
                        else if(status=== "Alive"){
                            return (
                                <span className="badge bg-success"> {status} </span>
                            )
                        }
                        else {
                            return (
                                <span className="badge bg-secondary"> {status} </span>  
                            )
                        }
                    })()}
                    </div>
                    <div className="fs-6 mb-1 px-2"><b>Location:</b> {location.name}</div>
                    
                </div>
            </div>
        </Link>)
    });
  }else{
    display= "No Characters found";
  }
  
    return (
    <>
      <>{display}</>
    </>
  )
}

export default Cards
