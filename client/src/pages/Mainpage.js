import { Button } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout"
import '../resources/templates.css'

function Mainpage(){
    const user = JSON.parse(localStorage.getItem("CVWizard-user"));
    return(
        
        <DefaultLayout>
            <h1 style={{textAlign:'center'}}>Hello, {user.username}</h1>
            <h3 style={{textAlign:'center'}}>Let's Get You Started!</h3>
            <Button><Link to="/home" className="container">Make Your CV</Link></Button>
        </DefaultLayout>
    )
}
export default Mainpage