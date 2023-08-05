
import { Button, Sidebar } from 'flowbite-react';
import { HiChartPie, HiShoppingBag, HiLogout, HiUser,  } from 'react-icons/hi';
import {FaImages,FaUserFriends} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';
import {resetUsereState} from '../State/Slices/UserSlice'

function SideBar() {
  const dispatch=useDispatch()

  const logoutHandler = ()=>{
    dispatch(resetUsereState())
  }
  return (
    <>
      <Sidebar aria-label="Sidebar with multi-level dropdown example" >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="#"
            icon={HiChartPie}
          >
            <p>
              Dashboard
            </p>
          </Sidebar.Item>
          <Sidebar.Collapse
            icon={HiShoppingBag}
            label="E-commerce"
          >
            <Sidebar.Item href="#">
              Products
            </Sidebar.Item>
            <Sidebar.Item href="#">
              Sales
            </Sidebar.Item>
            <Sidebar.Item href="#">
              Refunds
            </Sidebar.Item>
            <Sidebar.Item href="#">
              Shipping
            </Sidebar.Item>
          </Sidebar.Collapse>
        <Link to='/companydashboard/orders'>
        <Sidebar.Item
           
           icon={HiShoppingBag}
         >
           <p>
             Orders
           </p>
         </Sidebar.Item>

        </Link>


        <NavLink to='/companydashboard/tailors'>
        <Sidebar.Item
           
           icon={HiUser}
         >
           <p>
             Tailors
           </p>
         </Sidebar.Item>
        </NavLink>
        

        <NavLink to='/companydashboard/styles'>
        <Sidebar.Item
         
         icon={FaImages}
       >
         <p>
           Styles
         </p>
       </Sidebar.Item>   

        </NavLink>
  

          <Link to='/companydashboard/customers'>
          <Sidebar.Item
         
            icon={FaUserFriends}
          >
            <p>
              Customers
            </p>
          </Sidebar.Item>   
          </Link>

          <Sidebar.Item
            onClick={logoutHandler}
            
            icon={HiLogout}
          >
            <button className='w-full border border-black p-0'  onClick={logoutHandler}>
              Log out
            </button>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>




    </>
  )
}
import { useDispatch } from 'react-redux';

export default SideBar