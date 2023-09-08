import react from "react";
import React,{useState,useEffect} from "react";
import './User.css';
function User(){

    let [cards,setCards]=useState([])
    let [err,setErr]=useState("")
    const handleEventClick = (url) => {
        window.open(url, "_blank");
      };
      const logOut=()=>{
        window.location.href="./login"
      }
    useEffect(()=>{
        fetch("http://localhost:4000/comments")
        .then(response=>response.json())
        .then(cards=>setCards(cards))
        .catch(err=>{
            if(err.response){
                setErr(err.message)
            }
            else if(err.request){
                setErr(err.message)
            }
            else{
                setErr(err.message)
            }
            
        });
    },[]);
    return(
        <div className="Cards">
            <div className="headings">
            <button onClick={logOut} className="btn btn-primary btn1">
            <span className="arrow">&larr;</span>Log Out 
            </button>
            <h3>** In Order To Register For The Event Please Do Click On The Event **</h3>
            </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {
                    cards.map((userObj)=>
                        <div  className="col"
                            key={userObj._id}
                            onClick={() => handleEventClick(userObj.url)}>
                        <div className="card">
                            <div className="card-body">
                                <p className="display-3 name">{userObj.ename}</p>
                                <p className="lead fs-4">{userObj.des}</p>
                            </div>
                        </div>
                        </div>
                    )
                }
            </div>
            </div> 
    );
}
export default User;