import './App.css';
import TopBar from '../src/Components/topbar/TopBar';
import Home from './pages/home/Home'
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  const user = true;
  return (
    <div className="App">
    <BrowserRouter>
      <TopBar />

        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>

        <Routes>
          <Route path='/register' 
          element={user ? <Home /> : <Register />} />
        </Routes>

        <Routes>
          <Route path='/login' 
          element={user ? <Home /> : <Login />}/>
        </Routes>

        <Routes>
          <Route path='/write' 
          element={user ? <Write /> : <Register />}/>
        </Routes>

        <Routes>
          <Route path='/settings' 
          element={user ? <Settings /> : <Register />}/>
        </Routes>

        <Routes>
          <Route path='/page/:id' element={<Single />}/>
        </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
