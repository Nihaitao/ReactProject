import React from 'react';
import { connect } from 'dva';
import styles from '../IndexPage.less';

import { Layout, Menu, Icon, Row, Col } from 'antd';
const { Header, Sider, Content } = Layout;

import ClassManageComponent from '../../components/myClass/classManageComponent';


class ClassManagePage extends React.Component {
    state = {
        tabId: 1
    };

    render() {
        
        return (
            <div>
                <ClassManageComponent />
            </div>
        );
    }
}


export default connect(({ myClass }) => ({ myClass }))((ClassManagePage));
