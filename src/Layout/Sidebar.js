import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>

      <div className="gs-sidebar gs-col bg-dark" id="gs-sidebar">
        <h1 className=" pl-3 p-1">Admin</h1>
        <ul className="gs-scroll pt-2">

          <Link to="/"><li to="/"> <i class="fa fa-home" aria-hidden="true"></i> Home</li></Link>
          <Link to="/signin"><li> <i class="fa fa-sign-in" aria-hidden="true"></i> Signin</li></Link>
          <Link to="/signup"><li> <i class="fa fa-user-plus" aria-hidden="true"></i> Signup</li></Link>
          <Link to="/blankpage"><li> <i class="fa fa-file" aria-hidden="true"></i> Blank Page</li></Link>
          
        </ul>
      </div>

    </>
  )
}

export default Sidebar
