import React, { useState } from 'react'

export default function Login(props) {

    // const [state, setState] = useState({
    //     userLogin: {
    //         userName: '',
    //         passWord: '',
    //     }
    // });
    const [userLogin, setUserLogin] = useState({
        userName: '',
        passWord: '',
    })

    /*
    this.state = {userLogin:{
        userName: '',
        passWord: '',
    }}
    */

    console.log(userLogin)

    const handleChange = (e) => {
        const {value, name} = e.target;
        // setState({
        //     userLogin: {...useState.userLogin, [name]: value}
        // })
        setUserLogin({
            ...userLogin,
            [name]: value,
        })
    }

    const login = (e) => {
        e.preventDefault(); //Ngăn sự kiện sau khi submit reload lại trang
        //Kiểm tra userName, passWord = cybersoft => Chuyển về trước đó, ngược lại báo lỗi
        if(userLogin.userName === 'cybersoft' && userLogin.passWord === 'cybersoft'){
            //props.history.goBack(); 
            //goBack chuyển hướng trang trước link đến trang này

            props.history.push('/home'); 
            //chuyển hướng đến trang (path) chỉ định => home

            //props.history.replace('/home'); 
            //thay đổi thành route tương ứng

        } else {
            alert('Login fail !')
        }
    };

    return (
        <form className="container" onSubmit={login}>
            <h3 className="display-4 text-center">Login</h3>
            <div className="form-group">
                <p>Username: </p>
                <input name="userName" className="form-control" onChange={handleChange}></input>
            </div>
            <div className="form-group">
                <p>Password: </p>
                <input name="passWord" className="form-control" onChange={handleChange}></input>
            </div>
            <div className="form-group">
                <button className="btn btn-success" type="submit">Login</button>
            </div>
        </form>
    )
}
