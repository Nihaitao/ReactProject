import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber } from 'antd';
const ButtonGroup = Button.Group;


import styles from '../../system.css';

class PatternSettingItem extends React.Component {
    state = {

    };

    onClickToGoBack() {
        this.props.dispatch({
            type: 'dialogInvitation/changeInvitationItemId',
            payload: 1,
        });
    }

    onAddNewRule() {
        this.props.dispatch({
            type: 'dialogInvitation/changeInvitationItemId',
            payload: 3,
        });
    }




    render() {
        const columns = [{
            title: '优先级',
            dataIndex: 'preferLevel',
            key: 'preferLevel',
            width:'5%'
        }, {
            title: '规则名称',
            dataIndex: 'patternName',
            key: 'patternName',
            width:'20%'
        },

        {
            title: '规则条件',
            dataIndex: 'patternCondition',
            key: 'patternCondition',
            width:'28%'
        },
        {
            title: '使用平台',
            dataIndex: 'platform',
            key: 'platform',
            width:'18%'
        },
        {
            title: '时间',
            dataIndex: 'time',
            key: 'time',
            width:'12%'
        },
        {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
            render: (text, record) => (
                <span>
                    <Icon type="edit" style={{ color: '#1890ff', cursor: 'pointer' }} />
                    <Popconfirm title="确认删除此条黑名单吗?" okText="确定" cancelText="取消">
                        <Icon type="delete" style={{ color: '#1890ff', cursor: 'pointer',marginLeft:'5px' }} />
                    </ Popconfirm>
                </span>
            ),
        }
        ];

        const dataSource = [{
            preferLevel: '1',
            patternName: '规则名称A',
            patternCondition:'回头客等于是；关键词等于5； 来源方式等于是直接访问',
            platform: '桌面平台',
            time: '永久'
        },
        {
            preferLevel: '2',
            patternName: '规则名称B',
            platform: '桌面平台',
            time: '永久'
        },
        {
            preferLevel: '3',
            patternName: '规则名称C',
            platform: '桌面平台',
            time: '永久'
        },
        {
            preferLevel: '4',
            patternName: '规则名称D',
            platform: '桌面平台',
            time: '永久'
        }
    ];

        return (
            <div>
                <div className={styles.promotion_head} style={{ height: '120px' }} style={{ borderBottom: '10px solid #f1f1f1' }}>
                    <div style={{ margin: '0', padding: '0' }}>
                        <div style={{ float: 'left', fontSize: '40px', width: '3%', marginRight: '55px' }}>
                            <Icon type="left" style={{ marginTop: '20px', cursor: 'pointer' }} onClick={this.onClickToGoBack.bind(this)} />
                        </div>
                        <div style={{ width: '120%' }} >
                            <h4>邀请机制</h4>
                            <p>顾客访问你的网站时，定制何种方式发送邀请</p>
                            <br />
                            <a style={{ color: '#63B8FF', marginLeft: '68px' }} onClick={this.onAddNewRule.bind(this)} >添加新规则</a>
                        </div>
                    </div>
                </div>
                <div className={styles.promotion_head} >
                    <h4 style={{ color: '#63B8FF' }}>默认桌面邀请外观样式</h4>
                </div>
                <div className={styles.promotion_head}>
                    <h4 style={{ color: '#63B8FF' }}>默认移动邀请外观样式</h4>
                </div>
                <div>
                <Table dataSource={dataSource} columns={columns} pagination={false} style={{ marginTop: '10px' }} />
                    </div>
            </div>
        );
    }
}



export default connect(({ dialogInvitation }) => ({ dialogInvitation }))((PatternSettingItem));

