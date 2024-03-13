import {useState} from 'react'
import { useAuthContext } from './useAuthContext'
import jwtDecode from 'jwt-decode'

export const useLogin=()=>{
    const[error, setError]=useState(null)
    const[isLoading, setIsLoading]=useState(null)
    const {dispatch}=useAuthContext()


    const login=async(email, password, role, active)=>{
        setIsLoading(true)
        setError(null)

        const response=await fetch('http://localhost:4000/api/user/login',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({email,password, role, active})
        })

        const json=await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json))
            // localStorage.setItem('role',JSON.stringify(json))
            // console.log('user',JSON.stringify(json));

            dispatch({type: 'LOGIN',payload:json})
            setIsLoading(false)
            console.log(JSON.stringify(json))
            const parseToken=JSON.parse(JSON.stringify(json))
            console.log(parseToken);
            const token=parseToken.token
            console.log(token);
            const tokenObj=jwtDecode(token)
            // const parseTokenObj=JSON.parse(tokenObj)
            // const rolefromDB=parseTokenObj.role
            console.log(tokenObj.role)
            console.log(tokenObj.active)
            localStorage.setItem('role',tokenObj.role)
            localStorage.setItem('active',tokenObj.active)
        }



    }
    return{ login, isLoading, error}
}