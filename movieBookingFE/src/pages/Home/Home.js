import React, { useState } from 'react'
import axios from 'axios'; //Thư viện kết nối BackEnd API

export default function Home(props) {

    const [dsPhim, setDSPhim] = useState([])

    const getFilm = () => {
        axios({
            url: 'http://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?maNhom=GP01',
            method: 'GET',
        }).then(res => {
            console.log('kết quả', res.data);
            //Set lại state dsPhim => function render lại (chạy lại tất cả với dsPhim mang giá trị mới)
            setDSPhim(res.data);    
        }).catch(err => {
            console.log(err.response.date)
        })
    }

    const renderPhim = () => {
        return dsPhim.map((phim, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-left">
                    <img className="card-img-top" src={phim.hinhAnh} alt={phim.hinhAnh} onError={(e)=>{
                        e.target.src="https://picsum.photos/300/300"
                    }} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa}</p>
                    </div>
                </div>

            </div>
        })
    }

    return (
        <div className="container">

            <button onClick={() => {
                getFilm();
            }}>Lấy danh sách phim</button>

            <h3>Danh Sách Phim</h3>

            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )

}
