import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterUserContext = createContext();

const RegisterUserContextProvider = ({ children }) => {
    
    let navigate = useNavigate()

    const [token, setToken] = useState(null)
    const [userExist, setUserExist] = useState(false)

    const registerUser = async (newUser) => {
        try {
            const res = await fetch('http://localhost:9999/api/register',{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(newUser)
            })
            console.log(res)
    
            const data = await res.json()
            console.log(data)
            if(res.status!== 201){
                throw new Error(data.message)
            }
            navigate('/auth/private/' + data.token);
        } catch (error) {
            return { error: error.message}
        }


    }



  const value = {
    registerUser,
    userExist
  };

  return (
    <RegisterUserContext.Provider value={value}>
      {children}
    </RegisterUserContext.Provider>
  );
};

export default RegisterUserContextProvider;

export const useRegisterUserContext = () => {
    const context = useContext(RegisterUserContext)

    if(!context){
        throw new Error('useRegisterUserContext must be within a provider')
    }

    return context
}