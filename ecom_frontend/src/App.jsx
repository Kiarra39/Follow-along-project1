
import Loginp from './component/authentication/Login.jsx'
import SignupPage from './component/authentication/Signup.jsx';
import {Routes, Route} from 'react-router-dom';
function App(){
return (
  <>
  {/* <SignupPage/> */}
  <Routes>
    <Route path ="/" element ={<h1> Hello World</h1>}/>
    <Route path="/signup" element={<SignupPage/>}/>
    <Route path ="/login" element ={<Loginp />}/>
  </Routes>
  </>
)
}

export default App;
