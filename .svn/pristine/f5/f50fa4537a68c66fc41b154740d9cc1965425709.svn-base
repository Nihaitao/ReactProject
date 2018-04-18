import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber } from 'antd';
const ButtonGroup = Button.Group;


import styles from '../../system.css';
import privateStyles from './shortcutKey.css';

const ShortcutKeyItem = ({ }) => {

    return (
        <div>
            <div className={styles.promotion_head} >
                <h4>对话页</h4>
                <p>输入框激活后，输入模式</p>
            </div>
            <div className={styles.promotion_head} style={{height:'280px'}}>
                <Row style={{paddingTop:'20px'}}>
                    <Col span="6">
                        <Button className={privateStyles.btn} >Enter</Button>
                    </Col>
                    <Col span="3"></Col>
                    <Col span="10" className={privateStyles.single_btn_text}>
                        发送消息
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col span="11">
                        <Button className={privateStyles.btn} >Ctrl</Button>
                        <span>  +  </span>
                        <Button className={privateStyles.btn} >Enter</Button>
                    </Col>
                    <Col span="1"></Col>
                    <Col span="3" className={privateStyles.double_btn_text}>
                        发送消息
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col span="11">
                        <Button className={privateStyles.btn} >Shift</Button>
                        <span>  +  </span>
                        <Button className={privateStyles.btn} >Enter</Button>
                    </Col>
                    <Col span="1"></Col>
                    <Col span="3" className={privateStyles.double_btn_text}>
                        文字换行
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col span="6">
                        <Button>F1</Button>
                    </Col>
                    <Col span="3"></Col>
                    <Col span="10" className={privateStyles.single_btn_text}>
                        退出输入模式
                    </Col>
                </Row>
            </div>
            <div className={styles.promotion_head} >
                <h4>对话页</h4>
                <p>输入框未激活</p>
            </div>
            <div className={styles.promotion_head} style={{height:'330px'}}>
                <Row style={{paddingTop:'20px'}}>
                    <Col span="6">
                        <Button>R</Button>
                    </Col>
                    <Col span="3"></Col>
                    <Col span="10" className={privateStyles.single_btn_text}>
                        激活输入框
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col span="11">
                        <Button className={privateStyles.btn} >Shift</Button>
                        <span>  +  </span>
                        <Button>R</Button>
                    </Col>
                    <Col span="1"></Col>
                    <Col span="11" className={privateStyles.double_btn_text}>
                        激活输入框，并选择[内部消息]模式
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col span="6">
                        <Button>T</Button>
                    </Col>
                    <Col span="3"></Col>
                    <Col span="10" className={privateStyles.single_btn_text}>
                        给当前顾客添加标签
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col span="6">
                        <Button>N</Button>
                    </Col>
                    <Col span="3"></Col>
                    <Col span="10" className={privateStyles.single_btn_text}>
                        给当前顾客添加备注
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col span="6">
                        <Button>F2</Button>
                    </Col>
                    <Col span="3"></Col>
                    <Col span="10" className={privateStyles.single_btn_text}>
                        结束当前会话
                    </Col>
                </Row>
            </div>
        </div>
    );
};



export default ShortcutKeyItem;
