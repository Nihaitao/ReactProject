import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Row, Col, Icon, Input, Tabs, Table, List, Avatar, Button } from 'antd';
const TabPane = Tabs.TabPane;

import styles from './index.css';

const MyCollection = ({ }) => {

    const data = [
        {
            title: '2012年4月全国高等教育自学考试马克思主义基本原理概论考试',
            description: '总题 : 47  考试时长 : 120分钟  总分 : 100分'
        },
        {
            title: '2012年4月全国高等教育自学考试马克思主义基本原理概论考试',
            description: '总题 : 47  考试时长 : 120分钟  总分 : 100分'
        },
        {
            title: '2012年4月全国高等教育自学考试马克思主义基本原理概论考试',
            description: '总题 : 47  考试时长 : 120分钟  总分 : 100分'
        },
        {
            title: '2012年4月全国高等教育自学考试马克思主义基本原理概论考试',
            description: '总题 : 47  考试时长 : 120分钟  总分 : 100分'
        },
    ];

    const ButtonText = ({ type, text }) => (
        <span>
            <Button type={type} style={{ marginRight: 8 }}>{text}</Button>
        </span>
    );

    const listHtml = <List style={{ marginTop: '20px' }}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
            <List.Item actions={[<ButtonText type="defalut" text="进入考场" />, <ButtonText type="primary" text="继续做题" />]}>
                <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<span>{item.title}</span>}
                    description={item.description}
                />
            </List.Item>
        )}
    />

    const nodataHtml = <div className={styles.nodata_container}><div className={styles.nodata}></div></div>

    const content = data.length == 1 ? nodataHtml : listHtml;
    const course = [{
        key: 0,
        value: '经济'
    }, {
        key: 1,
        value: '历史'
    }, {
        key: 2,
        value: '政治'
    }
    ];

    function courseContent(){
        const options = course.map((node) =>
            <li>{node.value}</li>
        );
        return  <ul className={styles.items}>
                    <li className={styles.allItem}>全部</li>
                    {options}
                </ul>
      }

    return (
        <div style={{height:'100px'}}>
            <div className={styles.courseName}>
                <span>课程</span>
                {courseContent()}
            </div>
           
            <div className={styles.courseName} style={{marginTop:'15px'}}>
                <span>类型</span>
                {courseContent()}
            </div>
            
            <div style={{ border: '1px solid #f0f2f5' }}></div>


        </div>
    );
};


export default connect(({ }) => ({}))((MyCollection));
