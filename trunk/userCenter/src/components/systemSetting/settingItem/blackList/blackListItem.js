import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber, Radio, message } from 'antd';
const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;



import styles from '../../system.css';

const BlackListItem = ({ }) => {

    function confirm(e) {
        console.log(e);
        message.success('Click on Yes');
    }

    function cancel(e) {
        console.log(e);
        message.error('Click on No');
    }

    const columns = [{
        title: '序号',
        dataIndex: 'id',
        key: 'id'
    }, {
        title: '访客信息',
        dataIndex: 'visitorInfo',
        key: 'visitorInfo'
    },

    {
        title: '拉黑时间',
        dataIndex: 'deleteTime',
        key: 'deleteTime',
    },
    {
        title: '操作人',
        dataIndex: 'operatedBy',
        key: 'operatedBy',
    },
    {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        render: (text, record) => (
            <span>
                <Popconfirm title="确认删除此条黑名单吗?" onConfirm={confirm} onCancel={cancel} okText="确定" cancelText="取消">
                    <Icon type="delete" style={{ color: '#1890ff', cursor: 'pointer' }} />
                </ Popconfirm>
            </span>
        ),
    }
    ];

    const dataSource = [{
        id: '1',
        visitorInfo: '超级管理员',
        deleteTime: '01-21 14:00',
        operatedBy: '客服售后组'
    }];

    return (

        <div>
            <div className={styles.promotion_head}>
                <h4>访客黑名单</h4>
                <p>统一查看和管理所有已在黑名单的访客</p>
            </div>
            <div>
                <Table dataSource={dataSource} columns={columns} pagination={false} style={{ marginTop: '10px' }} />
            </div>
        </div>
    );
};



export default BlackListItem;
