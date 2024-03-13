import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css'
import { useNavigate } from 'react-router-dom';
import OuterNav from '../Components/OuterNav';
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useAuthContext } from '../hooks/useAuthContext';

const Login=()=> {

  const navigate=useNavigate();
  const user=useAuthContext()
  const [email,setemail]=useState('')
  const [password,setPassword]=useState('')
  const {login,isLoading,error}=useLogin()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(email,password)
    await login(email, password)
    if(user){
navigate('/')
    }
  }


  return (
  <>
      <OuterNav />
    <div className=" login-body">

    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setemail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <Button className='btn1 mt-4' type='submit'>login</Button>
      {error && <div className='error'>{error}</div>}
    </Form>

    </div>
  </>
  );
}

export default Login;