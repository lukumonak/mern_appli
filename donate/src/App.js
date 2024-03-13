import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import NeedHelp from './Pages/NeedHelp';
import Publication from './Pages/Publication';
import Donate from './Pages/Donate';
import SupportUs from './Pages/SupportUs';
import Login from './Pages/Login';
import SpecialAccess from './Pages/SpecialAccess';
import Signup from './Pages/Signup';
import OuterNav from './Components/OuterNav';
import AdminPanel from './Pages/AdminPanel';
import OrgAccess from './Pages/OrgAccess';
import OrgaRegForm from './Pages/OrgaRegForm';
import Panding from './Pages/Panding';
import { useAuthContext } from './hooks/useAuthContext';
import Fmessage from './Pages/Fpage/Fmessage';


function App() {
  const user = useAuthContext()
  console.log('!user', user.user)


  return (
    <BrowserRouter>

      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route path='/aboutus' element={<AboutUs />}></Route>
        <Route path='/help' element={<NeedHelp />}></Route>
        <Route path='/publication' element={<Publication />}></Route>
        <Route path='/support' element={<SupportUs />}></Route>
        <Route path='/fmessage' element={<Fmessage />}></Route>
        <Route exact path='/login' element={<Login />}></Route>


        {user.user === null ? (
          <>

            <Route
              path='/donate'
              element={<Navigate to='/fmessage' state={{ from: '/donate' }} />}
            />
            <Route
              path='/signuporg'
              element={<Navigate to='/fmessage' state={{ from: '/signuporg' }} />}
            />



          </>
        ) : (
          <>

            <Route path='/donate' element={<Donate />} />
            <Route path='/signuporg' element={<OrgaRegForm />} />

          </>
        )}

        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/access' element={<SpecialAccess />}></Route>
        <Route path='/admin' element={<AdminPanel />}></Route>
        <Route path='/org' element={<OrgAccess />}></Route>
        <Route path='/ing' element={<Panding />}></Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;


//role based authorization