import React from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';

function Intrest() {
    return (
        <div>
            <h4><b>Areas of Intrest</b></h4>
            <hr />
            <Form.List name="intrests">
                {(fields, { add, remove }) => (
                    <>
                        <div className="row">
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className="col-md-8">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'area']}
                                            rules={[{ required: true, message: 'Missing Intrests' }]}
                                        >
                                            <Input placeholder="Area of Intrest" />
                                        </Form.Item>
                                    </div>


                                    <div className="col-md-2">
                                        <MinusCircleOutlined style={{ fontSize: 25, color: 'tomato' }} onClick={() => remove(name)} />
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

export default Intrest