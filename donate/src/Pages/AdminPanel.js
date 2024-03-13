import axios from 'axios'
import { IoIosNotifications } from "react-icons/io";
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';
import './adminPanel.css'
import { useAuthContext } from '../hooks/useAuthContext.js';
import Button from 'react-bootstrap/esm/Button.js';

function AdminPanel() {
    const role = localStorage.getItem('role')
    console.log("2role", role)
    const baseUrl = 'http://localhost:4000/api/organization/';
    const { user } = useAuthContext()
    console.log('role')
    const [pst, setPst] = useState(null);
    useEffect(() => {

        if (user && role === 'ADMIN') {
            axios.get(baseUrl, {
                headers: { 'Authorization': `Bearer ${user.token}` }
            }).then((response) => {
                setPst(response.data)
            });
        }



    }, [user])
    if (!pst) return null;
    console.log(pst.name);
    const pduct = pst.map(({ name, type }) => {
        return name, type;
    })



    // function grantPermission(userId) {
        // localStorage.setItem({ 'active': 'true' })
    // }

    
    
    const buttonClick=(id)=>{
        const cng_permissionURL=`http://localhost:4000/api/user/permission/${id}`
        console.log(cng_permissionURL);

        if(role==='ADMIN'){
            axios.patch(cng_permissionURL,{
                active:false
            }).then(respone=>console.log(respone.data))
            .catch(error=>console.log(error))

        }
       }


    return (
        <>
            <div className='heading'>
                <div className='heading_1'>Admin panel</div>
                <div className='heading_2'><IoIosNotifications /></div>
            </div>
            <div className='main_b'>
                <div className='main' id='c1'>
                    <h1>12</h1>
                    <h6>No of varified organization</h6>
                </div>
                <div className='main' id='c2'><h1>12</h1>
                    <h6>No of varified organization</h6></div>
                <div className='main' id='c3'><h1>12</h1>
                    <h6>No of varified organization</h6></div>
                <div className='main' id='c4'><h1>12</h1>
                    <h6>No of varified organization</h6></div>
            </div><br /><br /><br /><br />

            <div className='div_req'>
                <h3>Verification Request</h3>
            </div>

            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Organization Name</th>
                            <th>Organization register number</th>
                            <th>District (kg)</th>
                            <th>Pincode</th>
                            <th>contect no</th>
                            <th>Website link</th>
                            <th>Access </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pst.map((item, index) => (
                                <>
                                    {console.log(item)}
                                    <tr>
                                        <td>{item.Organization_full_name}</td>
                                        <td>{item.Organization_register_number}</td>
                                        <td>{item.District}</td>
                                        <td>{item.pincode}</td>
                                        <td>{item.contect_no}</td>
                                        {/* <td>{item.website_link}</td> */}
                                        <td><Button  className="py-0" variant="danger"  size='sm' onClick={()=>buttonClick('65eff7abe814e7f0f1b2e163')}>Request</Button></td>

                                    </tr>
                                </>
                            ))
                        }
                    </tbody>
                </Table>
            </div>



        </>
    );
}

export default AdminPanel;