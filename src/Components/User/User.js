import React, { useState } from 'react';
import './User.css';
const User = (props) => {
    const { name, picture, email, website, phone } = props.user;
    const [mobile, setMobile]=useState('');
    const showPhone=()=>setMobile(phone);
    const addMember=props.addMember;
    const fullName=name.first + ' ' + name.last;
    return (
        <div className="user-container">
            <div>
                <img src={picture.medium} alt="" />
            </div>
            <div className='user-info'>
                <h1>I am {name.first + ' ' + name.last}</h1>
                <p>My Email: {email}</p>
                <p><a target="_blank" href={website}>Learn about me</a></p>
                <p>Phone: {mobile}</p>
                <button onClick={showPhone} className='btn'>Show contact number</button>
                <button onClick={()=>addMember(fullName)} className='btn'>Add me</button>
            </div>
        </div>
    );
};

export default User;