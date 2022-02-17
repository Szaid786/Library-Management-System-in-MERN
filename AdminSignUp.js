import React from 'react';
import FormCss from "./Form.css";
import Form from "./Form"
import SignUp from "./SignUp"

const AdminSignUp = () => {
  return (
    <>
     <SignUp name="Admin SignUp" rno="Library Id" visit="/adminlogin" />
    </>
  )
};

export default AdminSignUp;
