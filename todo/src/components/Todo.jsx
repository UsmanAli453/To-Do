import React, { useState } from 'react'
import "./Todo.css"

function Todo() {
  const [input, setInput] = useState()
  const [result, setResult] = useState([])

  const func = () => {
    setResult((oldItems) => {
      return [...oldItems, input]
    })
    setInput("")
  }

  const remove = (indexToRemove) => {
    // Create a new array without the item at the specified index
    const updatedResult = result.filter((_, index) => index !== indexToRemove);

    // Update the state with the new array
    setResult(updatedResult);
  };
  return (
    <>
      <div className="parent">
        <div className="main">
          <div className="heading"><h1>ToDo List</h1></div>
          <div className="input-field"><input className='input' type="text" value={input} placeholder='Add an Item' onChange={(event) => { setInput(event.target.value) }} />
            <button className='button' onClick={func}>+</button>
          </div>
          {result.map((item, index) => {
            return (
              <div className="result" key={index} id={index}>
                <button className='button2' onClick={() => remove(index)} >x</button>
                {item}
              </div>
            );
          })}



        </div>
      </div>
    </>
  )
}

export default Todo
