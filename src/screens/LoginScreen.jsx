import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { login, profile } from "../State/Actions/UserActions";
import { useNavigate } from "react-router-dom";



function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
 const navigate = useNavigate()
 

  //const userLogin = useSelector(state=> state.Login)
  //const {isRequest,isSuccess,data} = userLogin

    const userData = useSelector((state) => state.user);
    const {isRequest,isSuccess,data} = userData

   

  const onSubmitHandler = (e)=>{
    e.preventDefault()
    dispatch(login({ email, password }));
    dispatch(profile())
    

  }

  

  if(data){
    navigate('/companyDashboard/orders')

  }





  return (
    <div className="flex items-center justify-center h-screen  bg-cover bg-center bg-gradient-to-b from-transparent to-gray-900  " style={{
      background:"url('images/modarn.jpg')" 
    }}>
  
     <div className='w-1/2  '>
            
          <form className='px-5 pt-6 pb-5 mb-8  bg-white shadow-md rounded ' onSubmit={onSubmitHandler}>
          <div className='text-center'>
          <h2 className='text-xl font-semibold'>Login</h2>

          </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
          
            <button type="submit" className=" md:w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          
          </form>


        </div>


    </div>
  )
}

export default LoginScreen