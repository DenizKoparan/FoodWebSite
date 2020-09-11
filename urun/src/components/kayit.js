import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './genel.css';
import '../App.css';
export default class kayit extends Component {
    render() {
        return (
            <div>
                <NavLink to="/portfolio" > 
        <h4 style={{color:"black"}} className='geri'><i class="angle left icon"></i> Back to Portfolio</h4></NavLink>
                 <div className='marka'><h1>DeCe</h1></div>
                 <div  class="ui menu">
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
                <div id='or' class="ui placeholder segment">
                        <div class="ui two column very relaxed stackable grid">
                            <div class="column">
                            <div class="ui form">
                                <div class="field">
                                <label>Username</label>
                                <div class="ui left icon input">
                                    <input type="text" placeholder="Username"/>
                                    <i class="user icon"></i>
                                </div>
                                </div>
                                <div class="field">
                                <label>Password</label>
                                <div class="ui left icon input">
                                    <input type="password"/>
                                    <i class="lock icon"></i>
                                </div>
                                </div>
                                <div class="ui blue submit button">Sing In</div>
                            </div>
                            </div>
                            <div class="middle aligned column">
                            <div class="ui red big button">
                                <i class="signup icon"></i>
                                Sign Up
                            </div>
                            </div>
                        </div>
                        
                           
                        
                        </div>
            </div>
        )
    }
}
