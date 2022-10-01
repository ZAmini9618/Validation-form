import SingUp from "./components/SingUp/singUp";
import Login from "./components/Login/login";
import { Route,Routes,Navigate } from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
      <Route path='/singup' element={<SingUp/>}/>
      <Route path='/login' element={ <Login />}/>
      <Route path='/' element={<Navigate to='/singup'/>}/>
    </Routes>
    </>
  );
}

export default App;
