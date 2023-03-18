import React, {useState} from 'react';
import DefaultLayout from '../components/DefaultLayout'
import { Form, Tabs, Button,message,Spin} from 'antd';
import PersonalInfo from '../components/PersonalInfo';
import SkillsEducation from '../components/SkillsEducation';
import ExperienceProjects from '../components/ExperienceProjects';
import axios from "axios";

const {TabPane} = Tabs;
function Profile() {

  const [loading,setLoading]=useState(false);
  const onFinish = async(values)=>{
    setLoading(true)
   try{
    await axios.post('api/user/register', values)
    setLoading(false);
    message.success('Registered successfully')
   } catch(error){
    setLoading(false);
    message.error("Registration failed")
} 
};
  return (
    <DefaultLayout>
       {loading && (<Spin size="large"/>)}
    <div className="update-profile">
        <h2>Update Profile</h2>
        <Form layout="vertical" onFinish={onFinish}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Personal Info" key="1">
            <PersonalInfo />
            </TabPane>
            <TabPane tab="Skills and Education" key="2">
             <SkillsEducation /> 
            </TabPane>
            <TabPane tab="Experience / Projects" key="3">
            <ExperienceProjects /> 
            </TabPane>
          </Tabs>
          <Button htmlType="submit">UPDATE</Button>
        </Form>
      </div>
    </DefaultLayout>
  )
}

export default Profile;
