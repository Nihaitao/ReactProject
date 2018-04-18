import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber } from 'antd';
const ButtonGroup = Button.Group;


import styles from '../../system.css';

class EditSupporterSortItem extends React.Component {
    state = {

    };

    onClickToGoBack(){
        this.props.dispatch({
            type: 'supportAllocation/changeAllocationItyemId',
            payload: 1,
          });
    }

    render() {
        const columns = [{
            title: '',
            dataIndex: 'prferLevel',
            key: 'prferLevel',
            width:'15%'
        }, {
            title: '',
            dataIndex: 'condition',
            key: 'condition'
        }];

        const dataSource = [{
            prferLevel: '1',
            condition: '超级管理员'
        }, {
            prferLevel: '2',
            condition: '客服小米'
        }, {
            prferLevel: '3',
            condition: '超级管理员'
        }, {
            prferLevel: '4',
            condition: '客服小米'
        }
        ];

        return (
            <div>
                <div className={styles.promotion_head} style={{ height: '120px',borderBottom: '10px solid #f1f1f1' }}>
                    <div style={{ margin: '0', padding: '0' }}>
                        <div style={{ float: 'left', fontSize: '40px', width: '3%', marginRight: '55px' }}>
                            <Icon type="left" style={{ marginTop: '20px' }} onClick={this.onClickToGoBack.bind(this)} />
                        </div>
                        <div style={{ width: '120%' }} >
                            <h4>客服排序设置</h4>
                            <p>上下拖动可调整客服排序，此排序对各种依赖排序的分配规则都有效</p>
                            <br />
                            <a style={{ color: '#63B8FF', marginLeft: '68px' }} >修改基础分配规则</a>
                        </div>
                    </div>
                </div>
                <Table dataSource={dataSource} columns={columns} pagination={false} showHeader={false} />
            </div>
        );
    }
}


export default connect(({ supportAllocation }) => ({ supportAllocation }))((EditSupporterSortItem));
