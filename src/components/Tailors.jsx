import { Link } from "react-router-dom";
import SearchFilter from "./SearchFilter"
import { Table } from 'flowbite-react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteTailor, listTailors } from "../State/Actions/TailorActions";
import Loader from '../components/Loader'








function Tailors() {
  const tailor = useSelector((state)=> state.tailor)
  const {isRequest:tailorRequest , isSuccess:tailorSuccess, data:tailors} = tailor
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(listTailors())
  },[])

  const deleteHandler = (id)=>{
    dispatch(deleteTailor(id))
  
  }

  return (
    <div className='overflow-scroll'>
       <h2 className="text-2xl font-bold">Tailors</h2>
       <div className="flex justify-between my-5">
          <SearchFilter/>

          <Link to='/companydashboard/tailors/create/'>
          <button className="bg-black text-white p-2 text-sm rounded-lg font-semibold">Register New Tailor</button>
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
          wallet
        </Table.HeadCell>
        <Table.HeadCell>
          Total-Work
        </Table.HeadCell>

        <Table.HeadCell>
          Total Pending Work
        </Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">
            Edit
          </span>
        </Table.HeadCell>

      </Table.Head>
      <Table.Body className="divide-y">
        {tailorRequest? (<Loader/>):
        
        ( tailors?.map(tailor=>(
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={tailor.id}>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {tailor.name}
          </Table.Cell>
          <Table.Cell>
            {tailor.email}
          </Table.Cell>
          <Table.Cell>
            {tailor.wallet}
          </Table.Cell>
          <Table.Cell>
            {tailor.total_pending_work}
          </Table.Cell>

          <Table.Cell>
           {tailor.total_work}
          </Table.Cell>

          <Table.Cell>
           
          <button className='rounded-md  p-2 border border-blue-500 font-medium text-cyan-600 hover:underline dark:text-cyan-500'>
                    <Link   to={`/companydashboard/tailors/edit/${tailor?._id}`}>Edit</Link>
                   </button>

                   <button className='text-red-500 font-medium rounded-md p-2 border border-red-500' onClick={()=>deleteHandler(tailor._id)}>Delete</button>

           
          </Table.Cell>
        </Table.Row>
       )))}
       
       
       
      </Table.Body>
    </Table>
    </div>
  )
}

export default Tailors
