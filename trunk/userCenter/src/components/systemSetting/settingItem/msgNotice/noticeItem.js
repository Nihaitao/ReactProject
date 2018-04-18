import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber } from 'antd';
const ButtonGroup = Button.Group;


import styles from '../../system.css';

const NoticeItem = ({ }) => {
    return (
        <div>
            <div id="warning" className={styles.promotion_head}>
                <h4>声音提醒</h4>
                <p>开启后，系统会声音提醒</p>
            </div>
            <div id="check_iem" className={styles.promotion_head}>
                <div>
                    <h4>新对话提示音</h4>
                    <Switch defaultChecked className={styles.cell_switch} style={{ position: 'absolute', top: '20px', right: '50px' }} />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <h4>新消息提示音</h4>
                    <Switch defaultChecked className={styles.cell_switch} style={{ position: 'absolute', top: '60px', right: '50px' }} /></div>
                <div style={{ marginTop: '20px' }}>
                    <h4>对话转入提示音</h4>
                    <Switch defaultChecked className={styles.cell_switch} style={{ position: 'absolute', top: '100px', right: '50px' }} /></div>
                <div style={{ marginTop: '20px' }}>
                    <h4>对话转出提示音</h4>
                    <Switch defaultChecked className={styles.cell_switch} style={{ position: 'absolute', top: '140px', right: '50px' }} /></div>
            </div>
            <div id="warning" className={styles.promotion_head}>
                <h4>声音提醒</h4>
                <p>开启后，系统会声音提醒</p>
            </div>
            <div id="check_iem" className={styles.promotion_head} style={{ height: '420px' }}>
                <div>
                    <h4>新对话提醒</h4>
                    <Switch defaultChecked className={styles.cell_switch} style={{ position: 'absolute', top: '20px', right: '50px' }} />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <h4>新消息提醒</h4>
                    <Switch defaultChecked className={styles.cell_switch} style={{ position: 'absolute', top: '60px', right: '50px' }} /></div>
                <div style={{ marginTop: '20px' }}>
                    <h4>对话转入提醒</h4>
                    <Switch defaultChecked className={styles.cell_switch} style={{ position: 'absolute', top: '100px', right: '50px' }} /></div>
                <div style={{ marginTop: '20px' }}>
                    <h4>对话转出提醒</h4>
                    <Switch defaultChecked className={styles.cell_switch} style={{ position: 'absolute', top: '140px', right: '50px' }} /></div>
            </div>
        </div>
    );
};



export default NoticeItem;
