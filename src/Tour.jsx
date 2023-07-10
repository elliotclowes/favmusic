import React, { useState } from "react"

export default function Tour () {
  const [inputText, setInputText] = useState('')
  const [inputDate, setInputDate] = useState('')
  const [submitValue, setSubmitValue] = useState('')

  const handleInput = (e) => {
    setInputText(e.target.value)
  }

  const handleDate = (e) => {
    setInputDate(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitValue(`${inputText} / ${inputDate}`)
  }

  return (
    <>
      <div>
        <h2>Add Tour</h2>
        {submitValue}
          <form onSubmit={handleSubmit}>
            <input onChange={handleInput} type="text" placeholder="Location"/>
            <input onChange={handleDate} type="text" placeholder="Date"/>
            <button type="submit">Add</button>
          </form>
      </div>
    </>
  )
}
