import { createContext, useContext, useEffect, useState } from "react";



export const messageContext = createContext()

const MessageContextProvider = ({ children }) =>{
    const [url, setUrl] = useState('https://js2-ecommerce-api.vercel.app/api/messages')
    const [messageSuccess, setMessageSuccess] = useState(false)


    
        const postData = async (postMessage) => {
            try {
                const res = await fetch('https://js2-ecommerce-api.vercel.app/api/messages',{
                    method: 'POST',
                    headers:{
                        'Content-type':'application/json'
                    },
                    body:JSON.stringify(postMessage)
                })
                if(!res.ok){
                    throw new Error(res.status,res.statusText)
                }
                const data = await res.json()
                console.log(data)
            } catch (error) {
                console.log(error)
            }
            setMessageSuccess(true)
            postMessage = ''
        }

        

    const value = {
    postData,
    messageSuccess,
    setMessageSuccess
    }

    return (
        <messageContext.Provider value={value}>
            {children}
        </messageContext.Provider>
    )
}

export default MessageContextProvider

export const useMessageContext = () => {
const context = useContext(messageContext)

if(!context){
    throw new Error('useMessageContext must be within a provider')
}
return context
}