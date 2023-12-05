import React from 'react'
import css from "./Search.module.css";

    const search = ({updateSearch, setPage}) => {
  return (
    <form className="d-flex flex-sm-row flex-column justify-content-center">
        <input onChange= {(x) =>{
         setPage(1);
         updateSearch(x.target.value);
        }} 
        placeholder="Search your Character" type="text" className={css.input} />
        <button onClick={(x) =>{x.preventDefault()}} className={`${css.button} btn btn-warning`}>Search</button>
    </form>
  )
}

export default search