import react from "react";
import {useForm} from "react-hook-form";

import './Admin.css';
function Admin(){
    let {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm();
      let SubmitEvent = (userObj) => {
        fetch("http://localhost:4000/comments",{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(userObj)
        })
        .then(response=>{
           console.log(response)
        })
        .catch(err=>console.log("err is:",err))
    };
    return (
        <div className="content">
            <form  onSubmit={handleSubmit(SubmitEvent)} className="forms">
                <label className="mb-3">
                    
                 <input
                    type="text"
                    id="ename"
                    placeholder="Title"
                    className="field1"
                    style={{borderRadius:"20px" }}
                    {...register("ename",{required:true})} 
                    />
                </label >
                 <br />
                <label>
                 <textarea
                  type="text" 
                  id="des"
                  placeholder="Link to register" 
                   className="field2" 
                   style={{borderRadius:"20px" }}
                   {...register("link",{required:true})} 
                />
                
                </label> 
                <br />
               <button type="submit" style={{borderRadius:"20px",fontSize:"20px",fontFamily:"cursive",padding:"5px"}}>Submit</button>
                <br />
             </form>
        </div>
    );
}
export default Admin;