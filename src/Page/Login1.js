import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MDBInput } from "mdb-react-ui-kit";
import { variable } from '../Variable';
import PropTypes from 'prop-types';

const inti = {
    username: "",
    password: "",

}

const Auth = ({ setToken }) => {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const ChangeName = (value) => {
        setusername(value)
    }
    const ChangePass = (value) => {
        setpassword(value)
    }
    const Login = () => {

        if (username == "") return alert("Nhập Username");
        if (password == "") return alert("Nhập Password");

        fetch(variable.API_URL + "Account/Signin", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Username: username,
                Password: password
            })
        }).then(res => res.json())
            .then(result => {
                if (result == "Failed") alert("Failed");
                if (result != "Failed") {
                    setToken(result);
                    window.location.reload(false);
                }
            }, (error) => {
                alert("Failed");
            }
            )
    }




    return (

        <div style={{ backgroundColor: "darkgrey" }}>
            <section className='vh-100 gradient-custom'>
                <div className='container py-4 h-100'>
                    <div className='row d-flex justify-content-center align-items-center h-100' >
                        <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
                            <div className='card bg-dark text-white' style={{ borderRadius: "1rem" }}>
                                <div className='card-body p-4 text-center'>
                                    <div className='mb-md-5 mt-md-4 pb-5'>
                                        <h2 className='fw-bold mb-2 text-uppercase'>
                                            Login
                                        </h2>
                                        <p className='text-white-50 mb-4'>
                                            Please enter
                                        </p>
                                        <div className='form-outline form-white mb-4'>
                                            <MDBInput
                                                type="text"
                                                name="username"
                                                value={username}
                                                onChange={(e) => ChangeName(e.target.value)}
                                                label="UserName"
                                                className="form-control form-control-lg"
                                            />
                                        </div>
                                        <div className='form-outline form-white mb-4'>
                                            <MDBInput
                                                type="text"
                                                name="password"
                                                value={password}
                                                onChange={(e) => ChangePass(e.target.value)}
                                                label="Password"
                                                className="form-control form-control-lg"
                                            />
                                        </div>
                                        <button className='btn btn-outline-light btn-lg px-5' type='button'
                                            onClick={() => Login()}>
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
export default Auth
Auth.propTypes = {
    setToken: PropTypes.func.isRequired
}