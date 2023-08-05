import { resetOrderIdState, resetState } from '../State/Slices/OrderSlice';

import { useEffect, useState } from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { listCustomers } from '../State/Actions/CustomerActions'
import { listStyles } from '../State/Actions/StyleActions'
import { listTailors } from '../State/Actions/TailorActions'
import { OrderById,  editOrder, getAllOrders } from '../State/Actions/OrderActions'
import { Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react'
import Loader from '../components/Loader';


function OrderEditScreen() {
  const customerr = useSelector((state)=> state.customer)
  const {isRequest, isSuccess, data:customers} = customerr

  const styleid = useSelector((state)=> state.style)
  const {isRequest:styleRequest , isSuccess:styleSuccess, data:styles} = styleid
  const tailorid = useSelector((state)=> state.tailor)
  const {isRequest:tailorRequest , isSuccess:tailorSuccess, data:tailors} = tailorid

  const [custormerId, setCustomerId] = useState('')
  const [style, setStyleId] = useState('')
  const [tailor, setTailorId] = useState('')
  const [price, setPrice] = useState('')
  const [measurement, setMeasurement] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)
  const [shouldResetState, setShouldResetState] = useState(false);

  const orderUpadate = useSelector((state)=> state.editOrder)
  const {orderEditeSuccess , orderEditRequest,orderEditFaild} = orderUpadate

  const order = useSelector((state)=> state.orderId)
  const {data,orderIdRequest,orderIdSucess} = order

  const  {orderId} = useParams()




  
  const dispatch=useDispatch()
  const navigate = useNavigate()

 useEffect(() => {
    dispatch(listCustomers());
    dispatch(listStyles());
    dispatch(listTailors());
  }, [dispatch]);
  
  useEffect(()=>{
  
    if (orderEditeSuccess && shouldResetState) {
      dispatch(resetState());
      dispatch(resetOrderIdState())
      navigate('/companyDashboard/orders');
    }
      else{
        if (!data || Object.keys(data).length === 0) {
          dispatch(OrderById(orderId));
            
          
    
        }else{
            setCustomerId(data?.customer)
            setTailorId(data?.tailor)
            setStyleId(data?.style)
            setPrice(data?.price)
            setMeasurement(data?.measurement)
            setIsCompleted(data?.isCompleted)
           
            
        }
      }

  },[orderEditeSuccess, shouldResetState, data, dispatch, navigate,orderId])


 

  const SubmitHandler = (e)=>{
    e.preventDefault()
    
    dispatch(editOrder({ _id: orderId, style, tailor, price, measurement, isCompleted }))
    .then(() => Promise.all([dispatch(getAllOrders()), setShouldResetState(true)]))
  
   
   
  }
  return  ( 
  
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
      <form  className='space-y-2' onSubmit={SubmitHandler}>
        <div>

          <div><label>Customer</label></div>
          <div>
            <Select className='w-full rounded-md'  onChange={(e)=>setCustomerId(e.target.value)}>
              
            <option value={data?.customer}>{data?.custormer_name}</option>
        
              {isRequest && (<option>loading...</option>)}

              {isSuccess && (
                 customers.map(customer =>(
                  <option value={customer._id} key={customer._id}
                 >{customer.name}</option>

                ))

              )}
            
              
             
            </Select>
          </div>
          </div>

          <div>
            <label>Style</label>
          </div>

          <div>
              <Select className='w-full rounded-md' onChange={(e)=>setStyleId(e.target.value)}>
              <option value={style}>{data?.style_description}</option>
              {styleRequest && (<option>loading...</option>)}

              {styleSuccess && (
                 styles.map(style =>(
                  <option value={style._id} key={style._id}
                  
                  
                  >{style.description}</option>

                ))

              )}
              
            
                
                
              </Select>
          </div>

          <div>Assign to Tailor</div>
          <div>
            <Select className='w-full rounded-md'  onChange={(e)=>setTailorId(e.target.value)}>
              <option value={tailor} >{data?.tailor_name}</option>
              {tailorRequest && (<option>loading...</option>)}
              {tailorSuccess && ( 
                tailors?.map(tailor => (
                  <option value={tailor._id} key={tailor._id}
                 
                  >{tailor.name}</option>
                ))
              )}
            </Select>
          </div>

          <div><label>Price</label></div>
          <div >
            <TextInput type='text' className='w-full rounded-md'
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            
            />
          </div>

          <div>
            <label>Measueement</label>
          </div>

          <div>
            <Textarea className='
            w-full rounded-md'  placeholder='submit your mwasurement'

            value={measurement}
            onChange={(e)=>setMeasurement(e.target.value)}
            
            />
          </div>

          
          <div>
                <div className="mb-2 block">
                  <Label htmlFor="" value="completed" />
                </div>
                <Checkbox id="number" checked={isCompleted} 

                    onChange={(e)=>setIsCompleted(e.target.checked)}
                
                />
              </div>

          <button className='bg-blue-500 text-white p-2 w-full rounded-md'>Submit</button>

        <div>

        </div>
      </form>
    </div>
       )}
    

      
      
    </div>
  )
}

export default OrderEditScreen