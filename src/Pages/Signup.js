import React from 'react'
import {
    Link
} from 'react-router-dom'

const Signup = () => {

    return (
        <div className="gs-content card m-3 p-3">

            <div className="container">
                <div className="row">
                    <div className="col p-5">
                        <div className="card bg-light" style={{ maxWidth: "500px", margin: "auto" }}>
                            <div className="card-body">
                                <h3 className="text-center m-0">
                                    <Link>
                                        <img src="https://brokod.com/wp-content/uploads/2020/09/logo.png" height="30" alt="logo" />
                                    </Link>
                                </h3>
                                <div className="p-3">
                                    <h4 className="font-18 m-b-5 text-center">Free Register !</h4>
                                    <p className="text-muted text-center">Get your free Brokod account now..</p>
                                    <form className="form-horizontal m-t-30" action="/">
                                        <div className="form-group">
                                            <label for="username">Username</label>
                                            <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                        </div>
                                        <div className="form-group">
                                            <label for="useremail">Email</label>
                                            <input type="email" className="form-control" id="useremail" placeholder="Enter Email" />
                                        </div>
                                        <div className="form-group">
                                            <label for="userpassword">Password</label>
                                            <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                                        </div>
                                        <div className="form-group row m-t-20">
                                            <div className="col-sm-6">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                    <label className="custom-control-label" for="customControlInline">Remember me</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 text-right">
                                                <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Log In</button>
                                            </div>
                                        </div>
                                        <div className="form-group m-t-10 mb-0 row">
                                            <div className="col-12 m-t-20">
                                                <a className="text-muted" href="/pages_recoverpw">
                                                    <i className="mdi mdi-lock"></i> Forgot your password?
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup
