import React from 'react'

const Button = ({name, index, items, x, setPage}) => {
  return (
    <>
     {/*Using CSS-in-JS library*/}
    <style jsx>
        {`
          //Styling the radio button when they are checked
          .form-check-input:checked + label{
            background-color: #FFBF00;
            color: white;
          }
          //Styling the radio buttons when they are unchecked
          input[type="radio"] {
            display: none;
          }
        `}
    </style>
    <div className="form-check">
    <input 
    //When the radio button is clicked, the first page is displayed and function x is called
    onClick={() =>{
      setPage(1);
      x(items);
    }}
    className="form-check-input" type="radio" name={name} id={`${name}-${index}`} />

    <label className="btn btn-outline-warning" for={`${name}-${index}`}>
    {items}
    </label>
    </div>
    </>
  )
}

export default Button
