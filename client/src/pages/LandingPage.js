import { Button } from 'antd/lib/radio';
import React from 'react';
import { Link } from 'react-router-dom';
import "../resources/landingpage.css"

const LandingPage = () => {
    return (
        <div>
            <div className="landing-page">
                <div className='header' ><h1 style={{color:'white', textAlign:'center'}}>CVWizard</h1>
                    <button className='btn-primary' ><a href='/login' style={{textDecoration:'none',color:'white'}}>Login</a></button>
                </div>
            </div>
            <br></br>
            <h2 className='centerit'>Create your perfect CV today</h2>

            <div className="body" style={{display:'inline'}}>
                
                <div className='centerit'>
                    <Button><Link to="/home" className="btn-primary" >Get started now</Link></Button>
                </div>
                <div >
                    <img src='https://media.istockphoto.com/id/1288965449/vector/graphic-designer-creating-logo-design-vector-flat-isometric-illustration.jpg?s=612x612&w=is&k=20&c=mSS4OyLDUDRRi1RG_30besw_SGcZ7sxj4UsdXgGStX8='></img>
                </div>

            </div>
        </div>
    );
};

export default LandingPage;
