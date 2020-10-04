import React, { useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { datVeActionAPI, layDanhSachGheAPI } from '../../redux/actions/QuanLyPhongVeAction';

export default function Booking(props) {

    const dispatch = useDispatch();
    const { danhSachGhe } = useSelector((state) => state.QuanLyPhongVeReducer);
    const { maLichChieu } = useParams();

    // console.log('maLichChieu', maLichChieu)

    // console.log('danhSachGhe', danhSachGhe);

    useEffect(() => {
        //call api
        dispatch(layDanhSachGheAPI(maLichChieu))
    }, []);

    const handleClassName = (ghe) => {
        if (ghe.daDat) {
            // đã đặt
            return "btn bg-danger text-white m-2";
        } else {

            if (ghe.dangChon) {
                // đang chọn
                return "btn bg-info text-white m-2"
            } else {
                // chưa đặt
                return "btn bg-dark text-white m-2";
            }

        }
    }

    const renderDanhSachGhe = () => {
        return danhSachGhe.map((ghe, index) => {
            return <button className={handleClassName(ghe)} disabled={ghe.daDat} key={index} onClick={() => {
                dispatch({
                    type: "TOOGLE_GHE",
                    ghe,
                })
            }}>{ghe.tenGhe}</button>
        })
    };

    const handleBooking = () => {
        // Call API 
        let gheDaChon = danhSachGhe.filter((ghe, index) => ghe.dangChon);

        gheDaChon = gheDaChon.map((ghe) => ({ 
            maGhe: ghe.maGhe, 
            giaVe: ghe.giaVe }));

        console.log('gheDaChon', gheDaChon)

        dispatch(datVeActionAPI(maLichChieu, gheDaChon));
    };

    //Nếu có login thì cho phép đặt vé, không có thì chuyển hướng sang trang đăng nhập
    if (localStorage.getItem('userLogin')) {
        return (
            <div className="text-center">
                <h2>Danh Sách Ghế</h2>
                <div>
                    {renderDanhSachGhe()}
                </div>
                <div>
                    <button className="btn btn-success" onClick={handleBooking}>Đặt Ghế</button>
                </div>
            </div>
        )
    }
    return <Redirect to="/login" />


}
