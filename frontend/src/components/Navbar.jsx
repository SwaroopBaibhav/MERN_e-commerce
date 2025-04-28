import React, { useEffect, useState } from 'react'
import {PlusSquareOutlined, SunOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';

function Navbar() {


  return (
    <div className='w-full flex justify-between px-10 py-3 bg-amber-500'>
        <Link to={'/'} className='text-3xl duration-300 hover:scale-110 ease-in-out'>
            Product Store 🛒
        </Link>
        <div className='flex gap-5 text-3xl items-center'>
            <Link to={'/create'} className='duration-300 hover:scale-125 ease-in-out'>
                <PlusSquareOutlined />
            </Link>
            <SunOutlined className='duration-300 hover:scale-125 ease-in-out'/>
        </div>
    </div>
  )
}

export default Navbar