import React,{useState} from 'react'

const Price = (value) => {
    const[val,setVal]=useState(0);
    setVal(value*499);
  return (
    <>
        <div>$ {val}</div>
    </>
  )
}

export default Price;
