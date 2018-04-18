import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Row, Col, Icon, Input, Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import AlreadyPayClass from './alreadypayClass';
import MyNotes from './myNotes';
import MyAnswer from './myAnswer';
import MyAnswerDetails from './myAnswerDetails';
import MyComments from './myComments';
import * as tools  from '../../utils/tools'


const ClassManageComponent = ({ dispatch,myClass,paging }) => {

    const answerContent = myClass.detailId ? <MyAnswerDetails />:<MyAnswer /> ;

    const changeTab = key =>{
        let payload = tools.pageInit;
        switch(parseInt(key)){
            case 1:
                dispatch({type: 'myClass/fetchMyLessons',payload});
                break;
            case 2:
                dispatch({type: 'myClass/fetchMyQuestions',payload}); 
                break;
            case 3:
                dispatch({type: 'myClass/fetchMyNotes',payload}); 
                break;
            case 4:
                dispatch({type: 'myClass/fetchMyComments',payload}); 
                break;
        }

    }
    return (
        <div style={{height:'100%',backgroundColor:'#fff',padding:'15px'}}>
            <Tabs defaultActiveKey="1" onChange={changeTab}>
                <TabPane tab="已购课程" key="1" ><AlreadyPayClass/></TabPane>
                <TabPane tab="我的答疑" key="2">{answerContent}</TabPane>
                {/* <TabPane tab="我的笔记" key="3"><MyNotes/></TabPane> */}
                <TabPane tab="我的评论" key="4"><MyComments/></TabPane>
            </Tabs>
        </div>
    );
};


export default connect(({ myClass, paging }) => ({ myClass, paging }))((ClassManageComponent));
