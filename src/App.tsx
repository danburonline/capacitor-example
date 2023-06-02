import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Geolocation } from '@capacitor/geolocation'

function App() {
  const [count, setCount] = useState(0)
  const [gps, setGps] = useState('')

  const printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition()

    setGps(coordinates.coords.latitude + ' ' + coordinates.coords.longitude)
  }

  function getWeatherData() {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=London&appid=9c4b0b0b0b0b0b0b0b0b0b0b0b0b0b0b'
    )
      .then((response) => response.json())
      .then((data) => console.log(data.message))
  }

  useEffect(() => {
    printCurrentPosition()
    getWeatherData()
  }, [])

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Hello Laura</h1>
      <h2>{gps}</h2>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
