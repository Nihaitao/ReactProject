import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber, Radio, Select, DatePicker } from 'antd';
const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;
const { RangePicker } = DatePicker;


import styles from '../../system.css';

class AddNewPatternItem extends React.Component {
    state = {

    };

    onClickToGoBack() {
        this.props.dispatch({
            type: 'dialogInvitation/changeInvitationItemId',
            payload: 2,
        });
    }




    render() {

        return (
            <div>
                <div className={styles.promotion_head} style={{ height: '120px' }} style={{ borderBottom: '10px solid #f1f1f1' }}>
                    <div style={{ margin: '0', padding: '0' }}>
                        <div style={{ float: 'left', fontSize: '40px', width: '3%', marginRight: '55px' }}>
                            <Icon type="left" style={{ marginTop: '8px', cursor: 'pointer' }} onClick={this.onClickToGoBack.bind(this)} />
                        </div>
                        <div style={{ width: '120%' }} >
                            <h4>添加新规则</h4>
                            <p>顾客访问你的网站时，定制何种方式发送邀请</p>
                        </div>
                    </div>
                </div>
                <div className={styles.promotion_head} style={{ height: '86px' }} >
                    <h4 style={{ float: 'left', marginTop: '15px', marginRight: '10px' }} >规则名称</h4><Input style={{ float: 'left', width: '250px',marginTop: '8px', }} />
                </div>
                <div className={styles.promotion_head} style={{ height: '88px' }}>
                    <h4 style={{ float: 'left', marginTop: '10px', marginRight: '10px' }} >使用平台</h4>
                    <RadioGroup style={{ float: 'left',marginTop: '10px', width: '250px' }}>
                        <Radio value={1}>桌面网站</Radio>
                        <Radio value={2}>移动网站</Radio>
                    </RadioGroup>
                </div>
                <div className={styles.promotion_head}>
                    <h4>谁会收到这种邀请？</h4>
                    <p>如果不添加访客条件，则视为对所有访客条件无效</p>
                    <RadioGroup style={{ position: 'absolute', top: '10px', right: '2px' }}>
                        <Radio value={1}>满足所有规则</Radio>
                        <Radio value={2}>满足任意规则</Radio>
                    </RadioGroup>
                    <br />
                    <Select defaultValue="5" style={{ width: '140px' }} >
                        <Option value="1">包含</Option>
                        <Option value="2">当前访问页面URL</Option>
                        <Option value="3">关键词</Option>
                        <Option value="4">回头客</Option>
                        <Option value="5">地区</Option>
                        <Option value="6">来源方式</Option>
                        <Option value="7">落地页面URL</Option>

                    </Select>
                    <Select defaultValue="1" style={{ marginLeft: '10px' }} >
                        <Option value="1">等于</Option>
                    </Select>
                    <Input value="多条空格隔开" style={{ marginLeft: '10px', width: '190px' }} />
                    <Icon type="delete" style={{ marginLeft: '10px', color: '#63B8FF' }} />
                    <br />
                    <br />
                    <Button type="primary" icon="plus" >添加受邀规则</Button>
                </div>
                <div className={styles.promotion_head} style={{ height: '200px' }}>
                    <h4 style={{ float: 'left', marginTop: '2px', marginRight: '10px' }} >使用时间</h4>
                    <RadioGroup style={{ float: 'left', width: '300px' }}>
                        <Radio value={1}>保存后立即使用</Radio>
                        <Radio value={2}>自定义启用时间</Radio>
                    </RadioGroup>
                    <br />
                    <br />
                    <h4 style={{ float: 'left', marginTop: '5px', marginRight: '10px' }} >时间</h4>
                    <RangePicker
                        showTime={{ format: 'HH:mm' }}
                        format="YYYY-MM-DD HH:mm"
                        placeholder={['开始时间', '结束时间']}
                    />
                    <br />
                    <br />
                    <p style={{marginLeft:'40px'}}>如果不设置结束时间，则视为开始时间后一直使用</p>
                </div>
                <div className={styles.promotion_head} >
                <h4>手动邀请</h4>
                <p style={{width:'61%'}} >客服人员在访客列表、对话界面（效率模式）中，手动向顾客发送邀请</p>
                <Switch defaultChecked className={styles.cell_switch} style={{ position: 'absolute', top: '20px', right: '20px' }}/>
            </div>
            </div>
        );
    }
}



export default connect(({ dialogInvitation }) => ({ dialogInvitation }))((AddNewPatternItem));

