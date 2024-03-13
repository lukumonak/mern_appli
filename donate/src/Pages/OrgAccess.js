import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Navbr from '../Components/Navbr.js'
import { useAuthContext } from '../hooks/useAuthContext.js';

function OrgAccess() {
  const active = localStorage.getItem('active')
  // console.log("active4", !!active) //true

  const baseUrl = 'http://localhost:4000/api/oldThs/all';
    const {user}=useAuthContext();

   

     const buttonClick=(id)=>{
      console.log(id);
     }


  const [pst, setPst] = useState(null);

  useEffect(() => {

    if(user && active==='true'){

        axios.get(baseUrl,{
            headers:{'Authorization':`Bearer ${user.token}`}
        }).then((response) => {
            setPst(response.data)
        });
    }


  }, [user])

  if (!pst) return null;

  console.log(pst);

  const pduct = pst.map(({ name, type }) => {
    return name, type;
  })
  console.log(pst);



  

  return (
    <div>
      <Navbr />
      <table className='table table-hover table-bordered' style={{ fontSize: '13px' }} >
        <thead>
          <tr>
            <th> Name</th>
            <th>Product Type</th>
            <th>Waight (kg)</th>
            <th>Pincode</th>
            <th>Landmark</th>
            <th >PickUp Request</th>
          </tr>
        </thead>
        <tbody>
          {
            pst.map((item, index) => (

              <>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.weight}</td>
                  <td>{item.pincode}</td>
                  <td>{item.landmark}</td>
                  <td >
                    <button  className="py-0 btn btn-primary position-sticky float-right" onClick={()=>buttonClick(item._id)}>Req</button>
                    </td>
                </tr>
              </>


            ))
          }
        </tbody>
      </table>
    </div>
  );
}
export default OrgAccess;