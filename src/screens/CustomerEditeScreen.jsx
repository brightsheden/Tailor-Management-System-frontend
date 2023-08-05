import { useEffect, useState } from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'



import {  TextInput } from 'flowbite-react'
import Loader from '../components/Loader';

function CustomerEditeScreen() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [number,setNumber]= useState('')
    const [wallet,setWallet] = useState('')

    const unSumbmitHandler = ()=>{
        console.log('submited')
    }

  return (
    <>
          <div className='max-w-[980px] m-5'>
       <Link to='/companydashboard/orders'> 
       <div className=' flex items-center space-x-5 my-10' >
       
       <FaArrowLeft/>
       <p className='font-bold text-1xl'>Orders/Edit</p>

    
     
   </div>
       </Link>

  

       {orderIdRequest?(<Loader/>):
       (
          
      <div className='bg-white shadow-md  container mx-auto p-5 '>
      <form  className='space-y-2' onSubmit={unSumbmitHandler}>
        

          


    
          <div><label>Name</label></div>
          <div >
            <TextInput type='text' className='w-full rounded-md'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            
            />
          </div>

          
          <div><label>Email</label></div>
          <div >
            <TextInput type='email' className='w-full rounded-md'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder={email}
            
            />
          </div>

          <div><label>Number</label></div>
          <div >
            <TextInput type='tel' className='w-full rounded-md'
            value={number}
            onChange={(e)=>setNumber(e.target.value)}
            placeholder={number}
            
            />
          </div>

          <div><label>wallet</label></div>
          <div >
            <TextInput type='text' className='w-full rounded-md'
            value={wallet}
            onChange={(e)=>setWallet(e.target.value)}
            placeholder={number}
            
            />
          </div>

          

        

    

          <button className='bg-blue-500 text-white p-2 w-full rounded-md'>Submit</button>

        <div>

        </div>
      </form>
    </div>
       )}
    

      
      
    </div>
    
    </>
  )
}

export default CustomerEditeScreen