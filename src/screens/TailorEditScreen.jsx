
import { Link, useNavigate ,useParams} from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'
import Loader from '../components/Loader'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TailorById } from '../State/Actions/TailorActions'
import {TextInput} from 'flowbite-react'


function TailorEditScreen() {
    const [email, setEmail] = useState('')
  const [name,setName]= useState('')
  const [password, setPassword] = useState('')
  const [password2,setPassword2] = useState('')
  const [message, setMessage] = useState()
  const dispatch = useDispatch('');
 const navigate = useNavigate()
 

  //const userLogin = useSelector(state=> state.Login)
  //const {isRequest,isSuccess,data} = userLogin

    const tailorId= useSelector((state) => state.tailorId);
    const {tailorIdRequest,tailorIdSuccess,tailorIdFailed,data} = tailorId

  const {Id} = useParams()
    useEffect(()=>{

      if(password != password2){
        setMessage("Password are not matching each other")
      }

    },[password,password2])

    useEffect(()=>{
      if(!tailorIdFailed){
        dispatch(TailorById(Id))
        setEmail(data?.email)
        setName(data?.name)

      }
      

    },[tailorIdFailed])

   

  const onSubmitHandler = (e)=>{
    e.preventDefault()
    //dispatch(registerTailor({ name,email, password }));
    setName("")
    setEmail("")
    setPassword("")
    setPassword2("")
    

    

  }
  return (
    <div className='max-w-[980px] m-5'>
    <Link to='/companydashboard/tailors'> 
    <div className=' flex items-center space-x-5 my-10' >
    
    <FaArrowLeft/>
    <p className='font-bold text-1xl'>Tailor/Edit</p>

 
  
</div>
    </Link>



    {tailorIdRequest?(<Loader/>):
    (
       
   <div className='bg-white shadow-md  container mx-auto p-5 '>
   <form  className='space-y-2' onSubmit={onSubmitHandler}>
 

       <div><label>Email</label></div>
       <div >
         <TextInput type='text' className='w-full rounded-md'
         placeholder={data?.email}
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         
         />
       </div>

       <div>
         <label>Name</label>
       </div>

       <div>
         <TextInput className='
         w-full rounded-md'  placeholder='name'

         value={name}
         onChange={(e)=>setName(e.target.value)}
         
         />
       </div>

       
      

       <button className='bg-blue-500 text-white p-2 w-full rounded-md'>Update</button>

     <div>

     </div>
   </form>
 </div>
    )}
 

   
   
 </div>
  )
}

export default TailorEditScreen