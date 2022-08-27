
import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';

function Achievement() {
  return (
    <div>
            <h4><b>Achievements | Awards | Certifications</b></h4>
            <hr />
            <Form.List name="achievements">
                {(fields, { add, remove }) => (
                    <>
                        <div className="row">
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className="col-md-8">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'list']}
                                            rules={[{ required: true, message: 'Missing Achievements' }]}
                                        >
                                            <Input placeholder="Achievements | Awards | Certifications" />
                                        </Form.Item>
                                    </div>

                                    
                                    <div className="col-md-2">
                                        <MinusCircleOutlined style={{fontSize:25,color:'tomato'}} onClick={() => remove(name)} />
                                    </div>

                                </>
                            ))}
                        </div>
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add 
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </div>
  )
}

export default Achievement
