import React from 'react';
import { connect } from 'dva';
import styles from '../IndexPage.less';

import { Layout, Menu, Icon, Row, Col } from 'antd';
const { Header, Sider, Content } = Layout;

import MyExam from '../../components/myEducationAffairs/myExam';


class MyExamPage extends React.Component {

    render() {
        
        return (
            <div>
                <MyExam />
            </div>
        );
    }
}


export default MyExamPage;
