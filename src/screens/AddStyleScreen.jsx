
import { Button, FileInput, Label } from 'flowbite-react'
import { useEffect, useState } from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addStyle } from '../State/Actions/StyleActions'
import axios from 'axios'


function AddStyleScreen() {
 


  const [description,setDescription] = useState('')
  const [gender, setGender] = useState('')
  const [image, setImage] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const [uploadRequest,setUploadRequet] = useState(false)
  const [uploadSuccess,setUploadSuccess] = useState(false)
  const [uploadError,setUploadError] = useState('')



  
  const dispatch=useDispatch()
  const navigate = useNavigate()
  const userData = useSelector((state) => state.user);
  const { userInfo,} = userData

  useEffect(()=>{
    if(uploadSuccess){
      navigate('/companydashboard/styles')
    }
    console.log(uploadSuccess)


  },[dispatch, uploadSuccess,navigate])



  
  const ImageChange = (e)=>{
    const file = e.target.files[0]
    if(file){
      setImage(file)
      const reader = new FileReader();
      reader.onloadend = ()=>{
        setImageUrl(reader.result)
      }
      reader.readAsDataURL(file)
      console.log(file)

    }
   
   // setImageUrl(URL.createObjectURL(e.target.files[0]))
    //console.log(image)


  }
 

  const SubmitHandler = (e)=>{
    e.preventDefault()
    dispatch(addStyle({image,description,gender}))



  }

  const NewSubmitHandler=(e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('image',image)
    formData.append('description',description)
    formData.append('gender',gender)
    setUploadRequet(true)
    //formData.append('is_paid',is_paid)
  
    try {
      let url = 'http://127.0.0.1:8000/api/company/stylecreate/'
    

     axios.post(url, formData, {
          headers: {
              
              "content-type" : "multipart/form/data",
              Authorization: `Bearer ${userInfo.token}`
         
          
      }}).catch(err => console.log(err))
      setUploadSuccess(true)
  
      
    } catch (error) {
      console.log(error)
      setUploadError(error)
      
    }
  




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
        <form  className='space-y-2' onSubmit={NewSubmitHandler}>
          


            <div>

              <div>

                {image && (<img  src={imageUrl} />)}

              </div>


                <div>
                <Label value='Upload Image' />

                </div>

                <div>
                    <FileInput  onChange={ImageChange} />
                </div>
                
                

            </div>

            <div><label>Gender</label></div>
            <div >
              <input type='text' className='w-full rounded-md'
              value={gender}
              onChange={(e)=>setGender(e.target.value)}
              placeholder='enter gender'
              
              />
            </div>

            <div>
              <label>Description</label>
            </div>

            <div>
              <textarea className='
              w-full rounded-md'  placeholder='enter description'

              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              
              />
            </div>

            <button className='bg-blue-500 text-white p-2 rounded-md w-full'>Add</button>

          <div>

          </div>
        </form>
      </div>
      
      
    </div>
  )
}

export default AddStyleScreen