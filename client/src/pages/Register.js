import React from "react";
import { Form,Input,Button,Checkbox, message } from "antd";
import { Link } from "react-router-dom";
import "./resources/authentication.css";
import axios from "axios";

function Register(){

    const onFinish = async(values)=>{
       try{
        await axios.post('/api/user/register', values)
        message.success('Registered successfully')
       } catch(error){
        message.error("Registration failed")
    } 
};
    return(
        <div className="parent">
            <Form layout="vertical" onFinish={onFinish}>
                <h1>Register</h1>
                <hr></hr>
                <Form.Item name="username" label="Username">
                    <Input/>
                </Form.Item>

                <Form.Item name="password" label="Password">
                    <Input/>
                </Form.Item>

                <Form.Item name="cpassword" label="Confirm Password">
                    <Input/>
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