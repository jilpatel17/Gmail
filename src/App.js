import React, { } from 'react';
import { BrowserRouter, Route, Routes ,Navigate} from 'react-router-dom'
import './App.css';
import E404 from './screens/404/E404';
import Login from './screens/login/Login';
import Register from './screens/register/Register';




function App() {


  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/error-404' element={<E404 />}></Route>
          <Route
            path="*"
            element={<Navigate to="/error-404" replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
