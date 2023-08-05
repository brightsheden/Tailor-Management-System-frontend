

import { Button, Checkbox, Label, Modal, Select, TextInput, Textarea } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { listCustomers } from '../State/Actions/CustomerActions';
import { listStyles } from '../State/Actions/StyleActions';
import { listTailors } from '../State/Actions/TailorActions';

import { editOrder } from '../State/Actions/OrderActions';
import { useNavigate } from 'react-router-dom';


export default function EditModal({ open, order, close}) {
  const [customer, setCustomer] = useState('')
  const [style, setStyle] = useState('')
  const [tailor, setTailor] = useState('')
  const [price, setPrice] = useState('')
  const [measurement, setMeasurement] = useState('')
  const [isCompleted, setCompleted] = useState(true)
  const dispatch = useDispatch()


  
  const customerId = useSelector((state)=> state.customer)
  const {isRequest, isSuccess, data:customers} = customerId

  const styleId = useSelector((state)=> state.style)
  const {isRequest:styleRequest , isSuccess:styleSuccess, data:styles} = styleId

  const tailorId = useSelector((state)=> state.tailor)
  const {isRequest:tailorRequest , isSuccess:tailorSuccess, data:tailors} = tailorId

  const orderUpadate = useSelector((state)=> state.editOrder)
  const {orderEditSuccess, orderEditRequest,orderEditFaild} = orderUpadate

  const router = useNavigate()

  useEffect(()=>{
    dispatch(listCustomers())
    dispatch(listStyles())
    dispatch(listTailors())

    if(orderEditSuccess){
      router('companyDashBoard/orders')
    }
  },[])

  const onSubmitHandler = (e)=>{
    e.preventDefault();
    dispatch(editOrder({customer,style,tailor,price,measurement,isCompleted}))

  }

 
   

 


  return (
    <>
      
      <Modal show={open} size="md" popup onClose={close}>
        <Modal.Header />
        
        <Modal.Body>
          <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit Order</h3>
                <form onSubmit={onSubmitHandler}>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="" value="Customer" />
                  </div>
                

                  <Select className='w-full rounded-md'  onChange={(e)=>setCustomer(e.target.value)}>
                    
                  <option value={order?.customer}>{order?.custormer_name}</option>
                
                      {isRequest && (<option>loading...</option>)}
      
                      {isSuccess && (
                        customers.map(customer =>(
                          <option value={customer._id} key={customer._id}
                        >{customer.name}</option>
      
                        ))
      
                      )}
                    
                      
                    
                    </Select>
                
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="" value="style" />
                  </div>
                  <Select onChange={(e)=>setStyle(e.target.value)}>
                    <option value={order?.style}>{order?.style_description}</option>
                    {styleRequest && (<option>loading...</option>)}

                    {styleSuccess && (
                      styles.map(style =>(
                        <option value={style._id} key={style._id}
                        
                        
                        >{style.description}</option>

                      ))

                    )}
                    
                  
                      
                      
                    </Select>
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="" value="change Tailor" />
                  </div>
                  <Select onChange={(e)=>setTailor(e.target.value)}>
                    <option value={order?.tailor}>{order?.tailor_name}</option>
                    {tailorRequest && (<option>loading...</option>)}
                    {tailorSuccess && ( 
                      tailors?.map(tailor => (
                        <option value={tailor._id} key={tailor._id}
                      
                        >{tailor.name}</option>
                      ))
                    )}
                  </Select>
                </div>

                <div>
                    <div className="mb-2 block">
                      <Label htmlFor="" value="Price" />
                    </div>
                    <TextInput placeholder="0.0" value={price}

                    onChange={(e)=>setPrice(e.target.value)}
                    
                    required />
                </div>

             

              

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="" value='Measurement' />
                  </div>
                  <Textarea id="measurment" placeholder="measurement"  value={measurement} required
                  
                  onChange={(e)=>setMeasurement(e.target.value)}
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="" value="completed" />
                  </div>
                  <Checkbox id="number" value={isCompleted} 

                      onChange={(e)=>setCompleted(e.target.value)}
                  
                  />
                </div>

             
              
                
                <div className="w-full">
                  <Button>Update</Button>
                </div>
                </form>
              
              
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}


