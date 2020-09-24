import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { layChiTietPhimAction } from '../redux/actions/QuanLyPhimAction';

export default function Detail(props) {

    //Kết nối với reducer lấy dữ liệu phim về thông qua hook useSelector
    const { chiTietPhim, dsPhim } = useSelector(state => state.QuanLyPhimReducer);

    console.log(chiTietPhim);
    //ứng với this.props.dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(layChiTietPhimAction(props.match.params.id));
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img src={chiTietPhim.hinhAnh} alt={chiTietPhim.hinhAnh}></img>
                </div>
                <div className="col-8"></div>
            </div>
        </div>
    )
}

