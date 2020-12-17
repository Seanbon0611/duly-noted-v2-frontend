import React from 'react'
import { ReactComponent as Logo } from '../assets/notebook.svg'

const Header = () => {
  return (
    <div className='flex justify-between px-10'>
      <div className='flex items-center'>
        <Logo className='w-24'/>
        <p>Duly-noted</p>
      </div>
      <div>
        <ul>
          <li>Nav item</li>
          <li>Nav Item</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;