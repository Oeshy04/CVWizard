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
      navigate('/home')
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

                <Form.Item name="password" label="Password">
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