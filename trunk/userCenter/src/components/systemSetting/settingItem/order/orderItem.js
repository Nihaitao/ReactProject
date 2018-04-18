import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber, List } from 'antd';
const ButtonGroup = Button.Group;


import styles from '../../system.css';

const OrderItem = ({ }) => {

    const data = [
        '1. 产品售前咨询',
        '2. 产品售后咨询'
    ];

    return (
        <div>
            <div id="cutomer_inline" className={styles.promotion_head} style={{ height: '120px' }}>
                <h4>顾客排队</h4>
                <Switch defaultChecked className={styles.cell_switch} style={{ position: 'absolute', top: '20px', right: '20px' }} />
                <p style={{ width: '65%' }}>让顾客选择遇到的问题或需要的服务类型，可根据顾客的选择分配到客服组或客服</p>

            </div>
            <div id="welcome_content" className={styles.promotion_head}>
                <div style={{ paddingTop: '5px' }}>
                    <List
                        size="small"
                        header={<div>请选择你想要的服务类型</div>}
                        bordered
                        dataSource={data}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                    <Button icon="plus" style={{ color: '#4fabf7', borderColor: '#4fabf7',marginTop:'5px',border:'none',backgroundColor:'bfbfbf' }} >添加选项</Button>
                </div>
            </div>
            <div id="cutomer_info_collection" className={styles.promotion_head} style={{ height: '130px' }}>
                <h4>顾客信息收集表单</h4>
                <Switch defaultChecked className={styles.cell_switch} style={{ position: 'absolute', top: '20px', right: '20px' }} />
                <p style={{ width: '65%' }}>在对话前让顾客填写表单，验证码可防止恶意刷对话，其他问题在对话时可直接查看用户已填写的回答</p>
            </div>
            <div id="notice_text" className={styles.promotion_head} style={{ height: '130px' }}>
                <h4>提示文案</h4>
                <Input placeholder="输入提示文案" />
                <div style={{ marginTop: '8px' }}><span>验证码：</span><Checkbox>启用</Checkbox></div>
            </div>
        </div>
    );
};



export default OrderItem;
