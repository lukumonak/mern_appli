import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css';
import { useNavigate } from 'react-router-dom';
import Navbr from '../Components/Navbr'
import { useRef } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';




function OrgaRegForm() {
    const navigate = useNavigate();
    const inputRef1 = useRef()
    const inputRef2 = useRef()
    const inputRef3 = useRef()
    const inputRef4 = useRef()
    const inputRef5 = useRef()
    const inputRef6 = useRef()

  const user=useAuthContext()


  if(user.user===null){
    alert('you need to logged in')
   }
   

    const verifyData = async () => {
        const Organization_full_name = inputRef1.current.value
        const Organization_register_number = inputRef2.current.value
        const District = inputRef3.current.value
        const pincode = inputRef4.current.value
        const contect_no = inputRef5.current.value
        const website_link = inputRef6.current.value

        const dataToVerify = { Organization_full_name, Organization_register_number, District, pincode, contect_no, website_link }


        const response = await fetch('http://localhost:4000/api/organization/verify', {
            method: 'POST',
            headers: {
                'Accept': 'Application/json',
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(dataToVerify)
        })
        const json = await response.json()
        console.log(response)
        if (response.ok) {
            alert('data submitted successfully  pending for verification')
            navigate('/ing')
        }

        if (!response.ok) {
            alert('try again')
        }


    }
    return (<>
    <Navbr />

        <div className=" login-body">


            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Organization full name:</Form.Label>
                    <Form.Control type="name" ref={inputRef1} placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Organization register number: </Form.Label>
                    <Form.Control type="type" ref={inputRef2} placeholder="Product type" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>District: </Form.Label>
                    <Form.Control type="waight" ref={inputRef3} placeholder="waight(kg)" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>pincode: </Form.Label>
                    <Form.Control type="pincode" ref={inputRef4} placeholder="postel code" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>contect no: </Form.Label>
                    <Form.Control type="Landmark" ref={inputRef5} placeholder="Landmark" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>website link (optional): </Form.Label>
                    <Form.Control type="Landmark" ref={inputRef6} placeholder="Landmark" />
                </Form.Group>


                <Button className='btn1 mt-4' onClick={verifyData}>verify</Button>
            </Form>
        </div>

        <div>
            <a href="/orgCreatePass">create password</a>
        </div>
    </>
    );
}

export default OrgaRegForm;