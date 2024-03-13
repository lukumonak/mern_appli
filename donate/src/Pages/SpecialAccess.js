import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Navbr from '../Components/Navbr.js'
import { useAuthContext } from '../hooks/useAuthContext.js';

function SpecialAccess() {

  const baseUrl = 'http://localhost:4000/api/oldThs/';
  const{user}=useAuthContext()


  const [pst, setPst] = useState(null);

  useEffect(() => {

    

    if(user){
      axios.get(baseUrl,{
        headers:{'Authorization':`Bearer ${user.token}`}
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

  return (
    <div>
      <Navbr />
      <Table striped bordered hover>
        <thead>
          <tr>
           
            <th> Name</th>
            <th>Product Type</th>
            <th>Waight (kg)</th>
            <th>Pincode</th>
            <th>Landmark</th>
          </tr>
        </thead>
        <tbody>
          {
            pst.map((item, index) => (

              <>
              {console.log(item)}
                <tr>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.weight}</td>
                  <td>{item.pincode}</td>
                  <td>{item.landmark}</td>
                </tr>

              </>

            ))
          }
        </tbody>
      </Table>
    </div>
  );
}
export default SpecialAccess;