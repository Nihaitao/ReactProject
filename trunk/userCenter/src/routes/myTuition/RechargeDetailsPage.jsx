import React from 'react';
import { connect } from 'dva';
import styles from '../IndexPage.less';

import { Layout, Menu, Icon, Row, Col } from 'antd';
const { Header, Sider, Content } = Layout;

import RechargeDetails from '../../components/myTuition/rechargeDetails';


class RechargeDetailsPage extends React.Component {
    state = {
        
    };

    render() {
        
        return (
            <div>
                <RechargeDetails />
            </div>
        );
    }
}


export default RechargeDetailsPage;
