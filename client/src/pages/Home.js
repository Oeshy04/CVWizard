import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout"

function Home(){
    const user = JSON.parse(localStorage.getItem("CVWizard-user"));
    return(
        
        <DefaultLayout>
            <h1 style={{textAlign:'center'}}>Hello, {user.username}</h1>
            <Button><Link to="/profile" className="container"  style={{textAlign: "center", border: '7px',  width: "300px",  height: "200px",  paddingTop:'100px'}} >Make Your CV</Link></Button>
        </DefaultLayout>
    )
}
export default Home