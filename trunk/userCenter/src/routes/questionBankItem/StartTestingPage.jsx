import React from 'react';
import { connect } from 'dva';
import styles from '../IndexPage.less';

import { Layout, Menu, Icon, Row, Col } from 'antd';
const { Header, Sider, Content } = Layout;

import StartTestingComponent from '../../components/questionBank/startTestingComponent';


class StartTestingPage extends React.Component {
   

    render() {
        const disciplineId = this.props.params;
        
        return (
            <div>
                <StartTestingComponent />
            </div>
        );
    }
}


export default connect(({ startTest }) => ({ startTest }))((StartTestingPage));
