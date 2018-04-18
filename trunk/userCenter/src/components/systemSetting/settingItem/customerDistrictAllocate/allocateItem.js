import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber } from 'antd';
const ButtonGroup = Button.Group;

import EditDistrctModal from './editDistrictModal';



import styles from '../../system.css';

const AllocateItem = ({ customerDistrict , dispatch}) => {

    function onEditPattern(){
        dispatch({
            type: 'customerDistrict/toggleModal'
        });
    };

    const columns = [{
        title: '客服小组',
        dataIndex: 'suporterGroup',
        key: 'suporterGroup'
    }, {
        title: '可以看到',
        dataIndex: 'visitorInfo',
        key: 'visitorInfo'
    },
    {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        render: (text, record) => (
            record.suporterGroup  === 'VIP客服组' ? 
            <span style={{ color: '#1890ff', cursor: 'pointer' }} onClick={onEditPattern}>
                <Icon type="edit" /><span style={{marginLeft:'5px' }}>修改</span>
            </span>
            : <span></span>
        ),
    }];

    const dataSource = [{
        suporterGroup: '售后客服组',
        visitorInfo: '所有访客'
    },
    {
        suporterGroup: '售前客服组',
        visitorInfo: '所有访客'
    },
    {
        suporterGroup: 'VIP客服组',
        visitorInfo: '所有访客'
    },
    {
        suporterGroup: '管理组',
        visitorInfo: '所有访客'
    }
];

    return (
        <div>
            <div className={styles.promotion_head} >
                <h4>访问地区分配</h4>
                <p>限制客服小组内普通客服可以看到的在线访客地区范围</p>
                <Switch defaultChecked className={styles.cell_switch} style={{ position: 'absolute', top: '20px', right: '20px' }} />
                <Table dataSource={dataSource} columns={columns} pagination={false} style={{ marginTop: '20px' }} />
                <EditDistrctModal />
            </div>
        </div>
    );
};



export default connect(({ customerDistrict }) => ({ customerDistrict }))((AllocateItem));
