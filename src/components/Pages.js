import React, {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate';
import css from "./Pages.module.css";


const Pages = ({info, setPage}) => {
  //Get the window's width
  let [width, setWidth]= useState(window.innerWidth);
  console.log(width);
  //Updating the window's dimension
  let updateDimension = () =>{
    
    setWidth(window.innerWidth);
  };
   
  //Using effect hook to add and remove the event listenser according to the window resize
  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

    return (
      <>
      <style jsx>
      {`
      @media (max-width: 768px){
        .prev, .next{
          width: 11vw;
          color: black;
        }
        .pagination{
          font-size: 12px;
          justify-content: center;
          
        }
      }
      `}  
      </style>

    {/*Pagination */}
    <ReactPaginate 
    className= {`${css.pagination} pagination justify-content-center gap-3 my-4`}
    previousLabel= {width < 546 ? "<<" : "Previous"}
    nextLabel= {width < 546 ? ">>" : "Next"}
    previousClassName= "btn btn-warning prev"
    nextClassName= "btn btn-warning next"
    pageClassName="page-item"
    pageLinkClassName= "page-link"
    activeClassName= "active bg-warning"
    marginPagesDisplayed= {width < 546 ? 1 : 2}
    pageRangeDisplayed=  {width < 546 ? 0 : 2}
    onPageChange={(data) => {setPage(data.selected + 1)}}
    pageCount={info?.pages} />
    </>
  )
}

export default Pages