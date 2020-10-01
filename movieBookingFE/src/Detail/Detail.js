import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { layChiTietPhimAction } from '../redux/actions/QuanLyPhimAction';
import moment from 'moment';
import { NavLink } from 'react-router-dom';


export default function Detail(props) {

    //Kết nối với reducer lấy dữ liệu phim về thông qua hook useSelector
    const { chiTietPhim, dsPhim } = useSelector(state => state.QuanLyPhimReducer);

    console.log(chiTietPhim);
    //ứng với this.props.dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(props.match.params.id)
        dispatch(layChiTietPhimAction(props.match.params.id));
    }, [])



    return (

        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img src={chiTietPhim.hinhAnh} alt={chiTietPhim.hinhAnh} width={200} onError={(e) => {
                        e.target.src = "https://picsum.photos/300/300"
                    }}></img>
                </div>
                <div className="col-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Tên Phim</th>
                                <th>{chiTietPhim.tenPhim}</th>
                            </tr>
                            <tr>
                                <th>Mô tả</th>
                                <th>{chiTietPhim.moTa}</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>

            <h1 className="mt-5 mb-5">Thông tin lịch chiếu</h1>
                <div className="row">
                    <div className="col-3">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            {/* ở lần đầu tiên, state sẽ bị rỗng, nên hàm map sẽ k chạy dc, ES6 có toán tử ?, nếu có thì hàm sẽ được chạy */}
                            {
                                chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {

                                    let active = index === 0 ? 'active' : '';

                                    return <a key={index} className={`nav-link ${active}`} id="v-pills-home-tab" data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
                                        <img src={heThongRap.logo} width={50} height={50}></img> {heThongRap.tenHeThongRap}
                                    </a>
                                })
                            }
                            
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="tab-content" id="v-pills-tabContent">

                            {
                                chiTietPhim.heThongRapChieu?.map((heThongRap,index)=>{

                                    let active = index === 0 ? 'active' : '';

                                    return <div key={index} className={`tab-pane fade show ${active}`} id={heThongRap.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        
                                        {heThongRap.cumRapChieu?.map((cumRap,index)=>{
                                            return <Fragment key={index}>
                                                <h3>{cumRap.tenCumRap}</h3>
                                                <div className="row">
                                                {cumRap.lichChieuPhim?.map((lichChieu, index)=>{
                                                    return <NavLink to={`/booking/${lichChieu.maLichChieu}`} className="col-3" key={index}>
                                                        { moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                    </NavLink>
                                                })}
                                                </div>
                                            </Fragment>
                                        })}
                                        
                                        
                                    </div>
                                })
                            }

                            
                            {/* <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div> */}
                        </div>
                    </div>
                </div>

        </div>
    )
}

