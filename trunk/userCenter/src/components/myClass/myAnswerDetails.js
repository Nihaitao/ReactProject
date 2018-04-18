import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Row, Col, Icon, Input, Form, List, Avatar, Button, Timeline } from 'antd';
const FormItem = Form.Item;
import NoDataView from '../common/nodata';

import styles from './index.css';

const myAnswerDetails = ({ myClass,dispatch }) => {
    const data = myClass.MyQuestionDetail;

    function goBack(){
		dispatch({
			type:'myClass/fetchMyQuestionDetail',
			payload:{PID:null}
		})

    }

    const ButtonText = ({ type, text }) => (
        <span>
            <Button type={type} style={{ marginRight: 8 }}>{text}</Button>
        </span>
    );

    const formItemLayout = {
        labelCol: {
            xs: { span: 15 },
            sm: { span: 5 },
        },
        wrapperCol: {
            xs: { span: 15 },
            sm: { span: 16 },
        },
    };
    const detailData = data.slice(1);
    const listHtml = <List style={{ paddingLeft: '20px', borderTop: '1px solid #fafafa' }}
        itemLayout="horizontal"
        size="large"
        dataSource={detailData}
        renderItem={item => (
            
            <List.Item
                key={item.title}
                extra={<span style={{fontSize:'12px'}}>{item.name}</span>}
            >
                <List.Item.Meta
                    // title={<div style={{paddingTop:'10px'}}><h4>{item.AccountName}</h4></div>}
                    description={
                        <Row className={styles.question_detail_row}>
                            <Col span={3}>{item.AccountName}</Col>
                            <Col span={21}>
                            <div>{item.Content}</div>
                            {item.AddTime}</Col>
                        </Row>
                    }
                />
            </List.Item>
        )}
    />
    const nodataHtml = <div className={styles.nodata_container}><div className={styles.nodata}></div></div>
    const content = data.length >1 ?  listHtml:<NoDataView />;

    return (
        <div style={{padding:'20px'}}>
            <div className={styles.question}></div><span>{data&&data[0].Content}</span>
            <a onClick={()=>goBack()} style={{float:'right'}}>返回上一级</a>
            <div style={{marginTop:'25px',paddingBottom:'15px',borderBottom:'1px solid #e8e8e8'}}>共&nbsp;{detailData.length}&nbsp;人回答</div>
            {content}
        </div>
    );
};




export default connect(({ myClass }) => ({ myClass }))((myAnswerDetails));