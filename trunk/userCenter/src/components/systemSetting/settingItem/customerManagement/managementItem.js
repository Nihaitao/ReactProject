import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Input } from 'antd';


import styles from '../../system.css';

class ManagementItem extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {

    };




    render() {

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

                title: '筛选条件',
                dataIndex: 'filter',
                key: 'filter'
            },
            {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                render: (text, record) => (
                    <span>
                        <Icon type="edit" style={{ color: '#1890ff', cursor: 'pointer', marginRight: '10px' }} />
                        <Popconfirm title="确认删除此筛选条件吗?" onConfirm={confirm} onCancel={cancel} okText="确定" cancelText="取消">
                            <Icon type="delete" style={{ color: '#1890ff', cursor: 'pointer' }} />
                        </ Popconfirm>
                    </span>
                ),
            }
        ];

        const dataSource = [{
            filter: '筛选条件一'
        },
        {
            filter: '筛选条件二'
        }
        ];

        return (
            <div>
                <div className={styles.promotion_head} style={{ borderBottom: '10px solid #f1f1f1' }}>
                    <h4>顾客管理</h4>
                    <p>管理顾客名片和顾客列表信息</p>
                    <div style={{ marginTop: '10px', color: '#1890ff' }}  >顾客列表管理</div>
                </div>
                <div className={styles.promotion_head}>
                    <h4>筛选条件管理</h4>
                    <p>对已保存的筛选条件进行保存</p>
                    <Table dataSource={dataSource} columns={columns} pagination={false} style={{ marginTop: '10px' }} />
                </div>
            </div>
        );
    }
}



export default connect(({ }) => ({}))((ManagementItem));
