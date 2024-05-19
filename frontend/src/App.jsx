import Hospital_request from './Components/hospital_request'
import { Route, Router,Routes} from 'react-router-dom'
import Bloodbank from './Components/bloodbank'
import Donorlist from './Components/donorlist'
import Campaign from './Components/Campaign'
import Blood_accept_form from './Components/blood_accept_form'
function App() {
  

  return (
    <>
    <Routes>
      <Route path='/hospitalrequest' element={<Hospital_request />} /> 
      <Route exact path='/bloodbank' element={<Bloodbank />} >
          <Route exact path='/bloodbank/request' element={<Blood_accept_form/>} />
          <Route exact path='/bloodbank/donor' element={<Donorlist />} />
          <Route exact path='/bloodbank/campaign' element={<Campaign />} />
      </Route>
    </Routes>
    
      
    </>
  )
}

export default App
