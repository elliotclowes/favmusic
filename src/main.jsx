import React from 'react'
import ReactDOM from 'react-dom';
import Song from './Song.jsx';
import Details from './Details.jsx'
import Discography from './Discography.jsx'
import Tour from './Tour.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Details />
      <Tour />
      <Song />
      <Discography />
    </>
  </React.StrictMode>,
)
