import React from 'react';
import { connect } from 'dva';
import styles from '../IndexPage.less';

import { Layout, Menu, Icon, Row, Col } from 'antd';
const { Header, Sider, Content } = Layout;

import SelectCourseComponent from '../../components/questionBank/selectCourseComponent';


class SelectCoursePage extends React.Component {


    render() {
        
        return (
            <div>
                <SelectCourseComponent />
            </div>
        );
    }
}


export default connect(({ startTest }) => ({ startTest }))((SelectCoursePage));
