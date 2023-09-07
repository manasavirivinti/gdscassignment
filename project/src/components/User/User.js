import react from "react";
import React,{useState,useEffect} from "react";
import './User.css';
function User(){

    let [cards,setCards]=useState([])
    let [err,setErr]=useState("")
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
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {
                    cards.map((userObj)=><div className='col'>
                        <div className="card">
                            <div className="card-body">
                                <p className="display-3 name">{userObj.ename}</p>
                                <p className="lead fs-4">{userObj.des}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            </div> 
    );
}
export default User;