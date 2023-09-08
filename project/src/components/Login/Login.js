import React, { Component, useState } from "react";
import {useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
import './Login.css'
export default function Login() {
    const [role, setRole] = useState("");
    let {
        register,
        handleSubmit,
        formState:{ errors },
    } = useForm();
    const handleRoleSelection = (selectedRole) => {
        setRole(selectedRole);
      };
    const navigate=useNavigate();
      const isButtonSelected = (buttonRole) => {
        return buttonRole === role
          ? "btn-success select"
          : "btn-outline-success not-select";
      };
  let SubmitUser=(e) =>
  {
    if(e.email=="manasa@gmail.com" , e.pass=="1234"){
      console.log(e.email,e.pass);
      navigate('/admin')
    }
    else{
    {

    fetch("http://localhost:4000/posts", {
        method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(e),
        })
        .then((res) => res.json())
      .then((data) => {  
        navigate('/user') 
      });
  }}
};


  return (
    <div className="main">
      <div className="inner">
        <h3>Sign In</h3>     
        <div className="form1">
          <form onSubmit={handleSubmit(SubmitUser)}>
          
            <div className="mb-3">
                    <label>Email - ID</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter email"
                      {...register("email",{required:true})} 
                    />
            </div>
            <div className="mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      id="pass"
                      className="form-control"
                      placeholder="Enter password"
                      {...register("pass",{required:true})} 
                    />
            </div>
            {/* <div className="mb-3">
                    <label style={{marginLeft:'33px'}}>Role  </label>
                    <input
                      type="number"
                      id="role"
                      className="form-control"
                      placeholder="Role"
                      {...register("role",{required:true})} 
                    />
            </div> */}
            <br></br>
            <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
            </div>
            <p className="forgot-password text-right">
                    <a href="/signup">Sign Up</a>
            </p>
          </form>
        </div>
        <br></br>
      </div>
    </div>
    
  );
}