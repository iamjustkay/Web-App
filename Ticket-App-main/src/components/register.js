import React from 'react'
import { useEffect, useState } from "react";
import { Button, Row, Col, Table, Checkbox, Form } from "antd";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import './register.css';
import pic from '../assets/vip.jpg';
import { response } from 'express';
export default function Register() {
 
  const [fullname, setFullname] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    axios.post("http://localhost:5000/register", {
     fullname: fullname,
     company : company,
     address : address,
     phone : phone,
     email : email,
     password : password  
  }).then((response) => {
    if(response.data.message){
      console.log("Registration Successful");
     }
     else {
       console.log(Error);
     }
  })
  };

    return (
        <div className="register-page">
            <div className="register-box">
                <div className="illustration-wrapper">
                <img src= {pic} alt="Register"/>
   

                </div>
      
           <Form
          name="register-form"
        labelCol={{
             span: 8,
           }}
           wrapperCol={{
              span: 16,
             }}
             initialValues={{
               remember: true,
             }}
           
           >

<p className="form-title">Create an Account</p>
          <p>Register and enjoy quality of service</p>
           <Form.Item
            label="Fullname"
              name="fullname"
            rules={[
                {
                 required: true,
                   message: 'Please input your fullname!',
                },
              ]}
            >
             <Input onChange={(e)=> {setFullname(e.target.value);}} />
           </Form.Item>
           <Form.Item
            label="Company"
              name="company"
            rules={[
                {
                 required: true,
                   message: 'Please input your company!',
                },
              ]}
            >
             <Input onChange={(e)=> {setCompany(e.target.value);}} />
           </Form.Item>
           <Form.Item
            label="Address"
              name="address"
            rules={[
                {
                 required: true,
                   message: 'Please input your address!',
                },
              ]}
            >
             <Input onChange={(e)=> {setAddress(e.target.value);}} />
           </Form.Item>
           <Form.Item
            label="Phone"
              name="phone"
            rules={[
                {
                 required: true,
                   message: 'Please input your phone number!',
                },
              ]}
            >
             <Input onChange={(e)=> {setPhone(e.target.value);}} />
           </Form.Item>
           <Form.Item
            label="Email"
              name="email"
            rules={[
                {
                 required: true,
                   message: 'Please input your email!',
                },
              ]}
            >
             <Input onChange={(e)=> {setEmail(e.target.value);}} />
           </Form.Item>

          <Form.Item
              label="Password"
             name="password"
               rules={[
                {
                 required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
            <Input.Password onChange={(e)=> {setPassword(e.target.value);}} />
            </Form.Item>

        

            <Form.Item
              wrapperCol={{
                offset: 8,
              span: 16,
             }}
            >
               <Button type="primary" onClick={register} htmlType="submit">
                Register
               </Button>
               <a href='/' className='login'>Sign In</a>
             </Form.Item>
        </Form>

     
            
            
            </div>
        </div>

        


    )
}
