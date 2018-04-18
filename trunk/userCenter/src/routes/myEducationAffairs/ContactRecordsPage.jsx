import React from 'react';
import { connect } from 'dva';
import styles from '../IndexPage.less';

import { Layout, Menu, Icon, Row, Col } from 'antd';
const { Header, Sider, Content } = Layout;

import ContactRecord from '../../components/myEducationAffairs/contactRecord';


class ContactRecordsPage extends React.Component {

    render() {
        
        return (
            <div>
                <ContactRecord />
            </div>
        );
    }
}


export default ContactRecordsPage;
