import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber, Radio, message, Select } from 'antd';
const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;
const Option = Select.Option;



import styles from '../../system.css';

const IpBlackListItem = ({ }) => {
    function confirm(e) {
        console.log(e);
        message.success('Click on Yes');
    }

    function cancel(e) {
        console.log(e);
        message.error('Click on No');
    }

    const columns = [
        {

            title: 'IP黑名单列表',
            dataIndex: 'blackIp',
            key: 'blackIp'
        },

        {
            title: '屏蔽到期时间',
            dataIndex: 'outOfBlackTime',
            key: 'outOfBlackTime',
        },
        {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
            render: (text, record) => (
                <span>
                    <Icon type="edit" style={{ color: '#1890ff', cursor: 'pointer',marginRight:'10px' }} />
                    <Popconfirm title="确认删除此条黑名单吗?" onConfirm={confirm} onCancel={cancel} okText="确定" cancelText="取消">
                        <Icon type="delete" style={{ color: '#1890ff', cursor: 'pointer' }} />
                    </ Popconfirm>
                </span>
            ),
        }
    ];

    const dataSource = [{
        blackIp: '192.168.1.1',
        outOfBlackTime: '01-23 14:00'
    }];



    return (
        <div>
            <div className={styles.promotion_head} >
                <h4>IP黑名单</h4>
                <p>新增或修改时，请填写外网IP段（同一C段）或某个固定外网IP地址</p>
                <Button type="primary" style={{ width: '120px', marginTop: '15px' }}>添加IP范围</Button>
            </div>
            <div className={styles.promotion_head}>
                <h4>添加IP访问</h4>
                <Input style={{ width: '160px' }} />
                <Select defaultValue="1" style={{ width: 120, marginLeft: '10px', marginRight: '10px' }}>
                    <Option value="1">长期屏蔽</Option>
                </Select>
                <Button type="primary" style={{ width: '80px', marginTop: '15px' }}>保存</Button>
                <p style={{ marginTop: '5px', color: '#1890ff' }}>切换为IP段输入模式</p>
            </div>
            <div className={styles.promotion_head}>
                <Table dataSource={dataSource} columns={columns} pagination={false} style={{ marginTop: '10px' }} />
            </div>
        </div>
    );
};



export default IpBlackListItem;
