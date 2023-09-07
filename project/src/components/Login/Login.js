import React, { Component, useState } from "react";

import {useForm } from "react-hook-form";
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
    
      const isButtonSelected = (buttonRole) => {
        return buttonRole === role
          ? "btn-success select"
          : "btn-outline-success not-select";
      };
  let SubmitUser=(e) =>
  {{

    fetch("http://localhost:4000/comments", {
        method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(e),
        })
        .then((res) => res.json())
      .then((data) => {

          window.location.href = "/user";
        
      });
      
  }
};
let SubmitUser1=(e) =>
  {{

    fetch("http://localhost:4000/posts", {
        method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(e),
        })
        .then((res) => res.json())
      .then((data) => {

          window.location.href = "/admin";
        
      });
      
  }
};

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
          <h3>Sign In </h3>      
        <div className="card-body">
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