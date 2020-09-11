import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import './genel.css';
import '../App.css';
export default class contact extends Component {
    render() {
        return (
            <div>
                 <div className='marka'><h1>DeCe</h1></div>
                 <div class="ui menu">
                  <NavLink to="/">
            <a class="item">
              Home  
            </a>
            </NavLink>
            
           
          <NavLink to="/portfolio" > 
          <a class="item">
            Portfolio
          </a>
          </NavLink>
          <NavLink to="/about">
            <a class="item">
             About
            </a>
            </NavLink>
            <NavLink to="/blog">
            <a class="item">
            Blog
            </a>
            </NavLink>
            <NavLink to='/contact'>
          <a class="item">
            Contact
          </a>
          </NavLink>
        </div>
        <div id='or1' class="ui placeholder segment">
                        <div class="ui two column very relaxed stackable grid">
                            <div class="column">
                            <div class="ui form">
                            <h2 style={{borderStyle : "outset"}} class="sub blue-grey header">Tel: 123-456-7890  |  Email: info@mysite.com</h2>
                                <div id='aa' className="field">
                                <h2 class="ui icon header">
                                    <i class="snowflake outline icon"></i>
                                    <div class="content">
                                        DeCe
                                        <div class="sub header">Manage your account settings and set e-mail preferences.</div>
                                        
                                    </div>
                                    </h2>
                                
                                </div>
                            </div>
                            </div>
                            <div class="middle aligned column">
                                
                            <div class="ui form">
                            <div id='aa1' class="field">
                                <label>Enter Your Name</label>
                                <input type="text" placeholder="Name"/>
                                <label>Enter Your Email</label>
                                <input type="text" placeholder="Email"/>
                                <div id='msg1'>
                                <label>Enter Your Message Here</label>
                                <input type="text" />
                                </div>
                                <br></br>
                                <button id='msg1B'class="ui blue-grey primary button">
                                    Submit
                                    </button>
                                    <div id='msg2'>
                                        <br></br>
                                        <h5>Stay Up-To-Date with New Posts</h5>
                                <label>Enter Your Message Here</label>
                                <input type="text" />
                                </div>
                                <br></br>
                                <button id='msg1B'class="ui blue-grey primary button">
                                    Subscribe Now
                                    </button>
                                
                            </div>
                            </div>
                            </div>
                        </div>
                        
                           
                        
                        </div>
                        <div className='icons'>
                  <i class="pinterest p icon"></i>
                  <i class="facebook f icon"></i>
                  <i class="whatsapp icon"></i>
                  <i class="instagram icon"></i>
                  </div>
                  <h3 className='acik'>© 2023 by The Art of Food. Proudly created with Wix.com</h3>
            </div>
        )
    }
}
