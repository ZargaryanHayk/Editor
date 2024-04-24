import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BarText from './BarText'
import Upload from './Upload'
import SelectColor from './SelectColorOfDress'
// import Move from './Move'

function App() {
  const [path, setPath] = useState()

  const choies = useCallback((ch)=>{
    console.log('working')
    setPath(ch)
  }, [path])
  return (

    // <Move />
   <div className='flex  items-center justify-center'>
        <div className='text-center'>
            <BarText  />
            <SelectColor ch={choies}/>
            <Upload p={path}/>

        </div>
   </div>
  )
}

export default App
