
import './App.css';

import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import LoginUser from './pages/login';
import UserUI from './pages/userInterface';
import Admin from './pages/admin';
import Error from './components/error';
import History from './pages/history';

function App() {
 

const [userDetails,setUserDetails]=useState({
  user:JSON.parse(sessionStorage.getItem("user")),
  token:sessionStorage.getItem("token")
})
// console.log(userDetails);
const isAuth=Boolean(userDetails.token);
  return (
    <div className="App">
     
       <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginUser setUserDetails={setUserDetails}/>}/>
        <Route path="/" element={isAuth?<UserUI setUserDetails={setUserDetails} userDetails={userDetails}/>:<Navigate to ="/login"/>}/>
        <Route path="/error" element={<Error/>}/>
        <Route path="/admin" element={(isAuth&&userDetails.user.is_Admin)?<Admin setUserDetails={setUserDetails} userDetails={userDetails}/>:<Navigate to= "/login"/>}/>
        <Route path="/history" element={isAuth?<History setUserDetails={setUserDetails} userDetails={userDetails}/>:<Navigate to= "/login"/>}/>

      </Routes>
    </BrowserRouter>
      
     
      
    </div>
  );
}

export default App;
