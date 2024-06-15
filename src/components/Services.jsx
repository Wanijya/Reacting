import React, { useEffect, useState } from 'react'

const Services = () => {
    const [first, setfirst] = useState("this is a normal data");
    const [second, setsecond] = useState("this is a very large data");

    useEffect(()=>{
        console.log("Service Com. created")
        return () =>{
            console.log("Service com. is Deleted!!")
        }
    }, [second])

  return (
    <div>
        <h1>{first}</h1>
        <button onClick={()=> setfirst("Change Normal Data")} className="px-3 py-1 rounded-md bg-red-300 mb-5">Change Normal Data</button>
        <h1>{second}</h1>
        <button onClick={()=> setsecond("Change Large Data")} className="px-3 py-1 rounded-md bg-blue-300">Change Large Data</button>
    </div>
  )
}

export default Services