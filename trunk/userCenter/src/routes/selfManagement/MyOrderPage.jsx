import React from 'react';
import { connect } from 'dva';
import styles from '../IndexPage.less';

import { Layout, Menu, Icon, Row, Col } from 'antd';
const { Header, Sider, Content } = Layout;

import MyOrderItem from '../../components/selfManagement/myOrderItem';


class MyOrderPage extends React.Component {

    render() {
        
        return (
            <div>
                <MyOrderItem />
            </div>
        );
    }
}


export default MyOrderPage;
