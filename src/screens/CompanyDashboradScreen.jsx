import { Outlet, useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"

import SideBar from "../components/SideBar"
import { useSelector } from "react-redux";



function CompanyDashboradScreen() {

  const userData = useSelector((state) => state.user);
  const {isRequest,isSuccess, userInfo,userProfile} = userData
  const navigate = useNavigate()


  if(!userProfile?.role == "company"){
    navigate('/login/')
  }

  return (
    <div className="flex  ">
      <SideBar/>
      <div>
        <p></p>
      </div>

      <div className="border border-black w-full container mx-auto px-4 bg-gray-100">
        <NavBar/>

        <div>
         


          <div>

          
        

           <Outlet/>
           
           
            

            
            


          </div>
        </div>

      </div>

      
      

      
    </div>


  )
}

export default CompanyDashboradScreen