import { Layout } from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import tableStyles from '../styles/Table.module.css'

export default function Home(){
    useEffect(() => {
        const loginUser = localStorage.getItem("loginUser")
        const user = JSON.parse(loginUser)
        if (loginUser === null) {
            axios
                .get("http://localhost:5000/api/now")
                .then((res) => {
                    var data = res.data;
                    document
                        .getElementById("timeZone")
                        .innerHTML = '<h1>현재시간: ' + data.now + '<h1>'
                });
        } else {
          console.log(JSON.stringify(user))
            document
                .getElementById("timeZone")
                .innerHTML = '<h1>환영합니다: ' + user.user.name + '<h1>'
        }
    }, []);
  return (
    <table className={tableStyles.table}>
        <thead>
            <tr>
                <th>
                    <h2>HOME</h2>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr >
                <td>
                    <div id="timeZone">현재시간</div>
                </td>
            </tr>
        </tbody>
    </table>
  )
}

