import React, { useEffect, useState } from 'react'
import axios from 'axios'; //Thư viện kết nối BackEnd API
import {layDanhSachPhimApiAction} from '../../redux/actions/QuanLyPhimAction'
import {connect, useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom'

function Home(props) {

    //Dùng useSelector thay cho mapStateToProps lấy danh sách phim từ reducer về
    const danhSachPhim = useSelector(state => state.QuanLyPhimReducer.dsPhim);

    //useDispatch thay thế cho this.props.dispatch bên react component
    const dispatch = useDispatch();

    const [dsPhim, setDSPhim] = useState([])

    // const getFilm = () => {
    //     axios({
    //         url: 'http://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?maNhom=GP01',
    //         method: 'GET',
    //     }).then(res => {
    //         console.log('kết quả', res.data);
    //         //Set lại state dsPhim => function render lại (chạy lại tất cả với dsPhim mang giá trị mới)
    //         setDSPhim(res.data);
    //     }).catch(err => {
    //         console.log(err.response.date)
    //     })
    // }

    const getFilm = async () => {

        dispatch(layDanhSachPhimApiAction());
        // getFilmsApi()
    }

    useEffect(() => {
        // axios({
        //     url: 'http://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?maNhom=GP01',
        //     method: 'GET',
        // }).then(res => {
        //     console.log('kết quả', res.data);
        //     //Set lại state dsPhim => function render lại (chạy lại tất cả với dsPhim mang giá trị mới)
        //     setDSPhim(res.data);
        // }).catch(err => {
        //     console.log(err.response.date)
        // })
    }, [])
    // Tham số thứ 2 useEffect là mảng rỗng => ứng với componentDidMount của react LifeCycle

    const getFilmsApi = async () => { //async function là function bất đồng bộ, khi gọi nó, các hàm tiếp theo vẫn tiếp tục thực hiện
        try {
            let { data, status } = await axios({ //Lệnh await bắt buộc lệnh phía sau, phải đợi đến khi hàm này thực thi xong, thì mới làm tiếp
                url: 'http://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?maNhom=GP01',
                method: 'GET',
            });

            if (status === 200) {
                setDSPhim(data);
            }


        } catch (ex) {
            console.log('ex', ex)
            //Chỉ cần bên trong xử lý xảy ra lỗi => Không làm nữa mà làm catch
        }

        //với hàm asyns, thì tất cả đều phải gọi lại thì mới dùng được
    }

    const renderPhim = () => {
        console.log('dsPhim',props.dsPhim)

        return props.dsPhim.map((phim, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-left">
                    <img className="card-img-top" src={phim.hinhAnh} alt={phim.hinhAnh} onError={(e) => {
                        e.target.src = "https://picsum.photos/300/300"
                    }} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa}</p>
                        <NavLink className="btn btn-success" to={`/detail/${phim.maPhim}`}>ĐẶT VÉ</NavLink>
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

//Kết nối với rootReducer lấy giá trị state về component
const mapStateToProps = (state) => {
    return {
        dsPhim: state.QuanLyPhimReducer.dsPhim
    }
}

export default connect (mapStateToProps)(Home);