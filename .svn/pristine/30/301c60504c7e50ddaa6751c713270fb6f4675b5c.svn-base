import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber } from 'antd';
const ButtonGroup = Button.Group;

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


import styles from '../../system.css';

const PromoteMessage = ({ }) => {
    const text = "a";
    return (
        <div>
            <div id="promotion_head" className={styles.promotion_head} >
                <h4>推广消息</h4>
                <p>每组对话开启时，系统自动向顾客发送一组推广消息</p>
                <Switch defaultChecked className={styles.cell_switch} style={{ position: 'absolute', top: '20px', right: '20px' }}/>
            </div>
            <div id="promotion_msg_one" className={styles.promotion_head}>
                <div style={{ paddingTop: '10px' }}>
                    <Checkbox className={styles.left}>启用</Checkbox>
                    <Input size="small" className={styles.input} placeholder="推广消息一" />
                    <span className={styles.item_text}>  开启对话</span>
                    <InputNumber size="small" min={1} max={100000} defaultValue={0} />
                    <span className={styles.item_text}>  秒后发送</span>
                </div>
            </div>

            <div id="promotion_msg_two" className={styles.promotion_head}>
                <div style={{ paddingTop: '10px' }}>
                    <Checkbox className={styles.left}>启用</Checkbox>
                    <Input size="small" className={styles.input} placeholder="推广消息二" />
                    <span className={styles.item_text}>  开启对话</span>
                    <InputNumber size="small" min={1} max={100000} defaultValue={0} />
                    <span className={styles.item_text}>  秒后发送</span>
                </div>
            </div>

            <div id="promotion_msg_edit" className={styles.promotion_head}>
                <div style={{ paddingTop: '10px' }}>
                    <Checkbox className={styles.left}>启用</Checkbox>
                    <ButtonGroup>
                        <Button icon="edit" className={styles.btn}>修改</Button>
                        <Button icon="delete" className={styles.btn}>删除</Button>
                    </ButtonGroup>
                    <InputNumber size="small" min={1} max={100000} defaultValue={0} style={{ marginLeft: '31px' }} />
                    <span className={styles.item_text}>  秒后发送</span>
                </div>
            </div>

            <div id="richTextSection" className={styles.richTextSection}>
                <Editor
                    //editorState="true"
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                // onEditorStateChange={this.onEditorStateChange}
                />
                <div style={{ paddingLeft: '10px' }} >
                    <Button className={styles.btn} >保存</Button>
                    <Button className={styles.btn} style={{ marginLeft: '15px' }}>取消</Button>
                </div>
            </div>

            <div id="new_msg_section" className={styles.new_msg_section}>
                <div style={{ padding: '10px' }}>
                    <Button icon="plus" style={{ color: '#4fabf7', borderColor: '#4fabf7' }} >添加一条新消息</Button>
                    <span style={{ marginLeft: '10px', color: '#bfbfbf' }}>还可以添加一条推广消息</span>
                </div>
            </div>
        </div>
    );
};



export default PromoteMessage;
