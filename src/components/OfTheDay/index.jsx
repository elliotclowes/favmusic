import React, { useState, useEffect } from 'react';

function OfTheDay() {
  const [title, setTitle] = useState(localStorage.getItem('title') || '');

  const fetchTitle = () => {
    fetch('https://api.discogs.com/artists/255411/releases?page=0&per_page=500')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.releases.length);
        const nameTitle = data.releases[randomIndex].title;
        const year = data.releases[randomIndex].year;
        const newTitle = `(${year}) ${nameTitle}`
        setTitle(newTitle);
        localStorage.setItem('title', newTitle);
      });
  }

  useEffect(() => {
    const now = new Date();
    const delay = ((60 - now.getSeconds()) % 60) * 1000;
  
    if (!title) {
      fetchTitle();
    }
  
    const intervalId = setInterval(fetchTitle, 60 * 1000);
  
    const timeoutId = setTimeout(() => {
      setInterval(fetchTitle, 60 * 1000);
    }, delay);
  
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    }
  }, []);
  

  return (
    <div className="OfTheHour">
      <h3>Album of the Hour: {title}</h3>
    </div>
  );
}

export default OfTheDay;
