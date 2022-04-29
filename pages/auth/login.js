import React, {useState} from 'react'
import { connect, useDispatch } from 'react-redux' 
import { login } from '@/modules/auth/register'
import { Login } from '@/components/auth/Login'
import { loginRequest,loginCancelled,logoutRequest } from '@/modules/auth/login';

const LoginPage = () => {
    const [user, setUser] =useState({
        userid:'', password:''
    })
    const dispatch = useDispatch()
    const onChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        setUser({...user,[name]: value})
    }
    const onSubmit = e => {
        e.preventDefault()
        alert('로그인 정보: '+JSON.stringify(user))
        dispatch(loginRequest(user))
    }
    return (
        <Login onChange={onChange} onSubmit={onSubmit}/>
    );
};

const mapStateToProps = state => ({})
const loginActions = {loginRequest,loginCancelled,logoutRequest}
export default connect(mapStateToProps, loginActions)(LoginPage);