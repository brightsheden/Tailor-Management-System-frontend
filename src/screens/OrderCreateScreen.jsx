
import { useEffect, useState } from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { listCustomers } from '../State/Actions/CustomerActions'
import { listStyles } from '../State/Actions/StyleActions'
import { listTailors } from '../State/Actions/TailorActions'
import { createOrder, getAllOrders } from '../State/Actions/OrderActions'
import { resetOrderCreateState } from '../State/Slices/OrderSlice'

function OrderCreateScreen() {
  const customer = useSelector((state)=> state.customer)
  const {isRequest, isSuccess, data:customers} = customer

  const style = useSelector((state)=> state.style)
  const {isRequest:styleRequest , isSuccess:styleSuccess, data:styles} = style

  const tailor = useSelector((state)=> state.tailor)
  const {isRequest:tailorRequest , isSuccess:tailorSuccess, data:tailors} = tailor

  const [custormerId, setCustomerId] = useState('')
  const [styleId, setStyleId] = useState('')
  const [tailorId, setTailorId] = useState('')
  const [price, setPrice] = useState('')
  const [measurement, setMeasurement] = useState('')

  const order = useSelector((state) => state.createOrder);
  const { orderCreateRequest,  orderCreateSuccess, orderCreateFailed } = order;

  
  const dispatch=useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(listCustomers())
    dispatch(listStyles())
    dispatch(listTailors())


   

   
  },[dispatch])

  useEffect(()=>{
    if(orderCreateSuccess){
      navigate('/companyDashboard/orders')
      dispatch(resetOrderCreateState())
 
     }

  },[navigate,orderCreateSuccess])

  

 

  const SubmitHandler = (e)=>{
    e.preventDefault()
    
    dispatch(createOrder({custormerId,styleId,tailorId,price,measurement}))
    .then(() => dispatch(getAllOrders()))
   
   
  }
  return ( 
    <div className='max-w-[980px] m-5'>
       <Link to='/companydashboard/orders'> 
       <div className=' flex items-center space-x-5 my-10' >
       
       <FaArrowLeft/>
       <p className='font-bold text-1xl'>Orders/Create</p>

    
     
   </div>
       </Link>
    

      <div className='bg-white shadow-md  container mx-auto p-5 '>
        <form  className='space-y-2' onSubmit={SubmitHandler}>
          <div>

            <div><label>Customer</label></div>
            <div>
              <select className='w-full rounded-md'  onChange={(e)=>setCustomerId(e.target.value)}>
                
              <option>select customer</option>
          
                {isRequest && (<option>loading...</option>)}

                {isSuccess && (
                   customers.map(customer =>(
                    <option value={customer._id} key={customer._id}
                   >{customer.name}</option>

                  ))

                )}
              
                
               
              </select>
            </div>
            </div>

            <div>
              <label>Style</label>
            </div>

            <div>
                <select className='w-full rounded-md' onChange={(e)=>setStyleId(e.target.value)}>
                <option>choose style</option>
                {styleRequest && (<option>loading...</option>)}

                {styleSuccess && (
                   styles.map(style =>(
                    <option value={style._id} key={style._id}
                    
                    
                    >{style.description}</option>

                  ))

                )}
                
              
                  
                  
                </select>
            </div>

            <div>Assign to Tailor</div>
            <div>
              <select className='w-full rounded-md'  onChange={(e)=>setTailorId(e.target.value)}>
                <option >assign to tailor</option>
                {tailorRequest && (<option>loading...</option>)}
                {tailorSuccess && ( 
                  tailors?.map(tailor => (
                    <option value={tailor._id} key={tailor._id}
                   
                    >{tailor.name}</option>
                  ))
                )}
              </select>
            </div>

            <div><label>Price</label></div>
            <div >
              <input type='text' className='w-full rounded-md'
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
              
              />
            </div>

            <div>
              <label>Measueement</label>
            </div>

            <div>
              <textarea className='
              w-full rounded-md'  placeholder='submit your mwasurement'

              value={measurement}
              onChange={(e)=>setMeasurement(e.target.value)}
              
              />
            </div>

            <button className='bg-blue-500 text-white p-2 w-full'>Submit</button>

          <div>

          </div>
        </form>
      </div>
      
      
    </div>
  )
}

export default OrderCreateScreen