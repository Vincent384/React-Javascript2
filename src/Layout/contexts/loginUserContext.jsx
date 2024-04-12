import React, { createContext,useContext,useState } from 'react'




export const LoginUserContext = createContext()

const LoginUserContextProvider = ({ children }) =>{

    const [token, setToken] = useState(null)

    const loginUser = async(user)=>{
        try {
            const res = await fetch('http://localhost:9999/api/login',{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(user)
            })
            console.log(res)
            const data = await res.json()
            console.log(data)
            if(res.status !== 200){
                throw new Error(data.message)
            }
            setToken(data.token)
            navigete('/' + data.token)
        } catch (error) {
            return { error: error.message }
        }
    }

    const value = {
        loginUser,
        token
    }

    return ( 
        <LoginUserContext.Provider value={value}>
            {children}
        </LoginUserContext.Provider>
    )
}

export default LoginUserContextProvider

export const useLoginUserContext = () =>{
    const context = useContext(LoginUserContext)

    if(!context)
    throw new Error('useLoginUserContext must be within a provider')

    return context
}