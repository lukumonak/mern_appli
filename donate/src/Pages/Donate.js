import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css';
import Navbr from '../Components/Navbr'
import { useRef } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

function Donate() {

  const inputRef1= useRef()
  const inputRef2= useRef()
  const inputRef3= useRef()
  const inputRef4= useRef()
  const inputRef5= useRef()

  const navigate=useNavigate()
  
  const user=useAuthContext()
  
   const submitForm=async()=>{
    console.log("form submited")
   var name=inputRef1.current.value
   var type=inputRef2.current.value
   var weight=inputRef3.current.value
   var pincode=inputRef4.current.value
   var landmark=inputRef5.current.value

   const productData={name,type,weight,pincode,landmark}
   console.log(productData)
   
   console.log(user)
   

   if(user.user===null){
    alert('you need to logged in')
   }
   
   
    const response=await fetch('http://localhost:4000/api/oldThs/',{
    method:'POST',
    headers:{
      'Accept':'Application/json',
      'Content-Type':'Application/json',
      'Authorization':`Bearer ${user.user.token}`
    },
    body:JSON.stringify(productData)
   })
   const json=await response.json()

   if(response.ok){
    alert("submited")
    navigate('/access')
   }
   if(!response.ok){
    alert.error("there is an problem");
   }

  }
   


  return (<>

    <Navbr />
    <div>{}</div>
    <div className=" login-body">


      <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your good Name:</Form.Label>
          <Form.Control type="name" ref={inputRef1} placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Donate product type: </Form.Label>
          <Form.Control type="type" ref={inputRef2} placeholder="Product type"  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Donate product approx waight: </Form.Label>
          <Form.Control type="waight" ref={inputRef3} placeholder="waight(kg)" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>pincode: </Form.Label>
          <Form.Control type="pincode" ref={inputRef4} placeholder="postel code" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Local Area landmark: </Form.Label>
          <Form.Control type="Landmark" ref={inputRef5} placeholder="Landmark" />
        </Form.Group>

        <Button className='btn1 mt-4' onClick={submitForm}>submit</Button>
      </Form>
      <di>{user.token}</di>
    </div>
  </>
  );
}

export default Donate;