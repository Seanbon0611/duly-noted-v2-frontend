import React from 'react'
import { ReactComponent as Logo } from '../assets/notebook.svg'

const Header = () => {
  return (
    <div className='flex items-center justify-between h-24 px-10 bg-blue-400'>
      <div className='flex items-center'>
        <Logo className="w-16"/>
        <p className="pl-2 text-3xl satisfy">Duly-noted</p>
      </div>
      <div>
        <ul className="flex">
          <li className='pr-2'>Nav item</li>
          <li>Nav Item</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;