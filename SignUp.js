import React,{useState} from 'react';
import {Link} from "react-router-dom";
import "./SignUp.css";

const SignUp = (props) => {
  const [user,setUser]=useState({
    Mno:"",
    email:"",
    rNo:"",
    Password:"",
    cPassword:"",
  });

  const handleChange = (e) => {
    const {name,value }=e.target;
    setUser({
      ...user,
      [name]:value
    })
  }
  return(
  <>
      <div className='formCont'>
          <div className='form-cont'>
          <h3 className='Title'>{props.name}</h3>
           
           <div className='input_field'>
           <label className='label'>First Name</label><br/>
           <input type="text" className='inputUser' placeholder="First Name"/>
           </div>
                
           <div className='input_field'>
           <label className='label'>Last name</label><br/>
           <input type="text" className='inputUser' placeholder="Last Name"/>
           </div>
          
           <div className='input_field'>
          <label className='label'>Email</label><br/>
           <input type="email" className='inputUser' placeholder="Email"/>
           </div>
             
           <div className='input_field'>
           <label className='label'>Phone No</label><br/>
           <input type="number" className='inputUser' placeholder="+91 1234 5678 90"/>
           </div>
                  
           <div className='input_field'>
           <label className='label'>Library No</label><br/>
           <input type="number" className='inputUser' placeholder="Library No"/>
           </div>
           
           <div className='input_field'>
           <label className='label'>password</label><br/>
           <input type="password" className='inputUser' placeholder="password"/>
           </div>
           
           <div className='input_field'>
           <label className='label'>Confirm Password</label><br/>
           <input type="text" className='inputUser' placeholder="Confirm Password"/>
           </div>
           <input type="button" className='buttonbtn' value="Sign Up"/>
           <p>Already Have an account  <Link to={props.visit}>Sign in</Link></p>
       
          </div>

        </div>
  </>
  )
};

export default SignUp;
