import React, { useState,useEffect } from "react";
import { Form,Input,Button,Checkbox, message, Spin } from "antd";
import { Link,useNavigate } from "react-router-dom";
import "../resources/authentication.css";
import axios from "axios";

function Register(){
    const [loading,setLoading]=useState(false);
    const navigate = useNavigate();
    const onFinish = async(values)=>{
        setLoading(true)
       try{
        await axios.post('api/user/register', values)
        setLoading(false);
        message.success('Registered successfully')
       } catch(error){
        setLoading(false);
        message.error("Registration failed")
    } 
};
useEffect(()=>{
    if(localStorage.getItem('CVWizard-user'))
    {
      navigate('/mainpage')
    }
  })
    return(
        <div className="parent">
            {loading && (<Spin size="large"/>)}
            <Form layout="vertical" onFinish={onFinish}>
            <p style={{display:'inline'}}><h1 >Register to <h1 style={{color:'teal'}}>CVWizard</h1></h1></p>
                <hr></hr>
                <Form.Item name="username" label="Username">
                    <Input/>
                </Form.Item>

                <Form.Item name="password" label="Password"
                rules={[
                    { required: true },
                    { min: 8, message: 'Password must be at least 8 characters long' },
                    { max: 16 },
                    { pattern: /(?=.*[A-Z])/g, message: 'Password must contain at least one uppercase letter' },
                    { pattern: /(?=.*[a-z])/g, message: 'one lowercase letter' },
                    { pattern: /(?=.*[0-9])/g, message: 'one number' },
                    { pattern: /(?=.*[!@#$%^&*])/g, message: 'one special character' },
                  ]}>
                    <Input type="password"/>
                </Form.Item>

                <Form.Item name="cpassword" label="Confirm Password">
                    <Input type="password"/>
                </Form.Item>

                <div className="d-flex align-items-center justify-content-between">

                <Link to='/login'>Click here to Login</Link>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
                </div>
            </Form>
            
        </div>
    )
}
export default Register