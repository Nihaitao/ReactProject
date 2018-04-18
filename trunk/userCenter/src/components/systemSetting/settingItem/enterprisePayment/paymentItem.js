import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber, Radio } from 'antd';
const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;


import styles from '../../system.css';
import privateStyles from './item.css';

const PaymentItem = ({ }) => {

    return (
        <div>
            <div className={styles.promotion_head} >
                <h4>企业付款</h4>
                <p style={{ width: '70%' }}>先购买，再购买所有付费版本均提供7天全功能免费试用</p>
            </div>
            <div className={styles.promotion_head} >
                <h4>当前状态： <span style={{ color: 'rgb(143, 222, 143)' }}>体验版</span></h4>
            </div>
            <div className={styles.promotion_head} style={{ height: '380px', borderBottom: 'none' }}>
                <h4>充值续费</h4>
                <br />
                <div style={{ padding: '10px' }}>
                    <h4>选择续费方案</h4>

                    <RadioGroup style={{ height: '60px', marginTop: '10px' }}>
                        <div className={privateStyles.payment_radio} style={{ float: 'left' }}>
                            <Radio value={1} style={{ padding: '13px', fontSize: '19px', width: '50px' }}><span style={{ color: '#fff', fontSize: '17px' }}>企业版</span></Radio>
                            <div className={privateStyles.radio_text}>
                                <h4>￥3888</h4>
                                <h4>每坐席每年</h4>
                            </div>
                        </div>
                        <div className={privateStyles.payment_radio} style={{ float: 'right', backgroundColor: '#40a9ff', marginLeft: '50px' }}>
                            <Radio value={2} style={{ padding: '13px', fontSize: '19px', width: '50px' }}><span style={{ color: '#fff', fontSize: '17px' }}>专业版</span></Radio>
                            <div className={privateStyles.radio_text} style={{ backgroundColor: '#63B8FF' }}>
                                <h4>￥1888</h4>
                                <h4>每坐席每年</h4>
                            </div>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <br />
                            <br />
                            <br />
                            <h4>选择付费时长</h4>
                            <RadioGroup style={{ marginTop: '10px' }}>
                                <Radio value={1}>1年</Radio>
                                <Radio value={2}>2年</Radio>
                                <Radio value={3}>3年</Radio>
                            </RadioGroup>
                            <span>自定义</span><InputNumber min={1} max={10} defaultValue={1} style={{ marginLeft: '5px', marginRight: '5px', width: '50px' }} /><span>年</span>
                            <br />
                            <br />
                            <h4>选择坐席数量 <InputNumber min={1} max={100} defaultValue={1} style={{ width: '180px', marginLeft: '10px' }} /></h4>

                        </div>

                    </RadioGroup>
                    <br />

                </div>
            </div>
            <div style={{ padding: '15px', marginLeft: '10px', borderTop: '1px dashed', borderBottom: '1px dashed' }} >
                <span style={{ color: '#333' }}>方案总价格:</span ><span style={{ color: '#bfbdbd' }}>￥3888 (企业版/年/坐席) X 1年 X 1坐席 = </span><span style={{ color: 'red', fontSize: '18px' }}>￥3888.00</span>
            </div>
            <div className={styles.promotion_head} style={{height:'200px'}}>
               <Button type="primary" style={{marginTop:'50px'}}>下一步，选择支付方式</Button>
            </div>

        </div>
    );
};



export default PaymentItem;
