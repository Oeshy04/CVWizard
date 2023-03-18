import React from 'react'
import "../../resources/templates.css"
function Template1() {
    const user = JSON.parse(localStorage.getItem("cvwizard-user"))
    return (
        <div className='template1 parent'>
            <div className='top d-flex justify-content-between'>
                <h1>{user.firstName.toupperCase()} {user.lastName.toupperCase()}</h1>
                <div>
                    <p>{user.email}</p>
                    <p>{user.address}</p>
                    <p>{user.mobileNumber}</p>
                </div>
            </div>
            <div className='divider mt-5'></div>
            <div className='objective mt-5'>
                <h3>Objective</h3>
                <hr></hr>
                <p>{user.CareerObjective}</p>
            </div>
            <div className='divider mt-5'></div>
            <div className='education mt-5'>
                {user.education.map((education) => {
                    return <div className='d-flex'>
                            <h6><b>{education.range}</b></h6>
                            <p>{education.qualification} </p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Template1
// <Route path="/templates/:id element={<Templates/>}/>"