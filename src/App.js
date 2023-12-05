import React, { useEffect, useState } from 'react'
import  "bootstrap/dist/css/bootstrap-reboot.min.css";
import  "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Pages from './components/Pages';
import  './App.css';
import Search from "./components/Search";
import Accordian from './components/Toggle/Accordian';
import CardDetails from "./components/CardDetails"

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";

function App(){
  return(
    //Using react router
   <Router>
     <div className="App">
      {/*Setting the title of Navbar*/}
      <Navbar title= "Character Wiki" />
      </div>
      <Routes>
        {/*Declaring the route for main page that is the Characters' page*/}
        <Route path="/" element={<Character />} />
        {/*Route for the description of each character*/}
        <Route path="/:id" element={<CardDetails />} />
        {/*Route for Episodes' page*/}
        <Route path="/episodes" element={<Episodes />} />
        {/*Route for the description of each episode*/}
        <Route path="/episodes/:id" element={<CardDetails />} />
        {/*Route for the Location's page*/}
        <Route path="/location" element={<Location />} />
        {/*Route for description of each location site*/}
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
   </Router>
  );
}


const Character = () => {
  //Using State variables
  let [pageNum, setPage]= useState(1);
  let [search, updateSearch]= useState("");
  let [species, setSpecies]= useState("");
  let [gender, setGender]= useState("");
  let [status, setStatus]= useState("");
  
  //Store the data fetched from API
  let [updatedData, setUpdatedData]= useState([]);
  let {info, results} = updatedData;
  console.log(results);
  let api= `https://rickandmortyapi.com/api/character/?page=${pageNum}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

    //Whenver the API url changes, the async function helps to fetch the updated data
    useEffect(()=>{
      (async function () {
        let data= await fetch(api).then((res) => res.json());
        setUpdatedData(data);
      })()
    }, [api])

  return (
    <>
    {/*Heading for the main page*/}
    <h2 className="text-center mb-3" style={{fontFamily:"Georgia", textShadow:"2px 2px 2px grey"}}>Characters</h2>
    <Search updateSearch={updateSearch} setPage={setPage}/>
    
     {/*Container for grid cards. Enabling horizontal scrolling*/}
    <div className="container-fluid  py-1">
    <div className="d-flex flex-lg-row flex-col my-2 flex-lg-nowrap flex-sm-nowrap overflow-auto" style={{backgroundColor:"#FFFFF0"}}>
    <Cards page="/" results= {results} />
    </div>
    </div>

      {/*Use of accordian to display the filter options*/}
    <Accordian setStatus={setStatus} setPage={setPage} setGender={setGender} setSpecies={setSpecies} />

    <Pages info={info} setPage= {setPage}/>
    </>
  );
};

export default App;
