import React from 'react';
import { connect } from 'dva';
import styles from '../IndexPage.less';

import { Layout, Menu, Icon, Row, Col } from 'antd';
const { Header, Sider, Content } = Layout;

import TestingRecordItem from '../../components/questionBank/testingRecordItem';


class TestingRecordPage extends React.Component {

    render() {
        
        return (
            <div>
                <TestingRecordItem />
            </div>
        );
    }
}


export default TestingRecordPage;
