import './LoginPage.css'
import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

function LoginPage() {
   
  const [username,Setusername]=useState('');
  const [password,Setpassword]=useState('');

  const forgetPass = ()=>{
    window.location.href = '/ChangePassword';
  }

  const login = ()=>{
    Axios.post('http://localhost:3001/login',{
      username:username,
      password:password
    }).then((res) => {
      if(res.data.success){
        console.log(res.data);
        if(res.data.data[0].flogin === 1 && res.data.data[0].role === 'admin'){
          alert('Admin Login Successful');
          localStorage.setItem('id',res.data.data[0].Emp_id);
          localStorage.setItem('role','Admin');
          window.location.href = '/AddCompetencyArea';
        }
        else if (res.data.data[0].flogin === 1 && res.data.data[0].role === 'Lead'){
          alert('Lead Login Successful');
          localStorage.setItem('id',res.data.data[0].Emp_id);
          localStorage.setItem('role','Lead');
          window.location.href = '/leadAssessment';
        }
        else if(res.data.data[0].flogin === 1 && res.data.data[0].role === 'Developer'){
          alert('Developer Login Successful');
          localStorage.setItem('role','Developer');
          localStorage.setItem('id',res.data.data[0].Emp_id);
          window.location.href = '/selfAssessment';

        }
        // if(res.data.data[0].flogin === 0 && res.data.data[0].role === 'admin'){
        //   alert('Hello Admin!');
        // } 
        else if(res.data.data[0].flogin === 0){
        alert('First Time Login.\n Please change Password to continue..!!');
        localStorage.setItem('id',res.data.data[0].Emp_id);
        window.location.href = '/ChangePassword'; 
        }
                   
      }
      else{
        alert("Failure");
      }
    });
};

  return (
        <div>
          <div className="outerbox">
          <img src="images/back.jpg" className="back" alt="background"/>
            <div className="login-box">
      <img src="images/avatar.png" className="avatar" alt="avatar"/>
        <h1>Login Here</h1>
            <p id="input1">Username</p>
            <input type="txt" name="username" placeholder="Enter Username" 
            onChange={(e)=>{
              Setusername(e.target.value);
            }}
            />
            <p id="input2">Password</p>
            <input  id="pass" 
            name="password" type="password" placeholder="Enter Password"
            onChange={(e)=>{
              Setpassword(e.target.value);
            }}/>
            <button type="submit" onClick={login}>Login</button><br/>
            <button id="forget" onClick={forgetPass}>Forget Password</button>
            </div>
        </div>
      </div>
    )
}

export default LoginPage;


// if(res.data.data[0].flogin === 0 && res.data.data[0].role === 'admin'){
//           alert('Hello Admin!');
//         } 
//         else if(res.data.data[0].flogin === 0 && res.data.data[0].role === 'Lead'){
//           alert('Hello Lead!');
//         }
//         else{
//           alert('Hello Developer!');
//         }