import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Row, Col, Icon, Input, Form, List, Avatar, Button, Timeline } from 'antd';
const FormItem = Form.Item;


const messageCenter = ({ messageCenter ,dispatch }) => {

    const data = [
        {
            title: '购课订单未付款',
            description: '您在学习中心购买的课程有一笔购课订单未付款，请尽快付款',
            source: '来源: 下单提醒',
            time: '2017-08-19 19：02',
        },
        {
            title: '购课订单未付款',
            description: '您在学习中心购买的课程有一笔购课订单未付款，请尽快付款',
            source: '来源: 下单提醒',
            time: '2017-08-19 19：02',
        },
        {
            title: '购课订单未付款',
            description: '您在学习中心购买的课程有一笔购课订单未付款，请尽快付款',
            source: '来源: 下单提醒',
            time: '2017-08-19 19：02',
        }
    ];

    function ViewMessageDetails(){
        dispatch({
            type:'messageCenter/setMessageContent',
            payload:'details'
        })
    }


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



    return (
        <div style={{ backgroundColor: '#fff', paddingLeft: '20px' }}>
            <List
                itemLayout="horizontal"
                size="large"
                dataSource={data}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[<Button type="defalut">删除</Button>, <Button type="primary" onClick={()=>ViewMessageDetails()}>查看</Button>]}
                    >
                        <List.Item.Meta
                            title={<div style={{ marginTop: '20px' }}><h4>{item.title}</h4></div>}
                            description={
                                <div>
                                    {item.description}
                                    <span style={{ marginLeft: '20px', marginRight: '10px' }}>{item.time}</span>
                                    {item.source}
                                </div>
                            }
                        />
                    </List.Item>
                )}
            />
           
        </div>
    );
};




export default connect(({ messageCenter }) => ({ messageCenter }))((messageCenter));