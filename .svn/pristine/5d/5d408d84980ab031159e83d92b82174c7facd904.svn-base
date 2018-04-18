import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Icon, Input, Tabs } from 'antd';

import { connect } from 'dva';
const TabPane = Tabs.TabPane;

import ComplaintItem from './complaintItem';
import AskItem from './askItem';



const ComplaintAndAskItem = ({dispatch,}) => {

    const changeTab = key =>{
        switch(parseInt(key)){
            case 1:
                dispatch({type: 'askComplaint/fetchAsks'});
                break;
            case 2:
                dispatch({type: 'askComplaint/fetchComplaints'}); 
                break;
        }

    }

    return (
        <div style={{height:'100%',backgroundColor:'#fff',padding:'15px'}}>
            <Tabs defaultActiveKey="1" onChange={changeTab}>
                <TabPane tab="提问" key="1"><AskItem /></TabPane>
                <TabPane tab="投诉" key="2"><ComplaintItem /></TabPane>
            </Tabs>
        </div>
    );
};



export default connect()((ComplaintAndAskItem));
