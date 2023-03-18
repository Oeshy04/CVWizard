import React from "react";
import { Form,Input,Button,Checkbox,message } from "antd";
import "../resources/authentication.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register(){
    const [loading,setLoading]=useState(false);
    const navigate = useNavigate()
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
    return(
        <div className="parent">
            {loading && (<Spin size="large"/>)}
            <Form layout="vertical" onFinish={onFinish}>
                <h1>Login</h1>
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
    )
}
export default Register