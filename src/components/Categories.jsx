import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Categories = () => {
  return (
    <div className='flex justify-center flex-wrap m-6 border bg-stone-50'>
    <ul className='font-bold flex flex-cols text-center gap-3'>
        <div className=' cursor-pointer border p-3 bg-slate-100 hover:bg-slate-50 transition-colors'>
            <li><NavLink className='[&.active]:underline m-4' to="/"><i className="fa-solid fa-laptop scale-125"></i></NavLink></li>
            <Link>Computer</Link>
        </div>
            <div className='border cursor-pointer p-3 bg-slate-100 hover:bg-slate-50 transition-colors'>
            <li><NavLink className='[&.active]:underline m-4' to="/contact"><i className="fa-solid fa-mobile scale-125"></i></NavLink></li>
            <Link>Mobile</Link>
            </div>
            <div className='border p-3 cursor-pointer bg-slate-100 hover:bg-slate-50 transition-colors'>
            <li><NavLink className='[&.active]:underline m-4' to="auth/login"><i className="fa-solid fa-kitchen-set scale-125"></i></NavLink></li>
            <Link>Home</Link>
            </div>
            <div className='border p-3 cursor-pointer bg-slate-100 hover:bg-slate-50 transition-colors'>
            <li><NavLink className='[&.active]:underline m-4' to="auth/register"><i className="fa-solid fa-tv scale-125"></i></NavLink></li>
            <Link>Tv</Link>
            </div>
        </ul>
    <div>
    </div>


    </div>
  )
}
