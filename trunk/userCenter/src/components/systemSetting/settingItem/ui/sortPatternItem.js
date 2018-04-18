import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber, Radio } from 'antd';
const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;



import styles from '../../system.css';

const SortPatternItem = ({ }) => {
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };

    return (

        <div>
            <div className={styles.promotion_head} >
                <p>选择[我的对话] 列表中消息排序方式</p>
            </div>
            <div className={styles.promotion_head}>
                <h4>新消息置顶</h4>
                <p>当有访客接入或发送消息后，该访客置于列表第一位</p>
                <div style={{ position: 'absolute', top: '8px', right: '8px', color: '#00EE00' }}>
                    <Button type="primary">选择此规则</Button>
                </div>
            </div>
            <div className={styles.promotion_head}>
                <h4>当前对话置顶</h4>
                <p style={{width:'60%'}} >当前对话置于列表第一位。当有访客接入或发送消息后，该访客置于列表第二位选择此规则</p>
                <div style={{ position: 'absolute', top: '8px', right: '8px', color: '#00EE00' }}>
                    <Button type="primary">选择此规则</Button>
                </div>
            </div>
            <div className={styles.promotion_head}>
                <h4>按创建时间排序</h4>
                <p>按照对话创建时间排序，最早创建的对话位于列表第一位</p>
                <div style={{ position: 'absolute', top: '13px', right: '20px', color: '#00EE00' }}>
                    <Button shape="circle" icon="check-circle" size="small" style={{ color: '#00EE00' }}></Button>
                    <span style={{ marginLeft: '5px' }} >当前规则</span>
                </div>
            </div>
            <div className={styles.promotion_head}>
                <h4>无消息对话沉底</h4>
                <p>开启后，无消息访客进入队列后，排在队尾</p>
                <Switch defaultChecked className={styles.cell_switch} style={{ position: 'absolute', top: '20px', right: '20px' }} />
            </div>

        </div>
    );
};



export default SortPatternItem;
