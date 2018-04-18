import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber, TreeSelect } from 'antd';
const ButtonGroup = Button.Group;
const SHOW_PARENT = TreeSelect.SHOW_PARENT;


import styles from '../../system.css';

const LinkItem = ({ }) => {
    const treeData = [{
        label: '超级管理员',
        value: '0-0',
        key: '0-0'
    }, {
        label: '售后组',
        value: '0-1',
        key: '0-1',
        children: [{
            label: '售后小米',
            value: '0-1-0',
            key: '0-1-0',
        }, {
            label: '售后米雪',
            value: '0-1-1',
            key: '0-1-1',
        }, {
            label: '售后追梦',
            value: '0-1-2',
            key: '0-1-2',
        }],
    }];

    const tProps = {
        treeData,
        // value: this.state.value,
        // onChange: this.onChange,
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
        searchPlaceholder: '指定客服',
        style: {
            width: 300,
            marginLeft: 10
        },
    };

    return (
        <div>
            <div className={styles.promotion_head} >
                <h4>链接地址</h4>
                <p>顾客打开这个界面即能与你的企业聊天</p>
            </div>
            <div className={styles.promotion_head} >
                <Input value="https://static.meiqia.com/dist/standalone.html?_=t&eid=57868" disabled style={{ color: '#333' }} />
                <br />
                <br />
                <span>指定客服</span><TreeSelect {...tProps} />
            </div>
            <div className={styles.promotion_head} >
                <a style={{ color: '#40a9ff' }}>生成二维码并下载</a>

            </div>
            <div className={styles.promotion_head} >
                <h4>聊天窗口外观设置</h4>
                <p>定制聊天窗口外观，让它更契合你的企业</p>
            </div>
            <div className={styles.promotion_head} >
                <a style={{ color: '#40a9ff' }}>桌面窗口外观</a><br/>
                <a style={{ color: '#40a9ff',lineHeight:'50px' }}>手机窗口外观</a>
            </div>
            <div className={styles.promotion_head} >
                <h4>声音提示</h4>
                <p>顾客在收到消息时，插件会播放提示音提醒他</p>
                <Switch defaultChecked className={styles.cell_switch} style={{ position: 'absolute', top: '20px', right: '20px' }}/>
            </div>
        </div>
    );
};



export default LinkItem;
