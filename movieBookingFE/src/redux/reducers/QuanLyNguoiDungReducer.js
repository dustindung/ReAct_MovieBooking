import { USER_LOGIN } from "../../utility/ConfigWeb";

let userLocal = {};

if (localStorage.getItem(USER_LOGIN)) {
    userLocal = JSON.parse(localStorage.getItem(USER_LOGIN));
}

//Nếu local storage có tồn tại trong userLogin => Chứng tỏ người dùng đã đăng nhập => gán làm giá trị mặc định của redux khi trang vừa load lên

const initialState = {
    userLogin: userLocal
}

export default (state = initialState, { type, action }) => {
    switch (type) {
        case 'DANG_NHAP':{
            state.userLogin = action.userLogin;
            console.log(action);
            return{...state}
        }

        default:
            return state
    }
}
