import { Form, Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React from 'react'

function Declaration() {
  return (
    <div>
      <div className="col-md-12">
        <Form.Item name="declaration" label="Declaration" rules={[{ required: true }]}>
          <TextArea />
        </Form.Item>
      </div>
    </div>
  )
}

export default Declaration