import React from 'react';
import { connect } from 'dva';
import styles from '../IndexPage.less';

import { Layout, Menu, Icon, Row, Col } from 'antd';
const { Header, Sider, Content } = Layout;

import ComplaintAndAskItem from '../../components/selfManagement/complaintAndAskItem';


class ComplainAndAskPage extends React.Component {

    render() {
        
        return (
            <div>
                <ComplaintAndAskItem />
            </div>
        );
    }
}

export default ComplainAndAskPage;
