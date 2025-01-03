
import './App.css'
import Signup from '../src/components/Signup'
import Signin from './components/Signin'
import CreateTrip from './components/CreateTrip'
import TripCreated from './components/TripCreated'
import Mytrips from './components/Mytrips'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {


  return (
    <div className='' style={{minHeight:"100vh"}} >
    <BrowserRouter>
       <Routes>
        <Route exact path='/' element={<Signup />}/>
        <Route exact path='/signin' element={<Signin />}/>
        <Route exact path='/create-trip/:email' element={<CreateTrip />}/>
        <Route exact path='/created/:email' element={<TripCreated />}/>
        <Route exact path='/show-trips/:email' element={<Mytrips />}/>
       </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
