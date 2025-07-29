import React, { useState } from 'react'

const Home = () => {
    const [Counter , setCounter] = useState(0)

    console.log(Counter)


    const x = "fahd Mohamed"

    const cls = "test2"


    function inc(){
        setCounter(Counter+1)
    }





  return (
    <div className={`padding ${cls}`}>  
    <i className='fa-solid fa-spinner fa-spin fa-7x'></i> 
      <h1 className='bg-danger'>Hi ya {x}</h1>
      <h2>Counter : {Counter}</h2>
      <button onClick={inc}>click</button>
    </div>
  )
}

export default Home