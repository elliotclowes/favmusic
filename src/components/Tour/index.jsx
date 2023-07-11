export default function Tour ({inputText, setInputText, inputDate, setInputDate, submitValue, setSubmitValue}) {

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
        <h2>Add Tour Dates</h2>
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
