import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber } from 'antd';
const ButtonGroup = Button.Group;

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


import styles from '../../system.css';

const OtherMessage = ({ }) => {
    const text = "a";
    return (
        <div>
            <div id="enterprise_welcome_head" className={styles.promotion_head}>
                <h4>企业欢迎</h4>
                <p>每组对话开启时，系统自动向顾客发送一段欢迎语</p>
                <Switch defaultChecked className={styles.cell_switch} style={{ position: 'absolute', top: '20px', right: '20px' }}/>
            </div>
            <div id="welcome_content" className={styles.promotion_head}>
                <div style={{ paddingTop: '5px' }}>
                    <Input className={styles.input} placeholder="欢迎语内容" />
                    <span className={styles.item_text} ><Icon type="edit" style={{ color: '#1890ff' }} /><span style={{ marginLeft: '5px', color: '#1890ff',lineHeight:'30px' }}>修改</span></span>
                </div>
            </div>

            <div id="supporter_no_res" className={styles.promotion_head} style={{ borderBottom: 'none' }}>
                <h4>客服无应答时消息</h4>
                <p>客服一段时间没有响应顾客消息时，系统自动向他发送一段消息</p>
                <Switch className={styles.cell_switch} style={{ position: 'absolute', top: '20px', right: '20px' }} />
            </div>

            <div id="customer_no_res" className={styles.promotion_head}>
                <h4>顾客无响应时消息</h4>
                <p>顾客一段时间没有响应客服员消息时，系统自动向他发送一段消息</p>
                <Switch defaultChecked className={styles.cell_switch} style={{ position: 'absolute', top: '20px', right: '20px' }} />
            </div>
            <div id="res_setting" className={styles.promotion_head} style={{ height: '110px' }}>
                <h4>顾客超过<InputNumber size="small" min={1} max={100000} defaultValue={0} style={{ marginLeft: '5px', marginRight: '5px' }} />秒时自动响应</h4>
                <Input style={{ width: '240px',marginTop:'10px' }} placeholder="自动发送内容" />
                <span className={styles.item_text}><Icon type="edit" style={{ color: '#1890ff' }} /><span style={{ marginLeft: '5px', color: '#1890ff' }}>修改</span></span>
            </div>

            <div id="conversation_end" className={styles.promotion_head}>
                <h4>对话结束</h4>
                <p>对话结束后，系统自动向顾客发送一段结束语</p>
                <Switch defaultChecked className={styles.cell_switch} style={{ position: 'absolute', top: '20px', right: '20px' }} />
            </div>

            <div id="automatic_end_conversation" className={styles.promotion_head} style={{ borderBottom: 'none',height:'120px' }}>
                <h4>手动结束时</h4>
                <p>客服一段时间没有响应顾客消息时，系统自动向他发送一段消息</p>
                <Input style={{ width: '240px',marginTop:'10px' }} placeholder="自动发送内容" />
                <span className={styles.item_text}><Icon type="edit" style={{ color: '#1890ff' }} /><span style={{ marginLeft: '5px', color: '#1890ff' }}>修改</span></span>
            </div>

            <div id="system_end_conversation" className={styles.promotion_head} style={{height:'130px'}}>
                <h4>系统自动结束时</h4>
                <p>顾客一段时间没有响应客服员消息时，系统自动向他发送一段消息</p>
                <Input style={{ width: '240px',marginTop:'10px' }} placeholder="自动发送内容" />
                <span className={styles.item_text}><Icon type="edit" style={{ color: '#1890ff' }} /><span style={{ marginLeft: '5px', color: '#1890ff' }}>修改</span></span>
            </div>
        </div>
    );
};



export default OtherMessage;
