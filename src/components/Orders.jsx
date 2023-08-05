import { Link } from "react-router-dom"
import SearchFilter from "./SearchFilter"
import TableComponent from "./Table"
import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllOrders } from "../State/Actions/OrderActions"
import Loader from "./Loader"
import { resetOrderDeleteState, resetOrderIdState } from "../State/Slices/OrderSlice"


function Orders() {
  
  const dispatch = useDispatch()
  const order=useSelector((state)=>state.order)
  const {data, isRequest, isSuccess} = order

  const deleteOrder = useSelector((state)=> state.deleteOrder)
  const {orderDeleteSuccess} = deleteOrder


  useEffect(() => {
    // Dispatch the action only if data is not available
    
      dispatch(getAllOrders())
      if(orderDeleteSuccess){
        
        dispatch(resetOrderDeleteState())
      }
   
 
  }, [dispatch,orderDeleteSuccess])


  useEffect(()=>{
    dispatch(resetOrderIdState())

  },[dispatch])
  
  return (
    <div className='overflow-scroll'>
       <h2 className="text-2xl font-bold">Orders</h2>
       <div className="flex justify-between my-5">
          <SearchFilter/>
          <Link to='/companydashboard/orders/create/'>
          <button className="bg-black text-white p-2 text-sm rounded-lg font-semibold">Create Order/work</button>


          </Link>
          
       </div>
     
     
     {isRequest? (<Loader/>):(
        <TableComponent orders={data}  />
     )}

        
       
    </div>
  )
}

export default Orders
