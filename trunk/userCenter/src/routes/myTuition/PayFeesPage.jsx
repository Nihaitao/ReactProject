import React from 'react';
import { connect } from 'dva';
import styles from '../IndexPage.less';

import { Layout, Menu, Icon, Row, Col } from 'antd';
const { Header, Sider, Content } = Layout;

import PayFeesNow from '../../components/myTuition/payFeesNow';


class PayFeesPage extends React.Component {
    state = {
        tabId: 1
    };

    render() {
        
        return (
            <div>
                <PayFeesNow />
            </div>
        );
    }
}


export default PayFeesPage;
