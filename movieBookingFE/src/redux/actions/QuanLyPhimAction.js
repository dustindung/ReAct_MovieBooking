import axios from 'axios';
import { LAY_CHI_TIET_PHIM, LAY_DANH_SACH_PHIM } from '../constants/QuanLyPhimConstant';

//Action có 2 loại:

// 1) là action bình thường



// 2) là action async (các action dùng để gọi api)

// export const layDanhSachPhimApiAction = () => {
//     //Thay vì return về object => middleware thunk cho phép mình return về 1 function có tham số là hàm dispatch
//     return dispatch => {
//         axios({
//             url: 'http://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?maNhom=GP01',
//             method: 'GET',
//         }).then(res => {
//             console.log('kết quả', res.data);
//             //dispatch lần 1 tại component để gọi action này thực thi
//             //dispatch lần 2 sau khi có kết quả từ API lấy dữ liệu dispatch lên reducer
//             const action = {
//                 type: LAY_DANH_SACH_PHIM,
//                 dsPhim: res.data
//             }
//             dispatch(action);

//         }).catch(err => {
//             console.log(err.response.date)
//         })
//     }
// }

export const layDanhSachPhimApiAction = () => {
    //Thay vì return về object => middleware thunk cho phép mình return về 1 function có tham số là hàm dispatch
    return async dispatch => {
        const {data} = await axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?maNhom=GP01',
            method: 'GET',
        });
        //Sau khi lấy dữ liệu từ BE về sử dụng hàm dispatch đưa dữ liệu lên reducer
        const action = {
            type: LAY_DANH_SACH_PHIM,
            dsPhim: data
        }
        dispatch(action);
    }
}

export const layChiTietPhimAction = (maPhim) => {
    //Thay vì return về object => middleware thunk cho phép mình return về 1 function có tham số là hàm dispatch
    return async dispatch => {
        const {data} = await axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
            method: 'GET',
        });
        //Sau khi lấy dữ liệu từ BE về sử dụng hàm dispatch đưa dữ liệu lên reducer
        const action = {
            type: LAY_CHI_TIET_PHIM,
            chiTietPhim: data
        }
        dispatch(action);
    }
}



