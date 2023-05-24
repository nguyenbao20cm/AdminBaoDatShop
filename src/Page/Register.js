import React, { Fragment, useState } from 'react'
export default function Register() {
    const [name, setname] = useState("");

    return (
        <Fragment>
            <div>Registration</div>
            <label>Tên đăng nhập</label>
            <input type='text' id="txtname" placeholder='Enter Name'></input><br></br>
            <label>Mật khẩu</label>
            <input type='text' id="txtname" placeholder='Enter Name'></input><br></br>
            <label>Email</label>
            <input type='text' id="txtname" placeholder='Enter Name'></input><br></br>
            <label>Số điện thoại</label>
            <input type='text' id="txtname" placeholder='Enter Name'></input><br></br>
            <label>Địa chỉ</label>
            <input type='text' id="txtname" placeholder='Enter Name'></input><br></br>
            <label>Họ và tên</label>
            <input type='text' id="txtname" placeholder='Enter Name'></input><br></br>
            <label>Ảnh đại diên</label>
            <input type='file' id="txtname" placeholder='Enter Name'></input><br></br>
            <button>Save</button>
        </Fragment>
    )
}