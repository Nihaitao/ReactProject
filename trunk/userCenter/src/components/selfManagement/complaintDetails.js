import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'dva/router';
import { Row, Col, Icon, Input, List, Button } from 'antd';
import {connect } from 'dva';

import styles from './index.css';
import NoDataView from '../common/nodata';

const ComplaintDetails = ({dispatch,askComplaint}) => {
    const detail  = askComplaint.ComplaintDetail ;
    // const content = "请问怎么联系？ 我打了电话怎么没人接";
    // const time = "2017-03-27 12:00:00";

    const data = [
        {
            title: '为什么我打了电话没有人接',
            publisher: '李老师',
            time: '2017-07-15 10:54:21'
        },
        {
            title: '再打一次我们的座机',
            publisher: '我',
            time: '2017-07-15 10:54:21'
        }
    ];


    return (
        detail.length>0?
        <div>
            <div style={{ height: '210px', backgroundColor: '#fff', padding: '10px' }}>
                <div className={styles.list_bread}>
                    投诉详情
                   </div>
                <div className={styles.question_content}>
                    <p>提问内容 :  <span style={{ marginLeft: '5px' }}>{detail[0].Content}</span></p>
                    <p>提问时间 :  <span style={{ marginLeft: '5px' }}>{detail[0].AddTime}</span></p>
                </div>
                <div className={styles.toolbar}>
                <Link to="/complaint"><a>返回上一级</a></Link>
                    <Button className={styles.btn}>关闭投诉</Button>
                </div>
            </div>
            <div style={{ height: '400px', backgroundColor: '#fff', padding: '10px', display:'none' }}>
                <div className={styles.list_bread}>
                    沟通记录
                </div>
                <List style={{ padding: '10px' }}
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={<h4>{item.title}</h4>}
                                description={<div style={{ fontSize: '11px' }}>发布人: {item.publisher}&nbsp;&nbsp;&nbsp;&nbsp;发布时间: {item.time}</div>}
                            />
                        </List.Item>
                    )}
                />

                <div>
                    <Input style={{ height: '120px' }} />
                    <div className={styles.toolbar}>
                        <Button className={styles.red_btn}>提交</Button>
                    </div>
                </div>
            </div>
        </div>:<NoDataView/>
    );
};

export default connect(({askComplaint})=>({askComplaint}))((ComplaintDetails));
