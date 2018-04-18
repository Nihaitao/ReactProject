import React from 'react';
import { connect } from 'dva';
import styles from '../IndexPage.less';

import { Layout, Menu, Icon, Row, Col } from 'antd';
const { Header, Sider, Content } = Layout;

import MessageCenter from '../../components/selfManagement/messageCenter';
import MessageCenterDetails from '../../components/selfManagement/messageDetails';


class MessageCenterPage extends React.Component {
    

    render() {
        const content = this.props.messageCenter.messageContent == "main" ? <MessageCenter /> : <MessageCenterDetails />;
        
        return (
            <div>
               {content}
            </div>
        );
    }
}



export default connect(({ messageCenter }) => ({ messageCenter }))((MessageCenterPage));
