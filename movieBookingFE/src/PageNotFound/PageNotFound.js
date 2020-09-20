import React from 'react'

export default function PageNotFound(props) {
    return (
        <div>
            Không tìm thấy trang: {props.location.pathname}
            
            <button onClick={()=>{
                props.history.replace('home');
            }} className="btn btn-danger">Bấm vào đây trở về trang chủ</button>
        </div>
    )
}
