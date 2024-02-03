import React from 'react'

export const AuthLogin = ({errorMsg,type,label}) => {
  return (
    <div className=''>
        <form className=''>
            <div className=''>
                <label  htmlFor="firstName">{label}</label>
                <input className='border w-full mt-2 rounded-md py-1' type={type} />
                {<p className='text-red-600 mb-2'>{errorMsg}</p>}
            </div>
        </form>
    </div>
  )
}
