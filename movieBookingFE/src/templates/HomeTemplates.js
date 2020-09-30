import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header/Header';

//Fragment về mặt lý thuyết là như thẻ div, nhưng k hiện lên giao diện, như 1 thẻ tàng hình, sinh ra dùng để bọc nội dung lại
//Đây là HOC

const HomeLayout = (props) => {
    return <Fragment>
        <Header></Header>
        {props.children}
    </Fragment>
}

export const HomeTemplate = (props) => {
    let { exact, path, Component } = props
    return <Route exact path={path} render={(propsRoute) => {
        return <HomeLayout>
            <Component {...propsRoute} />
        </HomeLayout>
    }} />
}

// export const HomeTemplate = ({Component, ...restProps}) => {

//     return <Route {...restProps} render={(propsRoute) => {
//         return <HomeLayout>
//             <Component {...propsRoute} />
//         </HomeLayout>
//     }} />
// }