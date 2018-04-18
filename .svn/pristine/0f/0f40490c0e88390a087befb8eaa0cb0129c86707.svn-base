import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Row, Col, Icon, Input, Tabs, Table, List, Avatar, Button, Timeline, Tooltip  } from 'antd';
const TabPane = Tabs.TabPane;

import styles from './index.css';

const PayFeesNow = ({ dispatch }) => {

    function linkToRecharge() {
        dispatch(routerRedux.push('/recharge'));

    }

    function linkToPayWay() {
        dispatch(routerRedux.push('/payway'));
    }

    const dataSource = [{
        summary: 5500,
        shouldPay: 3000,
        discount: 500,
        realPay: 2500,
        ownPay: 2500,
        payTimes: 0,
        balance: 0
    }];

    const columns = [{
        title: '总缴费统计',
        dataIndex: 'summary',
        key: 'summary',
    }, {
        title: '应缴费用',
        dataIndex: 'shouldPay',
        key: 'shouldPay',
    }, {
        title: '优惠',
        dataIndex: 'discount',
        key: 'discount',
    }, {
        title: '实缴费用',
        dataIndex: 'realPay',
        key: 'realPay',
    }, {
        title: '欠缴费用',
        dataIndex: 'ownPay',
        key: 'ownPay',
        render: (text, record) => (
            <span style={{ color: 'red' }}>
                {record.ownPay}
            </span>
        ),
    }, {
        title: '缴费次数',
        dataIndex: 'payTimes',
        key: 'payTimes',
    },
    {
        title: '账户余额',
        dataIndex: 'balance',
        key: 'balance',
    }, {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        render: (text, record) => (
            <span>
                <Button>在线支付</Button>
                <Button onClick={linkToRecharge} type="primary" style={{marginLeft:'10px'}}>充值</Button> 
            </span>
        ),
    }
    ];

    const columns2 = [{
        title: '缴费项目',
        dataIndex: 'project',
        key: 'project',
    }, {
        title: '缴费说明',
        dataIndex: 'description',
        key: 'description',
    }, {
        title: '应交金额',
        dataIndex: 'shouldPayNum',
        key: 'shouldPayNum',
    }, {
        title: '优惠金额',
        dataIndex: 'dicountNum',
        key: 'dicountNum',
    }, {
        title: '已交金额',
        dataIndex: 'alreadyPayNum',
        key: 'alreadyPayNum',
    },
    {
        title: '欠缴金额',
        dataIndex: 'ownPayNum',
        key: 'ownPayNum',
        render: (text, record) => (
            <span style={{ color: 'red' }}>
                {record.ownPayNum}
            </span>
        ),
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
    }, {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        render: (text, record) => (
            <span>
                {/* <Button onClick={linkToPayWay} style={{ backgroundColor: '#f97a1e', color: '#fff', borderColor: '#f97a1e' }}>在线支付</Button> */}
                <Button type="primary">在线支付</Button>
            </span>
        ),
    }];

    const dataSource2 = [{
        project: '自考第一年学费',
        description: '自考第一年学费',
        shouldPayNum: 500,
        dicountNum: 2500,
        alreadyPayNum: 2500,
        ownPayNum: 0,
        status: '费用缴清'
    }, {
        project: '自考第二年学费',
        description: '自考第二年学费',
        shouldPayNum: 500,
        dicountNum: 2500,
        alreadyPayNum: 2500,
        ownPayNum: 0,
        status: '费用缴清'
    }, {
        project: '自考第三年学费',
        description: '自考第三年学费',
        shouldPayNum: 500,
        dicountNum: 2500,
        alreadyPayNum: 2500,
        ownPayNum: 0,
        status: '费用缴清'
    }
    ];
    const tooltipText= <p style={{ fontSize: '13px' }}>温馨提示：请仔细查看自己的书籍记录，如无误请点击"
    <span style={{ color: '#52c41a' }}><Icon type="check-circle" style={{ marginRight: '5px' }} />确认无误</span>"，如不正确请点击"
    <span style={{ color: 'red' }}><Icon type="exclamation-circle" style={{ marginRight: '5px' }} />有异议</span>"，
    确认完毕显示"已确认"</p> ;

    const expandedRowRender = () => {
        const columns = [
          { title: '时间', dataIndex: 'date', key: 'date' },
          { title: '实交', dataIndex: 'realPay', key: 'realPay'},
          { title: '说明', dataIndex: 'description', key: 'description' },
          { title: '支付方式', dataIndex: 'payWay', key: 'payWay' },
          { title: '', dataIndex: 'operation', key: 'operation',
             render: (text, record) => (
                record.status == 0 ? <span style={{color:'#52c41a'}}>已确认</span> 
                : (record.status== 1 ? <span style={{color:'red'}}>有异议</span> 
                : <Tooltip title={tooltipText}>
                      <span ><Icon type="check-circle" style={{ marginRight: '15px',color: '#52c41a',cursor:'pointer' }}/>
                           <Icon type="exclamation-circle" style={{ color:'red',cursor:'pointer'}} />
                     </span>
                </Tooltip>)  
        )
    }];
      
        const data = [{
            date: '2014-12-24 23:12:00',
            realPay: '5000',
            description: '张伟强实缴第二年学费测试',
            payWay:'支付宝',
            status:0
        },
        {
            date: '2014-12-24 23:12:00',
            realPay: '5000',
            description: '张伟强实缴第二年学费测试',
            payWay:'支付宝',
            status:1
        },
        {
            date: '2014-12-24 23:12:00',
            realPay: '5000',
            description: '张伟强实缴第二年学费测试',
            payWay:'支付宝',
            status:2
        }
    ];
        return (
          <Table
             bordered
            columns={columns}
            dataSource={data}
            pagination={false}
            className={styles.childTable}
          />
        );
      };

    return (
        <div>
            <div style={{ height: '100%', backgroundColor: '#fff', padding: '10px' }}>
                <div className={styles.list_bread}>
                    总缴费统计
                   </div>
                <div style={{ paddingLeft: '20px' }}>
                    <Table columns={columns} dataSource={dataSource} pagination={false}  />
                    <br />
                    <p style={{ width: '50%', color: '#bfbfbf', fontSize: '13px' }}>注：请仔细查看自己的缴费记录，如无误请点击"确认无误"，如不正确请点击"有异议"
                   其中缴费项目缴费说明相同，相加后的对比，应缴总和=实缴总和+欠缴总和</p>
                </div>
            </div>
            <div style={{ height: '100%', backgroundColor: '#fff', padding: '10px' }}>
                <div className={styles.list_bread}>
                    自学考试本科——人力资源管理(已毕业)
                   </div>
                   <div style={{ paddingLeft: '20px' }}>
                <Table columns={columns2} dataSource={dataSource2} pagination={false} expandedRowRender={expandedRowRender}  defaultExpandAllRows={true} />
                <br />
                
                </div>
            </div>
        </div>
    );
};


export default connect(({ }) => ({}))((PayFeesNow));
