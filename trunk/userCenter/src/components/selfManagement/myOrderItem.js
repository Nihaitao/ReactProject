import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'dva/router';
import { Row, Col, Icon, Input, List, Button, Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import styles from './index.css';

import AllOrder from './allOrder';
import UnfinishOrder from './unfinishOrder';
import FinishedOrder from './finishedOrder';

const myOrderItem = ({ }) => {

    return (
        <div>
            <div style={{ height: '100%', backgroundColor: '#fff', padding: '15px' }}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="全部" key="1"><AllOrder /></TabPane>
                    <TabPane tab="待支付" key="2"><UnfinishOrder /></TabPane>
                    <TabPane tab="已开通" key="3"><FinishedOrder /></TabPane>
                </Tabs>
            </div>

        </div>
    );
};



export default myOrderItem;
