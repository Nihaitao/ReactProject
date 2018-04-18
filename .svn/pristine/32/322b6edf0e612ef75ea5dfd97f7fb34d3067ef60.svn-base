import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Input, Tag } from 'antd';


import styles from '../../system.css';

class TagManagementItem extends React.Component {
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

        const columns = [{
            title: '标签',
            dataIndex: 'tag',
            key: 'tag'
        }, {
            title: '使用次数',
            dataIndex: 'count',
            key: 'count'
        },
        {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
            render: (text, record) => (
                <span>
                    <Icon type="edit" style={{ color: '#1890ff', cursor: 'pointer',marginRight:'5px' }} />
                    <Popconfirm title="确认删除此条标签吗?" onConfirm={confirm} onCancel={cancel} okText="确定" cancelText="取消">
                        <Icon type="delete" style={{ color: '#1890ff', cursor: 'pointer' }} />
                    </ Popconfirm>
                </span>
            ),
        }
        ];

        const dataSource = [{
            tag: '投诉客户',
            count: '1'
        },
        {
            tag: 'VIP顾客',
            count: '25'
        }

        ];

        return (
            <div>
                <div className={styles.promotion_head} style={{ borderBottom: '10px solid #f1f1f1' }}>
                    <h4>标签管理</h4>
                    <p>通过标签，客服可对顾客进行分类，以方便后续的整理和分析</p>
                    <br />
                    <Button type="primary" icon="plus" >添加新标签</Button>
                </div>
                <div className={styles.promotion_head} style={{ borderBottom: '10px solid #f1f1f1' }}>
                    <h4>添加新标签</h4>
                    <div style={{ marginTop: '15px' }} >
                        <Tag color="#f50">#f50</Tag>
                        <Tag color="#2db7f5">#2db7f5</Tag>
                        <Tag color="#87d068">#87d068</Tag>
                        <Tag color="#108ee9">#108ee9</Tag>
                        <Tag color="#9F79EE">#9F79EE</Tag>
                        <Tag color="#EEEE00">#EEEE00</Tag>
                    </div>
                    <br />
                    <Input placeholder="标签名称" style={{ width: '340px', marginRight: '5px' }} />
                    <Button type="primary">保存</Button>
                </div>
                <div className={styles.promotion_head} >
                    <Table dataSource={dataSource} columns={columns} pagination={false} style={{ marginTop: '10px' }} />
                </div>

            </div>
        );
    }
}



export default connect(({ }) => ({}))((TagManagementItem));
