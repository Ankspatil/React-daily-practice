import React, { useState } from 'react'

const ConditionalRenduring = () => {

const [name, setName] = useState(false)

const changeName =()=>{

            setName(true)
}
const oldone = () =>
{
    if(name === true)
    {
setName(false)
    }
}
  return (
    <div>
        {
            name ? (
            <div> 
                <h1 onClick={oldone}>Welcome Ankit to our Application</h1>
            </div>
            ) :
            <h1 onClick={changeName}>Hello Ankit</h1>
        }
    </div>
  )
}

export default ConditionalRenduring