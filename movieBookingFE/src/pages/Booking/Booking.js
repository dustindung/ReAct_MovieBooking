import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Booking() {

    //Nếu có login thì cho phép đặt vé, không có thì chuyển hướng sang trang đăng nhập
    if(localStorage.getItem('userLogin')){
        return (
            <div>
                Đặt vé
            </div>
        )
    }
    return <Redirect to="/login"/>

    
}
