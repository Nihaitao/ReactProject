import React from 'react';
import { connect } from 'dva';
import styles from '../IndexPage.less';

import { Layout, Menu, Icon, Row, Col } from 'antd';
const { Header, Sider, Content } = Layout;

import ComplaintDetails from '../../components/selfManagement/complaintDetails';


class ComplaintDetailsPage extends React.Component {
    componentWillMount() {
        const id = this.props.params.id;
        this.props.dispatch({type:'askComplaint/fetchComplaintDetail',id});
    }
    render() {
        
        return (
            <div>
                <ComplaintDetails />
            </div>
        );           
    }
}


export default connect()((ComplaintDetailsPage));
 