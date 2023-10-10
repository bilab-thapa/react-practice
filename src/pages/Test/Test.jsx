import React, { useState } from 'react'
import Button from '../../components/Button/Button';

const Test = () => {
    const[chauchau, setChauchau] = useState(10)
    function increament(){
        setChauchau(chauchau+1)
    }

    function decreament(){
        setChauchau(chauchau-1)
    }
  return (
    <div>
      <h1>{chauchau}</h1>
      <button onClick={
        increament
      }>
        Add Chauchau
      </button>
    </div>
  )
}

export default Test
