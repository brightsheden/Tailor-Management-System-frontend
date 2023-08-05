import { Link } from "react-router-dom";
import SearchFilter from "../components/SearchFilter";
import { Table } from 'flowbite-react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Loader from '../components/Loader'
import { deleteCustomer, listCustomers } from "../State/Actions/CustomerActions";
import { deleteTailor } from "../State/Actions/TailorActions";
import { resetCustomerDeleteState } from "../State/Slices/CustomerSlice";








function Customers() {
  const customerr = useSelector((state)=> state.customer)
  const {isRequest, isSuccess, data:customers} = customerr

    const customerDelete = useSelector((state)=> state.deleteCustomer)
    const {CustomerDeleteRequest, CustomerDeleteSuccess} = customerDelete
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(listCustomers())

  //  if(CustomerDeleteSuccess){
  //    dispatch(resetCustomerDeleteState())
  //  }
  },[CustomerDeleteSuccess,dispatch])

  const deleteHandler = (id)=>{
    dispatch(deleteCustomer(id))
  
  }

  return (
    <div className='overflow-scroll'>
       <h2 className="text-2xl font-bold">Customers</h2>
       <div className="flex justify-between my-5">
          <SearchFilter/>

          <Link to='/companydashboard/Customers/create/'>
          <button className="bg-black text-white p-2 text-sm rounded-lg font-semibold">Register New Customer</button>
          </Link>
         

       </div>
      

        <Table hoverable>
      <Table.Head>
        <Table.HeadCell>
          name
        </Table.HeadCell>
        <Table.HeadCell>
          email
        </Table.HeadCell>

        <Table.HeadCell>
          Phone
        </Table.HeadCell>

        <Table.HeadCell>
          wallet
        </Table.HeadCell>
        <Table.HeadCell>
          Total-Order
        </Table.HeadCell>

        <Table.HeadCell>
          CraetedAt
        </Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">
            Edit
          </span>
        </Table.HeadCell>

      </Table.Head>
      <Table.Body className="divide-y">
        {isRequest? (<Loader/>):
        
        ( customers?.map(customer=>(
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={customer.id}>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {customer.name}
          </Table.Cell>
          <Table.Cell>
            {customer.email}
          </Table.Cell>

          <Table.Cell>
            {customer.phone}
          </Table.Cell>
          <Table.Cell>
            {customer.wallet}
          </Table.Cell>
          <Table.Cell>
            {customer.total_order}
          </Table.Cell>

          <Table.Cell>
           {customer.createdAt}
          </Table.Cell>

          <Table.Cell>
           
          <button className='rounded-md  p-2 border border-blue-500 font-medium text-cyan-600 hover:underline dark:text-cyan-500'>
                    <Link   to={`/companydashboard/Customers/edit/${customer?._id}`}>Edit</Link>
                   </button>

                   {CustomerDeleteRequest? (<Loader/>):
                   <button className='text-red-500 font-medium rounded-md p-2 border border-red-500' onClick={()=>deleteHandler(customer._id)}>Delete</button>

                   }

                 

           
          </Table.Cell>
        </Table.Row>
       )))}
       
       
       
      </Table.Body>
    </Table>
    </div>
  )
}

export default Customers
