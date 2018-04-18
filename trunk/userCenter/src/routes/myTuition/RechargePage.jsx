import React from 'react';
import { connect } from 'dva';
import styles from '../IndexPage.less';

import { Layout, Menu, Icon, Row, Col } from 'antd';
const { Header, Sider, Content } = Layout;

import Recharge from '../../components/myTuition/recharge';


class RechargePage extends React.Component {
    state = {
        
    };

    render() {
        
        return (
            <div>
                <Recharge />
            </div>
        );
    }
}


export default RechargePage;
