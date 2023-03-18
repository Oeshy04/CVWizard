import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { Form, Tabs, Button } from 'antd';
import PersonalInfo from '../components/PersonalInfo';
import SkillsEducation from '../components/SkillsEducation';
import ExperienceProjects from '../components/ExperienceProjects';
const {TabPane} = Tabs;
function Profile() {
  return (
    <DefaultLayout>
    <div className="update-profile">
        <h2>Update Profile</h2>
        <Form layout="vertical" onFinish={(values)=>console.log(values)}>
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
