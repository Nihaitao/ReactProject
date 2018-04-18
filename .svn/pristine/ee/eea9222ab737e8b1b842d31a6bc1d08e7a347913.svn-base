import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Row, Col, Icon, Input, Tabs, Table, List, Avatar, Button, Timeline } from 'antd';
const TabPane = Tabs.TabPane;

import styles from './index.css';

const recharge = ({ dispatch }) => {

    const dataSource = [{
        description: "周可可充值",
        price:3000,
        time: '2017-05-12 00:00:00',
        payWay: "预收账款-学生余额",
        type:"充值"
    },
    {
        description: "周可可充值",
        price:3000,
        time: '2017-05-12 00:00:00',
        payWay: "预收账款-学生余额",
        type:"充值"
    }
];

    const columns = [{
        title: '说明',
        dataIndex: 'description',
        key: 'description',
    }, {
        title: '金额',
        dataIndex: 'price',
        key: 'price',
    }, {
        title: '时间',
        dataIndex: 'time',
        key: 'time',
    }, {
        title: '方式',
        dataIndex: 'payWay',
        key: 'payWay',
    }, {
        title: '类型',
        dataIndex: 'type',
        key: 'type'
    }, {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: (text, record) => (
            <span>
              <Icon type="check-circle" style={{marginRight:'5px',color:'#52c41a',fontSize:'16px'}}/>
              <Icon type="exclamation-circle" style={{marginRight:'5px',color:'red',fontSize:'16px'}}/>
            </span>
          ),
    }
];

    function handleRecharge(){
        dispatch(routerRedux.push('/rechargedetails'));  
    }



    return (
        <div>
            <div style={{ backgroundColor: '#fff', padding: '10px' }}>
                <div className={styles.list_bread}>
                    我的账户余额
                   </div>
                   <div>
                       <Row>
                           <Col span="7" className={styles.col_1} >
                           <Icon type="pay-circle-o" className={styles.icon}/>
                              <p>账户总余额</p>
                             <p><span style={{color:'red',fontSize:'25px'}}>1000</span><span style={{marginLeft:'5px'}}>元</span></p>
                           </Col>
                           <Col span="16" style={{padding:'50px'}}>
                           <p style={{fontSize:'13px',color:'#333'}}>温馨提示：请仔细查看自己的书籍记录，如无误请点击"
                               <span style={{color:'#52c41a'}}><Icon type="check-circle" style={{marginRight:'5px'}}/>确认无误</span>"，如不正确请点击"
                               <span style={{color:'red'}}><Icon type="exclamation-circle" style={{marginRight:'5px'}}/>有异议</span>"，
                               确认完毕显示"已确认"
                          </p>
                          <br/>
                          <Button onClick={handleRecharge} style={{backgroundColor:'#f97a1e',color:'#fff',borderColor:'#f97a1e'}}>马上充值</Button>
                           </Col>
                           </Row>
                       </div>
                   
            </div>
            <div style={{ height: '100%', backgroundColor: '#fff', padding: '10px',marginTop:'10px' }}>
                <div className={styles.list_bread}>
                    余额账号明细
                   </div>
                   <Table columns={columns} dataSource={dataSource} pagination={false}/>
            </div>
        </div>
    );
};



export default connect(({  }) => ({  }))((recharge));
