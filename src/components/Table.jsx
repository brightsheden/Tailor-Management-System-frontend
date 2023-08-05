/* eslint-disable react/prop-types */


import { Button, Table } from 'flowbite-react';
import EditModal from './Modal';
import {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteOrder } from '../State/Actions/OrderActions';
import { Link } from 'react-router-dom';



export default function TableComponent({orders}) {
  const [openModal, setOpenModal] = useState();
  const [email, setEmail] = useState("");
  const props = { openModal, setOpenModal, email, setEmail };
  const [showModal,setShowModal] =  useState(false)
  //const [selectedOrder, setSelectedOrder] = useState('')
  const dispatch =useDispatch()



  

  const deleteHandler = (id)=>{
    dispatch(deleteOrder(id))
  
  }




  return (
    <div>

      
   
    <Table hoverable>
      <Table.Head>
        <Table.HeadCell>
          Custormer
        </Table.HeadCell>
        <Table.HeadCell>
          Tailor
        </Table.HeadCell>
        <Table.HeadCell>
          Style
        </Table.HeadCell>
        <Table.HeadCell>
          Price
        </Table.HeadCell>

        <Table.HeadCell>
          Is Completed
        </Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">
            Edit
          </span>

        
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
    
        {orders && (
               orders?.map(order => (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={order._id}>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {order.custormer_name}
                </Table.Cell>
                <Table.Cell>
                  {order.tailor_name}
                </Table.Cell>
                <Table.Cell>
                 {order.style_description}
                </Table.Cell>
                <Table.Cell>
                 {order.price}
                </Table.Cell>
                {order.isCompleted ? (<Table.Cell>
                  Done
                </Table.Cell>): (
                  <Table.Cell>
                    Pending
                  </Table.Cell>
                )}
                
                <Table.Cell className='space-x-2'>
             
                   <button className='rounded-md  p-2 border border-blue-500 font-medium text-cyan-600 hover:underline dark:text-cyan-500'>
                    <Link   to={`/companydashboard/orders/edit/${order?._id}`}>Edit</Link>
                   </button>
                
            <button className='text-red-500 font-medium rounded-md p-2 border border-red-500' onClick={()=>deleteHandler(order._id)}>Delete</button>
        
                </Table.Cell>
              </Table.Row>
             
      
              ))
        )}
        
   
        
        
      </Table.Body>
    </Table>
    </div>
  )
}


