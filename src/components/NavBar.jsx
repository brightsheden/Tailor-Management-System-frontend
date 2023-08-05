

import { Dropdown, Navbar,Avatar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';



export default function NavBar() {
  return (
    <>
    <Navbar
      fluid
      rounded
      className='px-0'
    >
      <Navbar.Brand >
        
        <span className="self-center whitespace-nowrap text-xl font-bold mr-2 dark:text-white">
            TailorShorp
        </span>

        <div className='hidden md:space-x-2 md:block md:text-sm md:font-bold md:text-gray-500 '>
            <NavLink >New Order+</NavLink>
            <NavLink>New Services+</NavLink>

        </div>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={<Avatar  alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Bonnie Green
            </span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item>
            Settings
          </Dropdown.Item>
          <Dropdown.Item>
            Earnings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className='md:hidden'>
        <Navbar.Link
          active
          href="#"
        >
          <p>
            New work+
          </p>
        </Navbar.Link>

        <Navbar.Link
         
          href="#"
        >
          <p>
            New Services
          </p>
        </Navbar.Link>
       
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}


