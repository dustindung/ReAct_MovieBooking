import axios from 'axios';
import { DOMAIN, TOKEN, USER_LOGIN } from '../../utility/ConfigWeb';


export const dangNhapApiAction = (userLogin, history) => {
    return async dispatch => {
        console.log(userLogin)
        try {
            let { data, status } = await axios({
                url: DOMAIN + '/api/quanlynguoidung/dangnhap',
                method: 'POST',
                data: {
                    taiKhoan: userLogin.userName,
                    matKhau: userLogin.passWord,
                }
            });

            debugger
            if (status === 200) {

                //Sau khi gọi API => dispatch lên redux

                // dispatch({
                //     type: 'DANG_NHAP',
                //     user: data,
                // })
            }

            //Lưu vào localStorage
            localStorage.setItem(USER_LOGIN, JSON.stringify(data));

            localStorage.setItem(TOKEN, data.accessToken);

            history.push("/");

        } catch (err) {
            console.log(err);
        }

    }
}