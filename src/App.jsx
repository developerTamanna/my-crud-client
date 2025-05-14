
import User from '../components/User'
import './App.css'

const userPromise = fetch('http://localhost:3000/user').then(res=> res.json());

function App() {


  return (
   <>
   <h1 className='text-3xl font-bold text-center'>simple crud project database</h1>
   <div className='mt-20'>
    <User userPromise={userPromise}></User>
   </div>
   </>
  )
}

export default App
