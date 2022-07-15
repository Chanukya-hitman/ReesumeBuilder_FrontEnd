import { Form, Input } from 'antd'
import React from 'react'

function PersonalInfo() {
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <Form.Item name="firstName" label="FirstName">
                        <Input />
                    </Form.Item>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo