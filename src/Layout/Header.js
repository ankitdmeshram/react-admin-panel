import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const gs_sidebar_close = () => {
        // alert(" gs_sidebar_close function called")
        document.getElementById('gs-sidebar').style.transform = "translateX(-100%)";
        document.getElementById('gs-sidebar').style.height = "0";
        document.getElementById('gs-sidebar').style.transition = ".2s";
        document.getElementById("gs-body").style.width = "100%";
        document.getElementById("gs-nav").style.width = "100%";
        document.getElementById('gs-body').style.transition = ".1s";
        document.getElementById('gs-nav').style.transition = ".1s";
        document.getElementById("gs_sidebar_close").style.display = "none";
        document.getElementById("gs_sidebar_open").style.display = "block";

    }
    const gs_sidebar_open = () => {
        // alert("gs_sidebar_open function called")
        document.getElementById('gs-sidebar').style.transform = "translateX(0%)";
        document.getElementById('gs-sidebar').style.height = "100vh";
        document.getElementById('gs-sidebar').style.transition = ".2s";
        document.getElementById("gs-body").style.width = "85%";
        document.getElementById("gs-nav").style.width = "85%";
        document.getElementById('gs-body').style.transition = ".1s";
        document.getElementById('gs-nav').style.transition = ".1s";
        document.getElementById("gs_sidebar_close").style.display = "block";
        document.getElementById("gs_sidebar_open").style.display = "none";
    }

    const gs_mob_sidebar_open = () => {
        // alert(" gs_mob_sidebar_open function called")
        document.getElementById('gs-sidebar').style.transform = "translateX(0%)";
        document.getElementById('gs-sidebar').style.height = "100vh";
        document.getElementById('gs-sidebar').style.position = "fixed";
        document.getElementById('gs-sidebar').style.zIndex = 1;
        document.getElementById('gs-sidebar').style.marginTop = "55px";
        document.getElementById('gs-sidebar').style.transition = ".2s";
        document.getElementById("gs-body").style.width = "85%";
        document.getElementById("gs-nav").style.width = "85%";
        document.getElementById('gs-body').style.transition = ".1s";
        document.getElementById('gs-nav').style.transition = ".1s";
        document.getElementById("gs_sidebar_close").style.display = "block";
        document.getElementById("gs_mob_sidebar_open").style.display = "none";
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light shadow-sm bg-white rounded gs-nav" id="gs-nav">
                <button onClick={gs_sidebar_close} id="gs_sidebar_close"><span
                    className="navbar-toggler-icon"></span></button>
                <button onClick={gs_sidebar_open} id="gs_sidebar_open"><span
                    className="navbar-toggler-icon"></span></button>

                <button onClick={gs_mob_sidebar_open} id="gs_mob_sidebar_open"><span
                    className="navbar-toggler-icon"></span></button>
                <a className="navbar-brand" href="#">Body Part</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                            
                        </li>
                        <li className="nav-item">
                            <Link to="/signin"  className="nav-link"> <i class="fa fa-sign-in" aria-hidden="true"></i> Signin</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup"  className="nav-link"> <i class="fa fa-user-plus" aria-hidden="true"></i> Signup</Link>
                        </li>

                        
         
                        
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header
