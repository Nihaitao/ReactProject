import React from 'react';
import { connect } from 'dva';
import styles from '../IndexPage.less';

import { Layout, Menu, Icon, Row, Col } from 'antd';
const { Header, Sider, Content } = Layout;

import AskDetails from '../../components/selfManagement/askDetails';


class AskDetailsPage extends React.Component {

    componentWillMount() {
        const id = this.props.params.id;
        this.props.dispatch({type:'askComplaint/fetchAskDetail',id});
    }
    render() {
        
        return (
            <div>
                <AskDetails />
            </div>
        );
    }
}

export default connect()(AskDetailsPage);
