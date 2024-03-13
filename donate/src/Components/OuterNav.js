import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Navigate } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout'; 
import { useAuthContext } from '../hooks/useAuthContext';


function OuterNav() {

  const {logout}=useLogout()
  const {user}=useAuthContext()

  const logoutFrom=()=>{
    logout()
  return  <Navigate to="/signup" replace={true} />    

  }
  return (
    <Navbar className="">

      <Container>
        <Navbar.Brand >Donation </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {!user && (
               <div>
               <Link to="/login">login </Link>
               <Link to="/signup">signup</Link>
               </div>
            )}
          </Navbar.Text>
      {user && (<div>
        <span>{user.email}</span>
      <button style={{position:'relative'}} onClick={logoutFrom}>logout</button>
      </div>)}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default OuterNav;