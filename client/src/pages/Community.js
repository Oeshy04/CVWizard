import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout"

function Home(){
    const user = JSON.parse(localStorage.getItem("CVWizard-user"));
    return(
        
        <DefaultLayout> 
            <div>
        <label>
        Add Title</label><br></br>
        <textarea name="postContent" rows={2} cols={70}/><br></br>
      <label>
        Write your post</label><br></br>
        <textarea name="postContent" rows={5} cols={70}/><br></br>
        <label><br></br>
      Who can comment on your post &nbsp;
      <select name="selectedFruit">
      <option value="Anybody with this link"></option>
        <option value="Anybody with this link">Anybody with this link</option>
        <option value="Only your followers">Only your followers</option>
      </select>
      </label><br></br><br></br>
        <Button htmlType="submit"style={{color:'white'}}>Post</Button></div>
      
        
        </DefaultLayout>
    )
}
export default Home