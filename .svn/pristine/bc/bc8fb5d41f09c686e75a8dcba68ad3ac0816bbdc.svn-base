import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Row, Col, Icon, Input, Tabs, Table, List, Avatar, Button } from 'antd';
const TabPane = Tabs.TabPane;

import styles from './index.css';

const TestRecord = ({ }) => {

    const data = [
        {
            chapterTitle: '章节练习',
            title: '第一节 马克思主义的产生与发展',
            time: '2017-05-15 00:00:00',
            count: '10',
            rightCount: '8'
        },
        {
            chapterTitle: '章节练习',
            title: '第一节 马克思主义的产生与发展',
            time: '2017-05-15 00:00:00',
            count: '10',
            rightCount: '8'
        },
        {
            chapterTitle: '模拟考试',
            title: '第一节 马克思主义的产生与发展',
            time: '2017-05-15 00:00:00',
            count: '10',
            rightCount: '8'
        },
        {
            chapterTitle: '模拟考试',
            title: '第一节 马克思主义的产生与发展',
            time: '2017-05-15 00:00:00',
            count: '10',
            rightCount: '8'
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
            <List.Item actions={[<ButtonText type="defalut" text="查看解析" />, <ButtonText type="primary" text="继续做题" />]}>
                <List.Item.Meta
                    title={<div><span className={styles.chapter_title}>[{item.chapterTitle}]</span><span style={{ color: '#333' }}>{item.title}</span></div>}
                    description={<div><span>{item.time}</span><span style={{ marginLeft: '20px' }}>{item.count}题 / 对 {item.rightCount}</span></div>}
                />
            </List.Item>
        )}
    />;

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

    function courseContent() {
        const options = course.map((node) =>
            <li>{node.value}</li>
        );
        return <ul className={styles.items}>
            <li className={styles.allItem}>全部</li>
            {options}
        </ul>
    }


    return (
        <div>
           <div className={styles.courseName}>
                <span>课程</span>
                {courseContent()}
            </div>
            <div style={{ border: '1px solid #f0f2f5' }}></div>
            {content}
        </div>
    );
};


export default connect(({ }) => ({}))((TestRecord));
