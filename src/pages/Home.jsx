import React, { useEffect, useState } from 'react'
import Show from '../components/Show'

const Home = () => {
  const [shows, setShow] = useState(null);
  const sections = [
    {
      name: 'shows',
      title: 'Popular shows airing tonight',
    },
    {
      name: 'season_premieres',
      title: 'Upcoming Season Premieres',
    },
  ]

  useEffect(() => {
    console.log('Home=> calling API ')
    fetch('https://api.tvmaze.com/shows')
      .then(results => results.json())
      .then(data => {
        setShow(data.slice(0, 5));
      });
  },[])

  
  return (
    <div>
    { shows && shows.map(show => ( 
         <Show show={show} key={show.id} />
      ))
    }
    </div>
  )
}

export default Home;