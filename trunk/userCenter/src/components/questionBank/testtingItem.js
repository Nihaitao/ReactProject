import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Row, Col, Icon, Input, Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import styles from './index.css';
import ChapterTest from './chapterTest';
import TestPaper from './testPaper';
import FormerExam from './formerExam';


const testtingItem = ({ startTest }) => {
    const tabId = startTest.testTabId;

    return (
        <div style={{backgroundColor:'#fff'}}>
            <Tabs defaultActiveKey={tabId} style={{padding:'20px'}}>
                <TabPane tab="章节练习" key="1"><ChapterTest/></TabPane>
                <TabPane tab="模拟试卷" key="2"><TestPaper/></TabPane>
                <TabPane tab="历年真题" key="3"><FormerExam/></TabPane>
            </Tabs>
        </div>
    );
};


export default connect(({ startTest }) => ({ startTest }))((testtingItem));
