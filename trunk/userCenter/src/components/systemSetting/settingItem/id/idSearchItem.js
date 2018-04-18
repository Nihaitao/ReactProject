import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber, Select, TreeSelect } from 'antd';
const ButtonGroup = Button.Group;
const Option = Select.Option;


import styles from '../../system.css';

const IdSearchItem = ({ }) => {

    const treeData = [{
        label: '客服组',
        value: '0-0',
        key: '0-0',
        children: [{
            label: '客服小米',
            value: '0-0-1',
            key: '0-0-1',
        }, {
            label: '客服小艾',
            value: '0-0-2',
            key: '0-0-2',
        },{
            label: '客服米莱',
            value: '0-0-3',
            key: '0-0-3',
        }
    ],
    }, {
        label: '售后组',
        value: '0-1',
        key: '0-1',
    }, {
        label: '管理组',
        value: '0-2',
        key: '0-2',
    }, {
        label: '维护组',
        value: '0-2',
        key: '0-2',
    }
];

    return (
        <div>
            <div className={styles.promotion_head} >
                <h4>ID查询</h4>
                <p>你可以在这里查询你需要的企业ID、客服组ID、客服ID</p>
            </div>
            <div className={styles.promotion_head} style={{ height: '70px' }}>
                <h4 style={{ float: 'left' }}>企业ID：</h4>
                <p style={{ float: 'left', fontSize: '14px' }}>77548</p>
            </div>
            <div className={styles.promotion_head} style={{ height: '120px' }}>
                <h4 style={{ float: 'left' }}>分组ID：</h4>
                <p style={{ float: 'left', fontSize: '14px' }}>7a9ffd7b2325cb4d3a92606d821a1dcb</p>
                <br />
                <br />
                <Select placeholder="请选择" style={{ width: '160px' }} >
                    <Option value={1}>客服组</Option>
                    <Option value={2}>售后组</Option>
                    <Option value={3}>管理组</Option>
                    <Option value={4}>维护组</Option>
                </Select>
            </div>
            <div className={styles.promotion_head} style={{ height: '120px' }}>
                <h4 style={{ float: 'left' }}>用户ID：</h4>
                <p style={{ float: 'left', fontSize: '14px' }}>7a9ffd7b2325cb4d3a92606d821a1dcb</p>
                <br />
                <br />
                <TreeSelect
                    placeholder="请选择"
                    style={{ width: 300 }}
                   // value={this.state.value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    treeData={treeData}
                // onChange={this.onChange}
                />
            </div>

        </div>
    );
};



export default IdSearchItem;
