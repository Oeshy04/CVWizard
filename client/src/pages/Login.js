import React,{ useState,useEffect } from "react";
import { Form,Input,Button,Checkbox,message,Spin } from "antd";
import "../resources/authentication.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import DefaultLayout from "../components/DefaultLayout";


function Register(){
    const [loading,setLoading]=useState(false);
    const navigate = useNavigate();
    const onFinish = async(values)=>{
        setLoading(true)
        try{
         const user= await axios.post('api/user/login', values)
         message.success("Logged in successfully");
         localStorage.setItem('CVWizard-user',JSON.stringify(user.data))
         setLoading(false)
        navigate('/home')
        } catch(error){
            setLoading(false)
         message.error("Login failed");
     } 
 };
 useEffect(()=>{
    if(localStorage.getItem('CVWizard-user'))
    {
      navigate('/mainpage')
    }
  })
    return(
        <div>
            
        <div className="parent">
            
            {loading && (<Spin size="large"/>)}
            <Form layout="vertical" onFinish={onFinish}>
                <p style={{display:'inline'}}><h1 >Login to <h1 style={{color:'teal'}}>CVWizard</h1></h1></p>
                <hr></hr>
                <Form.Item name="username" label="Username">
                    <Input/>
                </Form.Item>

                <Form.Item name="password" label="Password">
                    <Input type="password"/>
                </Form.Item>
                <div className="d-flex align-items-center justify-content-between">

                <Link to='/register'>Click here to Register</Link>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
                </div>
            </Form>
            </div>
            </div>
    );
}
export default Register