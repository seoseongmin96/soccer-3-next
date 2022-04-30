import React from 'react';
import { useDispatch } from 'react-redux';
import tableStyles from '@/styles/Table.module.css'
import { logoutRequest } from '@/modules/auth/login';

const LogoutPage = () => {
    const dispatch = useDispatch()
    return <form onSubmit={
        e => {
            e.preventDefault()
            dispatch(logoutRequest())
        }
    }>
    
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={2}><h1>로그아웃</h1></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={2}><button type="submit">로그아웃</button></td>
                </tr>
            </tbody>
        </table>
        
    </form>
}
export default LogoutPage    