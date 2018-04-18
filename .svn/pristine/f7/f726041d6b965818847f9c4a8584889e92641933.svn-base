import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber, Radio } from 'antd';
const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;



import styles from '../../system.css';

const DisplayPatternItem = ({ }) => {
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };

    return (

        <div>
            <div className={styles.promotion_head} >
                <p style={{ width: '70%' }}>可设置对话界面 [我的对话] 、 [访客] 、 [同事的对话] 和 [排队] 列表的展现形式</p>
            </div>
            <div className={styles.promotion_head}>
                <h4>普通模式</h4>
                <p>显示详细的 [我的对话] 、 [同事的对话] 和 [排队] 列表</p>
                <div style={{ position: 'absolute', top: '8px', right: '8px', color: '#00EE00' }}>
                    <Button type="primary">选择此规则</Button>
                </div>
            </div>
            <div className={styles.promotion_head}>
                <h4>效率模式</h4>
                <p>显示简略的 [我的对话] 、 [访客列表] 、 [排队] 和 [同事的对话]</p>
                <div style={{ position: 'absolute', top: '8px', right: '8px', color: '#00EE00' }}>
                    <Button type="primary">选择此规则</Button>
                </div>
            </div>
            <div className={styles.promotion_head}>
                <h4>自定义模式</h4>
                <p>自定义显示模块及展示方式</p>
                <div style={{ position: 'absolute', top: '13px', right: '20px', color: '#00EE00' }}>
                    <Button shape="circle" icon="check-circle" size="small" style={{ color: '#00EE00' }}></Button>
                    <span style={{ marginLeft: '5px' }} >当前规则</span>
                </div>
            </div>
            <div className={styles.promotion_head} style={{height:'428px'}}>
                <Checkbox defaultChecked={false}> 我的对话</Checkbox>
                <br />
                <div style={{ marginLeft: '30px' }}>
                    <RadioGroup>
                        <Radio style={radioStyle} value={1}>不分组</Radio>
                        <Radio style={radioStyle} value={2}>按[在线] 、 [离线]分组</Radio>
                        <Radio style={radioStyle} value={3}>按[对话中] 、[访客无应答] 、 [离线]分组</Radio>
                    </RadioGroup>
                    <p style={{ marginLeft: '18px', fontSize: '11px', width: '380px' }}>在线访客<span style={{ marginLeft: '5px', marginRight: '5px' }}><InputNumber disabled={false} defaultValue={300} style={{ width: '50px' }} /></span>秒无应答，移至 [访客无应答] 分组 （建议 300秒）</p>
                </div>
                <br />
                <Checkbox defaultChecked={false}> 访客列表</Checkbox>
                <br />
                <br />
                <Checkbox defaultChecked={false}> 排队列表</Checkbox>
                <br />
                <br />
                <Checkbox defaultChecked={false}> 同事的对话</Checkbox>
            </div>

        </div>
    );
};



export default DisplayPatternItem;
