import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Row, Col, Icon, Input, Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import styles from './index.css';
import ChapterTest from './chapterTest';

import TestRecord from './testRecord';
import MyCollection from './myCollection';


const TestingRecordItem = ({ startTest }) => {
   

    return (
        <div style={{height:'100%',backgroundColor:'#fff'}}>
            <Tabs defaultActiveKey="1" style={{padding:'20px'}}>
                <TabPane tab="练习记录" key="1"><TestRecord /></TabPane>
                <TabPane tab="我的收藏" key="2"><MyCollection /></TabPane>
                <TabPane tab="我的笔记" key="3">我的笔记</TabPane>
            </Tabs>
        </div>
    );
};


export default connect(({  }) => ({  }))((TestingRecordItem));
