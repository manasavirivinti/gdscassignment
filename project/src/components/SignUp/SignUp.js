import React, { Component, useState } from "react";
import './SignUp.css';
import {useForm } from "react-hook-form";
export default function SignUp() {
  const [role,setRole]=useState(0)
  let {
    register,
    handleSubmit,
    formState:{ errors },
} = useForm();
  let SubmitForm = (UserObj) => {
    {
      setRole(1);
      fetch("http://localhost:4000/posts", {
        method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(UserObj,role),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          
            alert("Registration Successful");
          
        });
    }
  };

  return (
    <div className="signup">
      <div className="signupinner">
        <form onSubmit={handleSubmit(SubmitForm)}>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label >First name</label>
            <input
              type="text"
              id="Fname"
              className="form-control"
              placeholder="First name"
              {...register("Fname",{required:true})} 
            />
          </div>
          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              id="Lname"
              className="form-control"
              placeholder="Last name"
              {...register("Lname",{required:true})} 
        
            />
          </div>
          <div className="mb-3">
            <label>Email - ID </label>
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
          <div className="d-grid">
            <button type="submit" className="btn btn-success button1">
              Sign Up
            </button>
          </div>
          <p className="forgot-password ">
            Already registered <a href="/login">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}