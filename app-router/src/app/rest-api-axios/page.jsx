"use client";

import axios from "axios";
import { useState,useEffect } from "react";

export default function Axios(){
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        const fetchUsers = async ()  => { 
            try{
                const res = await axios.get ("https://jsonplaceholder.typicode.com/photos");
                setUsers(res.data)//상태 업데이트
            }catch(error){
                console.error("Error",error)
            }finally{
                setLoading(false)//로딩 업데이트 
            }
        }
        fetchUsers()//로딩 완료

    }, [])// 컴포넌트가 마운트 될때만 실행

    if(loading) return <h1>Loading....</h1>// 로딩 중일 때 
    if(!users) return <h1>No Users Fount</h1>//데이터가 없을 때 

    return(
        <>
        <h1>axios</h1>
        {
            users.map((user,id) => {
                return (
                    <div key={id}>
                        <h2>{user.id}</h2>
                        <h3>{user.title}</h3>
                        <h3>{user.email}</h3>
                        <h3>{user.uri}</h3>
                    </div>
                )
            })
        }
        </>
    );
    


}