import React, { useState } from 'react';
import Axios from 'axios';

function Signup() {
    const url ="http://localhost:5000/api/user/signup"
    const [data, setData] = useState({
        fullName: "",
        phone: "",
        password: "",
        email: ""
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url, {
            fullName: data.fullName,
            phone: data.phone,
            password: data.password,
            email: data.email
        })
            .then(res => {
                console.log(res.data)
            })

    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
                <input onChange={(e)=>handle(e)} id="fullName" value={data.fullName} placeholder="fullname" type="text"></input>
                <input onChange={(e)=>handle(e)} id="phone" value={data.phone} placeholder="phone" type="text"></input>
                <input onChange={(e)=>handle(e)} id="password" value={data.password} placeholder="password" type="password"></input>
                <input onChange={(e)=>handle(e)} id="email" value={data.email} placeholder="email" type="text"></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Signup;