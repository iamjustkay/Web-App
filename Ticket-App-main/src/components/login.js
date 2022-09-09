import React from 'react'
import { useEffect, useState } from "react";
import { Button, Row, Col, Table, Checkbox, Form } from "antd";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import './login.css';
import pic from '../assets/vip.jpg';
export default function Login() {
  const [error, seterror] = useState();
  const errorMessage = null
  let navigate = useNavigate();
    const onFinish = (values) => {
      console.log('Success:', values.email);
       console.log('Success:', values.email);
      //  data.map(result =>{
      //    if (values.email === result.email && values.password === result.Password){
      //      navigate('/dashboard');
      //    }
      //    else{
      //      seterror("error logging in")
      //    }
      //  })
    } ; 
  

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const [loginStatus, setLoginStatus] = useState("");
  
    const login = () => {
      axios.post("http://localhost:5000/login", {
        email : email,
        password : password,
      }).then((response) => {
         if(response.data.message){
         setLoginStatus(response.data.message);
        }
        else {
          setLoginStatus(response.data[0].email );
        }
        
      });
    };
  
  
      const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
    };
    return (
        <div className="login-page">
            <div className="login-box">
                <div className="illustration-wrapper">
                <img src= {pic} alt="Login"/>
   

                </div>
      
           <Form
          name="login-form"
        labelCol={{
             span: 8,
           }}
           wrapperCol={{
              span: 16,
             }}
             initialValues={{
               remember: true,
             }}
           onFinish={onFinish}
           onFinishFailed={onFinishFailed}
           autoComplete="off"
           >

<p className="form-title">Welcome Back</p>
          <p>Login to the Dashboard</p>
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
              name="remember"
             valuePropName="checked"
            wrapperCol={{
             offset: 8,
               span: 16,
            }}
           >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
              span: 16,
             }}
            >
               <Button type="primary" onClick={login} htmlType="submit">
                Sign in
               </Button>
               <a href='/register' className='register'>Create account</a>
             </Form.Item>
        </Form>

     
            
            
            </div>
        </div>

        


    )
}
