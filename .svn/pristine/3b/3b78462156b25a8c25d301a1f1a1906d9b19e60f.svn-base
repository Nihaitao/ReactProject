import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Row, Col, Icon, Input, Tabs, Table, List, Avatar, Button, Timeline } from 'antd';
const TabPane = Tabs.TabPane;

import styles from './index.css';

const rechargeDetails = ({ dispatch }) => {

    function linkToPayWay(){
        dispatch(routerRedux.push('/payway'));
    }

    const dataSource = [{
        project: "余额充值",
        price:3000
    },
    {
        project: "余额充值",
        price:3000
    }
];

    const columns = [{
        title: '缴费项目',
        dataIndex: 'project',
        key: 'project',
    }, {
        title: '缴费金额',
        dataIndex: 'price',
        key: 'price',
        render: (text, record) => (
            <div>
              <span style={{float:'left'}}>在线支付</span><Input value ={record.price} size="small" disabled style={{float:'left',width:'50px',marginLeft:'10px'}} />
            </div>
          ),
    }];

  const time = "2017-05-12 14:02:02";

    return (
        <div>
            <div style={{ height: '420px', backgroundColor: '#fff', padding: '10px',marginTop:'10px' }}>
                <div className={styles.list_bread}>
                    充值
                 </div>
                   <div style={{margin:'15px 0 10px 0'}}>
                      {time}
                   </div>
                   <Table columns={columns} dataSource={dataSource} pagination={false} bordered />
                   <br/>
                   <p style={{color:'#333',borderBottom:'1px dashed rgba(0, 0, 0, 0.15)',paddingBottom:'15px'}}><span style={{color:'#faad14'}}>温馨提示 : </span>选择余额支付或在线支付，余额支付金额将自动计算，无法修改</p>
                   <div style={{float:'right',textAlign:'right',paddingRight:'5px'}}>
                      <p>支付金额:<span style={{fontSize:'25px',color:'red',marginLeft:'10px'}}>￥100</span></p>
                      
                      <Button className={styles.cancel_btn} onClick={linkToPayWay}>立即支付</Button>
                   </div>
            </div>
        </div>
    );
};


export default connect(({  }) => ({  }))((rechargeDetails));
