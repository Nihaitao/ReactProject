import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber, Select } from 'antd';
const ButtonGroup = Button.Group;


import styles from '../../system.css';

class AddNewPatternItem extends React.Component {
    state = {

    };
    onClickToGoBack() {
        this.props.dispatch({
            type: 'supportAllocation/changeAllocationItyemId',
            payload: 1,
        });
    }



    render() {

        return (
            <div>
                <div className={styles.promotion_head} style={{ height: '120px',borderBottom: '10px solid #f1f1f1' }}>
                    <div style={{ margin: '0', padding: '0' }}>
                        <div style={{ float: 'left', fontSize: '40px', width: '3%', marginRight: '55px' }}>
                            <Icon type="left" style={{ marginTop: '10px',cursor: 'pointer' }} onClick={this.onClickToGoBack.bind(this)} />
                        </div>
                        <div style={{ width: '120%' }} >
                            <h4>高级分配条件</h4>
                            <p>在下面设置一个高级分配条件</p>
                        </div>
                    </div>
                </div>
                <div className={styles.promotion_head}>
                    <h4>当对话的</h4>
                    <Select defaultValue="1" style={{ width: 220 }} >
                        <Option value="1">本次访问着陆页</Option>
                    </Select>
                    <br />
                    <br />
                    <Select defaultValue="1">
                        <Option value="1">包含</Option>
                    </Select>

                    <br />
                    <br />
                    <Input style={{ width: '300px' }} placeholder="当开头匹配时，不要输入http://或https://" />
                    <br />
                    <br />
                    <h4>时，分配给</h4>
                    <Select defaultValue="2" style={{ width: 220 }} >
                        <Option value="1">默认分组</Option>
                        <Option value="2">客服组</Option>
                        <Option value="3">售后组</Option>
                        <Option value="4">业务组</Option>
                    </Select>
                    <Select defaultValue="1" style={{ width: 220, marginLeft: '10px' }} >
                        <Option value="1">所有客服</Option>
                    </Select>
                    <br />
                    <br />
                    <a style={{ color: '#63B8FF' }} onClick={this.onClickEditAllocationPattern}>再加一条分配对象</a>
                    <br />
                    <br />
                    <div>
                        <Button type="primary" htmlType="submit" style={{ width: '80px' }}>保存</Button>
                        <Button style={{ width: '80px', marginLeft: '10px' }}>取消</Button>
                    </div>
                </div>

            </div>
        );
    }
}


export default connect(({ supportAllocation }) => ({ supportAllocation }))((AddNewPatternItem));
