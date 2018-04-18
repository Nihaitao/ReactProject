import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber, Radio, message } from 'antd';
const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;

import GroupAddModal from './groupAddModal';

import styles from '../../system.css';
import privateStyles from './userManagement.css';

const UserManagementItem = ({ dispatch, usermanage }) => {

    function confirm(e) {
        console.log(e);
        message.success('Click on Yes');
    }

    function cancel(e) {
        console.log(e);
        message.error('Click on No');
    }

    function showGroupAddModal() {
        dispatch({
            type: 'usermanage/toggleModal'
        });
    }

    function addNewUser() {
        dispatch({
            type: 'usermanage/changeUserManageItemId',
            payload: 2
        });
    }

    function handleClickUser(record){
      debugger;
    }

    function exportList() {

    }

    const columns = [{
        title: '工号',
        dataIndex: 'id',
        key: 'id'
    }, {
        title: '名字',
        dataIndex: 'name',
        key: 'name'
    }, {
        title: '账号',
        dataIndex: 'account',
        key: 'account',
    },
    {
        title: '角色',
        dataIndex: 'role',
        key: 'role',
    },
    {
        title: '权限范围',
        dataIndex: 'permissionRange',
        key: 'permissionRange'
    },
    {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        render: (text, record) => (
            <span>
                <Icon type="edit" style={{ color: '#1890ff', cursor: 'pointer' }} onClick={handleClickUser(record)}/>
            </span>
        ),
    }
    ];

    const dataSource = [{
        id: '001',
        name: '超级管理员',
        account: '774913431@qq.com',
        role: '管理员',
        permissionRange: '全部'
    },
    {
        id: '002',
        name: '客服小米',
        account: '774913431@qq.com',
        role: '客服',
        permissionRange: '全部'
    },
    {
        id: '003',
        name: '客服小米',
        account: '774913431@qq.com',
        role: '客服',
        permissionRange: '全部'
    },
    {
        id: '004',
        name: '客服小米',
        account: '774913431@qq.com',
        role: '客服',
        permissionRange: '全部'
    },
    {
        id: '005',
        name: '客服小米',
        account: '774913431@qq.com',
        role: '客服',
        permissionRange: '全部'
    }
    ];

    const groupColumn = [{
        title: '分组',
        dataIndex: 'groupName',
        key: 'groupName'
    },
    {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        render: (text, record) => (
            <span>
                <Icon type="edit" style={{ color: '#1890ff', cursor: 'pointer' }} />
                <Popconfirm title="确认删除此条分组信息吗?" onConfirm={confirm} onCancel={cancel} okText="确定" cancelText="取消">
                    <Icon type="delete" style={{ color: '#1890ff', cursor: 'pointer', marginLeft: '10px' }} />
                </ Popconfirm>
            </span>
        ),
    }
    ];

    const groupSource = [{
        id: '1',
        groupName: '全部(2)'
    },
    {
        id: '2',
        groupName: '管理组(0)'
    },
    {
        id: '3',
        groupName: '客服组(0)'
    },
    {
        id: '4',
        groupName: '售后组(0)'
    }
    ];


    return (

        <div style={{ width: '800px' }}>
            <div className={styles.promotion_head}>
                <h4>用户管理</h4>
                <p>对子账号分组，权限，新建，删除，修改操作</p>
            </div>
            <div className={styles.promotion_head}>
                <h4>统计数据</h4>
                <Row>
                    <Col span="3">已激活账号</Col>
                    <Col span="1"><div className={privateStyles.collect_text}><span>0</span></div></Col>
                    <Col span="2"></Col>
                    <Col span="3">未激活账号</Col>
                    <Col span="1"><div className={privateStyles.collect_text}><span>0</span></div></Col>
                    <Col span="2"></Col>
                    <Col span="2">分组</Col>
                    <Col span="1"><div className={privateStyles.collect_text}><span>1</span></div></Col>
                </Row>
            </div>
            <div className={styles.promotion_head}>
                <div className={privateStyles.operation_container}>
                    <a onClick={addNewUser}><Icon type="plus" style={{ fontWeight: 'bold' }} />添加客服账号</a>
                    <a onClick={exportList} style={{ marginLeft: '12px' }}><Icon type="export" style={{ fontWeight: 'bold' }} />导出客服列表</a>
                </div>
                <br />
                <Row>
                    <Col span="6" style={{ borderRight: '1px solid rgb(236, 226, 226)' }}>
                        <div>
                            <div style={{ padding: '21px', fontSize: '15px' }}><a onClick={showGroupAddModal}><Icon style={{ marginRight: '5px' }} type="plus" />新建分组</a></div>
                            <GroupAddModal />
                            <Table dataSource={groupSource} columns={groupColumn} pagination={false} style={{ textAlign: 'center' }} />
                        </div>
                    </Col>
                    <Col span="15">
                        <Table dataSource={dataSource} columns={columns} pagination={false} style={{ marginTop: '10px', width: '580px' }} />
                    </Col>
                </Row>
            </div>
        </div>
    );
};




export default connect(({ usermanage }) => ({ usermanage }))((UserManagementItem));
