import React from 'react'
import DefaultLayout from '../components/DefaultLayout'

import { Form, Tabs } from 'antd';
import PersonalInfo from '../components/PersonalInfo';


const { TabPane } = Tabs;

function Profile() {
  return (
    <DefaultLayout>
      <div className="update-profile">
        <h2>Update Profile</h2>
        <Form layout="vertical">
        <Tabs defaultActiveKey="1" >
          <TabPane tab="Personal Info" key="1">
            <PersonalInfo/>
          </TabPane>
          <TabPane tab="Skills and Education" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Experience / Project" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        </Form>
      </div>

    </DefaultLayout>

  )
}

export default Profile