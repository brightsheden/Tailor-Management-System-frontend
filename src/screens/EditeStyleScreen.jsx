import { useEffect, useState } from "react"

import { Link } from "react-router-dom"
import {FaArrowLeft} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Button, FileInput, Label } from 'flowbite-react'


function EditeStyleScreen() {
    const [description,setDescription] = useState('')
    const [gender, setGender] = useState('')
    const [image, setImage] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const dispatch = useDispatch()

    useEffect(()=>{

    },[])

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
    
        }}

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log()
    }


  return (
    <>
      <div className='max-w-[980px] m-5'>
       <Link to='/companydashboard/orders'> 
       <div className=' flex items-center space-x-5 my-10' >
       
       <FaArrowLeft/>
       <p className='font-bold text-1xl'>style/edit</p>

    
     
   </div>
       </Link>
    

      <div className='bg-white shadow-md  container mx-auto p-5 '>
        <form  className='space-y-2' onSubmit={submitHandler}>
          


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


    </>
  )
}

export default EditeStyleScreen;