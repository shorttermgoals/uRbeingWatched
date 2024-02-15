import './App.css'
import Poster from './components/Poster'

function App() {

  return (
    <>
      <video 
        autoPlay 
        loop 
        muted
        src='video2.mp4' 
        className='video'
      />
      <Poster/>
    </>
  )
}

export default App
