import React,{useState} from 'react';
import "./Form.css";
import AdminSignUp from "./AdminSignUp";
import StudentLogin from "./StudentLogin";
import StudentSignUp from "./StudentSignUp";
import StudentNav from "./StudentNav";
import {Link} from "react-router-dom";
import {AiFillEye} from "react-icons/ai";

const Form = (props) => {
  const [email,setEmail]=useState();
  const [password,setPassowrd]=useState();
  return (
     <>
        <div className='formContainer'>
          <div className='form'>
          <h3 className='heading'>{props.name}</h3>
          <label className='label'>Email</label>
           <input type="email" className='input' placeholder="Email"/>
           <br></br>
           <label className='label'>password</label>
           <input type="password" className='input' placeholder="password"/><br/>
           <input type="button" className='button' value="Login"/>
           <p>New Accont  <Link to={props.visit}>Sign Up</Link></p>
       
          </div>

        </div>
     </>
  )
}

export default Form;
