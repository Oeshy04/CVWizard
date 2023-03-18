import { Button } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import templateimg from "../resources/templates/template1.png"
import template2img from "../resources/templates/template2.png"
import DefaultLayout from "../components/DefaultLayout"
import '../resources/templates.css'

function Home(){
    const navigate = useNavigate();
    const templates=[
        {
            title:'Academia',
            image: templateimg
        },
        {
          title: "Industry",
          image: template2img,
        },
    ]
    const user = JSON.parse(localStorage.getItem("CVWizard-user"));
    return(
        
        <DefaultLayout>
            <div className="row home">
                {templates.map((template, index)=>{
                    return <div className="col-md-4">
                        <div className="template">
                        <img src={template.image} height='400' alt=""/>
                        <div className="text">
                        <p>{template.title}</p>
                        <button onClick={() => navigate(`/templates/${index + 1}`)}>Try</button>
                        </div>
                        </div>
                    </div>
                })}
            </div>
            {/* <h1 style={{textAlign:'center'}}>Hello, {user.username}</h1>
            <Button><Link to="/profile" className="container">Make Your CV</Link></Button> */}
        </DefaultLayout>
    )
}
export default Home