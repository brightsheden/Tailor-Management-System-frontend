import { useEffect, useState } from 'react';
import {FaArrowLeft} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { registerTailor } from '../State/Actions/TailorActions';

export default function TailorCreateScreen() {
  const [email, setEmail] = useState('')
  const [name,setName]= useState('')
  const [password, setPassword] = useState('')
  const [password2,setPassword2] = useState('')
  const [message, setMessage] = useState()
  const dispatch = useDispatch('');
 const navigate = useNavigate()
 

  //const userLogin = useSelector(state=> state.Login)
  //const {isRequest,isSuccess,data} = userLogin

    const createTailor= useSelector((state) => state.registerTailor);
    const {createTailorRequest,createTailorSuccess,createTailorFailed} = createTailor


    useEffect(()=>{

      if(password != password2){
        setMessage("Password are not matching each other")
      }

    },[password,password2])

   

  const onSubmitHandler = (e)=>{
    e.preventDefault()
    dispatch(registerTailor({ name,email, password }));
    setName("")
    setEmail("")
    setPassword("")
    setPassword2("")
    

    

  }

  if(createTailorSuccess){
    navigate('/companyDashboard/tailors')

  }

  return (
    <div className='max-w-[980px] m-5'>
       <Link to='/companydashboard/tailors'> 
       <div className=' flex items-center space-x-5 my-10' >
       
       <FaArrowLeft/>
       <p className='font-bold text-1xl'>Tailor/Create</p>

    
     
   </div>
       </Link>

       <div className='rounded-md bg-gray-100 p-2 text-left shadow-md border border-blue-500 m-2 text-base '> 
        create tailor account and default password for tailor to use to login
       </div>

      <div className='bg-white shadow-md  container mx-auto p-5 '>
        <form  className='space-y-2' onSubmit={onSubmitHandler}>
        <p>{message}</p>
        
          <div>
            <div>
              <label>Name</label>
            </div>
            <div>
            <input className='rounded-md w-full' placeholder='tailor username' type='text'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                
                />

            </div>
               
          </div>

          <div>
            <div>
              <label>Email</label>
            </div>
            <div>
            <input className='rounded-md w-full' placeholder='tailor email' type='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                
                />

            </div>
               
          </div>

          <div>
            <label>password</label>
          </div>
          <div>
                <input className='rounded-md w-full' placeholder='tailor password for assesing the dashboard' type='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                
                />
          </div>

          
          <div>
            <label>Confirm password</label>
          </div>
          <div>
                <input className='rounded-md w-full' placeholder='tailor password for assesing the dashboard' type='password'/>
          </div>

          <div>
             <button className='bg-blue-500 p-2 text-base font-semibold rounded-md text-white w-full'>Register Tailor</button>
          </div>
        </form>
      </div>
      
      
    </div>
  )
}
