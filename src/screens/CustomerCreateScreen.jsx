import {FaArrowLeft} from 'react-icons/fa'
function CustomerCreateScreen() {
  return (
    <div className='max-w-[980px] m-5'>
    <div className=' flex items-center space-x-5 my-10' >
      <FaArrowLeft/>
      <p className='font-bold text-1xl'>Customer/Create</p>
    </div>

    <div className='bg-white shadow-md  container mx-auto p-5 '>
      <form  className='space-y-2'>
        <div>
          <label>Name</label>
        </div>
        <div>
              <input className='rounded-md w-full' placeholder='tailor username' type='text'/>
        </div>

        <div>
          <label>password</label>
        </div>
        <div>
              <input className='rounded-md w-full' placeholder='customer password for assesing the dashboard' type='password'/>
        </div>

        
        <div>
          <label>Confirm password</label>
        </div>
        <div>
              <input className='rounded-md w-full' placeholder='confirm password' type='password'/>
        </div>

        <div>
           <button className='bg-blue-500 p-2 text-base font-semibold rounded-md text-white w-full'>Register Customer</button>
        </div>
      </form>
    </div>
    
    
  </div>
  )
}

export default CustomerCreateScreen