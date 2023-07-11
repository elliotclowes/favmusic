import React, {useState} from 'react'
import Song from './components/Song/index.jsx';
import Details from './components/Details/index.jsx'
import Discography from './components/Discography/index.jsx'
import Tour from './components/Tour/index.jsx'
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
