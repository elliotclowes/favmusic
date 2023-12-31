import React, {useState} from 'react'
import { Song, Details, Discography, Tour } from './components'
import './index.css'

function App() {
    const [inputText, setInputText] = useState('')
    const [inputDate, setInputDate] = useState('')
    const [submitValue, setSubmitValue] = useState('')

    return (
    <>
      <Details />
      <Tour inputText={inputText} setInputText={setInputText} inputDate={inputDate} setInputDate={setInputDate} submitValue={submitValue} setSubmitValue={setSubmitValue}/>
      <Song />
      <Discography />
    </>
    )
}

export default App;
