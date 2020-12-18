import { ReactComponent as Logo } from '../assets/notebook.svg'

const Header = () => {
  return (
    <div className='flex items-center justify-between h-24 px-10 bg-blue-400'>
      <div className='flex items-center'>
        <Logo className="w-16"/>
        <p className="pl-2 text-3xl satisfy">Duly-noted</p>
        <div className='pl-5'>
        <ul className="flex">
          <li className='pr-3 cursor-pointer'>About</li>
          <li>Contact</li>
        </ul>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Header;