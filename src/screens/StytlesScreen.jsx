/* eslint-disable react/jsx-no-undef */
import { Link } from "react-router-dom"
import SearchFilter from "../components/SearchFilter"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { deleteStyle, listStyles } from "../State/Actions/StyleActions"
import { resetStyleDeleteState } from "../State/Slices/StyleSlice"
import Loader from "../components/Loader"



function StytlesScreen() {
    const style= useSelector((state)=> state.style)
    const {isRequest:styleRequest , isSuccess:styleSuccess, data:styles} = style
    const dispatch =useDispatch()

    const deleteStylestate =useSelector((state)=> state.deleteStyle)
    const {styleDeleteSuccess, styleDeleteRequest, styleDeleteFailed}=deleteStylestate

    useEffect(()=>{
        dispatch(listStyles())
        if(styleDeleteSuccess){
           dispatch(resetStyleDeleteState())
        }
    },[dispatch, styleDeleteSuccess])

    const deleteHandler = (id)=>{
      dispatch(deleteStyle(id))

    }
  return (
    <div className=''>
            <h2 className="text-2xl font-bold"> Styles</h2>
            <div className="flex justify-between my-5">
            <SearchFilter/>

            <Link to='/companydashboard/styles/create/'>
            <button className="bg-black text-white p-2 text-sm rounded-lg font-semibold">Add Style</button>
            </Link>
            </div>


            <div className="bg-white rounded-md p-2 flex">
                {/* cards*/}
                {styleRequest && (<Loader/>)}
                {styleSuccess && (
                     styles?.map(style => (
                      <div className="rounded-md shadow-md p-2 w-1/2 grid-column" key={style._id}>
                   
                      <div className="flex justify-between">
                      <p>{style.description}</p>
                      <button className="bg-red-500 text-white text-semibold p-2 rounded-md" onClick={()=>deleteHandler(style._id)}>Delete</button>
                      </div>
   
                      <div>
                          <img src={style?.image} alt={style.description}/>
                      </div>
  
                      <p>Lorem ipsum dolor sit amet consectetur, 
                          adipisicing elit. Fugiat soluta qui aut illum consequatur minima perspiciatis incidunt, 
                          aliquid temporibus nostrum 
                          facilis accusantium laborum vitae quas sed sequi eaque ipsam quos.</p>
                      
  
                  </div>
  
                         
                         ))
                
                )}
               
            </div>


    </div>
  )
}

export default StytlesScreen