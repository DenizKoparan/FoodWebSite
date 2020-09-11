import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css';
import './genel.css';
export default class blog extends Component {
    render() {
        return (
            <div>
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
                 <h1 className='baslik'>MY BLOG</h1> 
                 <p style={{marginLeft:-1100}}>ALL POST</p>
                 <div style={{marginLeft:1100,marginTop:-50}} class="field">
                    <select class="ui fluid dropdown">
                        <option value="">Search</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                
                    </select>
                    </div>
                 <div id='orSon' class="ui placeholder segment">
                        <div class="ui two column very relaxed stackable grid">
                            <div class="column">
                            <div class="ui form">
                            <img className='örnek'src={require("../kc.jpg")}/>
                               
                            </div>
                            </div>
                            <div class="middle aligned column">
                            <div style={{width:500}} class="ui card">
                            <div class="content">
                                <i class="right floated like icon"></i>
                                <i class="right floated star icon"></i>
                                <div class="ui comments">
                        <div class="comment">
                            <a class="avatar">
                            <img src={require("../örnek.jpg")}/>
                            </a>
                            <div style={{marginRight:300}} class="content">
                            <a class="author">Deniz Koparan</a>
                            <div class="metadata">
                                <span class="date">Today at 5:42PM</span>
                            </div>
                            
                            </div>
                        </div>
                        </div>
                                <div class="header">The holiday special</div>
                                <div style={{fontSize:15}}>Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more. </div>
                                <div class="description">
                                <p></p>
                                </div>
                            </div>
                            <div class="extra content">
                                <span class="left floated like">
                                <i class="like icon"></i>
                                Like
                                </span>
                                <span class="right floated star">
                                <i class="star icon"></i>
                                Favorite
                                </span>
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
