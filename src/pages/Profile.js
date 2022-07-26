import React, { useState } from 'react'
import DefaultLayout from '../components/DefaultLayout'

import { Button, Form, message, Spin, Tabs } from 'antd';
import PersonalInfo from '../components/PersonalInfo';
import SkillsEducation from '../components/SkillsEducation';
import ExperienceProjects from '../components/ExperienceProjects';
import axios from 'axios'


const { TabPane } = Tabs;

function Profile() {
  const [loading,setLoading]=useState(false)
  const onFinish = async (values) => {
    setLoading(true);
    try {
        const result = await axios.post('/api/users/update', values)
        setLoading(false);
        console.log(result);
        message.success(result.data.message);
    } catch (error) {
        setLoading(false);
        message.error('Registration failed')
    }
};

  return (
    <DefaultLayout>
      {loading && <Spin size='large'></Spin>}
      <div className="update-profile">
        <h2>Update Profile</h2>
        <Form layout="vertical" onFinish={onFinish}>
          <Tabs defaultActiveKey="1" >
            <TabPane tab="Personal Info" key="1">
              <PersonalInfo />
            </TabPane>
            <TabPane tab="Skills and Education" key="2">
              <SkillsEducation />
            </TabPane>
            <TabPane tab="Experience / Project" key="3">
              <ExperienceProjects />
            </TabPane>
          </Tabs>
          <Button htmlType="submit">UPDATE</Button>
        </Form>
      </div>

    </DefaultLayout>

  )
}

export default Profile