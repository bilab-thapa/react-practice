import React, { useState, useEffect } from 'react'


const Effect = () => {
    const[count, setCount] = useState(0)
    const[compare, setCompare] = useState(0)
    const[letter,setLetter] = useState('Increament')
    function inc(){
        setCount(count+1)
    }

    function dec(){
        setCount(count-1)
    }

    useEffect(()=>{
console.log("First Time Loading")
    },[])

    useEffect(()=>{
        if(count>compare){
            console.log("Increament")
            setCompare(count)
            setLetter("Increament")
            console.log(compare)
        } else {
            console.log("Decreament")
            setCompare(count)
            setLetter("Decreament")
            console.log(compare)
        }
        
    },[count])
    
  return (
    <div>
      <h1>{count}</h1>
      <h3>{letter}</h3>
      <button  onClick={dec}>-</button>
      <button onClick={inc}>+</button>

    </div>
  )
}

export default Effect
