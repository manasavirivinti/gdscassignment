import React from 'react';
import './Home.css';
import { Link} from "react-router-dom";

function Home() {
  return (
    <div>
      <section>
            <div class="submain1">
              <div style={{marginTop:'10px'}}>
                <h1 >Welcome to the Event Management application</h1>
                <p>
                  A small application where an admin post's various upcoming events  <br></br>
                  and users can register into interested events.<br></br>
                  <br></br>
                  Know More About The Upcoming events
                  <br></br>
                  <button className='btn1'>
                    <a href='/login'>Login / SignUp</a>
                    </button> 
                </p>
              </div>
            </div>
            <div class='anime anime1'></div>
            <div class='anime anime2'></div>
            <div class='anime anime3'></div>
            <div class='anime anime4'></div>
          </section>
    </div>
  )
}

export default Home