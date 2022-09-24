import React, { useEffect, useState } from 'react'
import { Button, Form, Input, message, Spin } from 'antd';
import '../resources/authentication.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { url } from './ser';
function Register() {
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [cPasswordClass, setCPasswordClass] = useState('form-control');
    const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

    useEffect(() => {
        if (isCPasswordDirty) {
            if(password.length < 7) {
                message.error("Password length must be more than 8 characters");
            }
            if ( password === cPassword) {
                setShowErrorMessage(false)
                setCPasswordClass('form-control is-valid')
            } else {
                setShowErrorMessage(true)
                setCPasswordClass('form-control is-invalid')
            }
        if (localStorage.getItem('resume-user')) {
                navigate('/home')
            }
        }
    }, [cPassword])

    const handleCPassword = (e) => {
        setCPassword(e.target.value);
        setIsCPasswordDirty(true);
    }
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const onFinish = async (values) => {
        setLoading(true);
        try {
            const result = await axios.post(url+'api/users/register', values)
            setLoading(false);
            console.log(result);
            message.success(result.data.message);
        } catch (error) {
            setLoading(false);
            message.error('Registration failed')
        }
    };
    return (
        <><div>
            <h1 class="heading">Resume Builder</h1>
        </div><div className='bg'>
                <div className="auth-parent">
                    {loading && (<Spin size='Large' />)}
                    <Form layout='vertical' onFinish={onFinish}>

                        <h1>Register</h1>
                        <hr></hr>

                        <Form.Item name='username' label='username'>
                            <Input />
                        </Form.Item>

                        <Form.Item label="password" name="password" className="form-control" id="password" value={password}
                            onChange={(e) => { setPassword(e.target.value); } }>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Confirm password" name="password" className={cPasswordClass} id="confirmPassword" value={cPassword}
                            onChange={handleCPassword}>
                            <Input />
                            {showErrorMessage && isCPasswordDirty ? <div> *Password and confirm password did not match* </div> : " "}
                        </Form.Item>

                        <div className="d-flex align-items-center justify-content-between">

                            <Link to='/login'>Click here to Login</Link>
                            <Button type='primary' htmlType='submit'>Register</Button>
                        </div>
                    </Form>
                </div>
            </div></>
    );
}

export default Register 