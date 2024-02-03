import React from 'react'

export const Footer = () => {
  return (
    <>
     <footer className='w-full py-7 bg-gray-50 flex justify-center border'>
        <div className='scale-150 flex gap-5 cursor-pointer my-10'>
          <i className="text-blue-500 scale-150 fa-brands fa-facebook"></i>
          <i className="scale-150 fa-brands fa-square-x-twitter"></i>
          <i  i className="text-red-700 scale-150 fa-brands fa-instagram"></i>
          <small>Visit us in our social media!</small>
        </div>
    </footer>
    </>
  )
}
