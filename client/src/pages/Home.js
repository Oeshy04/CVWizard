import React from "react";
<<<<<<< HEAD
import DefaultLayout from "../components/DefaultLayout";
import templateimg from "../resources/templates/template1.png";
import template2img from "../resources/templates/template2.png";
import "../resources/templates.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const templates = [
    {
      title: "Simple Resume",
      image: templateimg,
    },
    {
      title: "Highlighted Sections Resume",
      image: template2img,
    },
  ];
  return (
    <DefaultLayout>
      <div className="row home">
        {templates.map((template, index) => {
          return (
            <div className="col-md-4">
              <div className="template">
                <img
                  src={template.image}
                  height="400"
                  alt=""
                  style={{ width: "100%" }}
                />
                <div className="text">
                  <p>{template.title}</p>
                  <button onClick={() => navigate('/templates/1')}>
                    TRY
                  </button>
                </div>
              </div>
=======
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
>>>>>>> e74f049d38c3babc5b43e60a9aa1f5681ecf1cfe
            </div>
          );
        })}
      </div>
    </DefaultLayout>
  );
}

export default Home;