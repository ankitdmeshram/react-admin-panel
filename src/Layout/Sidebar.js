import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className="gs-sidebar gs-col bg-dark" id="gs-sidebar">
        <h1 className=" pl-3 p-1">Admin</h1>
        <ul className="gs-scroll pt-2">
          <Link to="/"><li to="/"> <i class="fa fa-home" aria-hidden="true"></i> Home</li></Link>
          <Link to="/signin"><li> <i class="fa fa-sign-in" aria-hidden="true"></i> Signin</li></Link>
          <Link to="/signup"><li> <i class="fa fa-user-plus" aria-hidden="true"></i> Signup</li></Link>
          <Link to="/forgetpassword"><li> <i class="fa fa-key" aria-hidden="true"></i> Forget Password</li></Link>
          <Link to="/blankpage"><li> <i class="fa fa-file" aria-hidden="true"></i> Blank Page</li></Link>
          

          <a data-toggle="collapse" href="#userinterface" > <li> <i class="fab fa-buffer"></i> User Interface</li></a>
          <ul  class="collapse" id="userinterface">
            <Link to="/buttons"> <li> Buttons</li></Link>
         
          </ul>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
