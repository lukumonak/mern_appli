import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css'
import OuterNav from '../Components/OuterNav';
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import { useNavigate } from 'react-router-dom';

function OrgnizationSignup() {

const [email,setemail]=useState('')
const [password,setPassword]=useState('')
const {signup,isloading,error}=useSignup()
const navigate=useNavigate();

 const orgnizationSignupClick=async()=>{
    await signup(email,password)
    console.log(email,password)
    navigate('/login')
 }

    return (
        <>
        <OuterNav />
        <div className=" login-body">

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setemail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Create a Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                </Form.Group>
                <Button className='btn1 mt-4' onClick={orgnizationSignupClick} disabled={isloading} >Sign-up</Button>
                {error && <div className='error'>{error}</div>}
            </Form>
        </div>
        </>
    );
}
export default OrgnizationSignup;