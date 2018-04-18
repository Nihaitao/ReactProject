import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Row, Col, Icon, Input, Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import styles from './index.css';

import PhoneBinding from './phoneBinding';
import EducationInfo from './educationInfo';
import BasicInfo from './basicInfo';
import EditPassword from './editPassword';
import OtherAccount from './otherAccount';


const AccountSettingItem = ({ startTest }) => {
    

    return (
        <div style={{backgroundColor:'#fff'}}>
            <Tabs defaultActiveKey="1" style={{padding:'20px'}}>
                <TabPane tab="基本信息" key="1"><BasicInfo /></TabPane>
                {/* <TabPane tab="报考信息" key="2"><EducationInfo /></TabPane> */}
                <TabPane tab="修改密码" key="3"><EditPassword /></TabPane>
                <TabPane tab="绑定手机" key="4"><PhoneBinding /></TabPane>
                <TabPane tab="第三方账号绑定" key="5"><OtherAccount /></TabPane>
            </Tabs>
        </div>
    );
};


export default connect(({  }) => ({  }))((AccountSettingItem));
