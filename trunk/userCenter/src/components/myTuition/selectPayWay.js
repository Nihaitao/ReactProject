import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Row, Col, Icon, Input, Button,Radio } from 'antd';
const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;

import styles from './index.css';

const selectPayWay = ({ dispatch }) => {

    function handlePay(){
        dispatch(routerRedux.push('/paysuccess'));
    }

    return (
        <div>
            <div style={{ height: '360px', backgroundColor: '#fff', padding: '10px', marginTop: '10px' }}>
                <div className={styles.list_bread}>
                    选择支付方式
                 </div>
                <div className={styles.pay_way_container}>
                    <RadioGroup>
                        <Radio value={1} style={{width:'400px'}} ><div className={styles.wechat_pay}></div></Radio>
                        <Radio value={2}>
                        <div className={styles.ali_pay}></div>                        
                        </Radio>
                       
                    </RadioGroup>
                </div>

                <p style={{ color: '#bfbfbf', fontSize: '13px' }}>
                    提示 : 请在30分钟内支付完成，如未完成此订单将自动关闭，需重新购买！
                  </p>
                <div style={{ float: 'right', textAlign: 'right', paddingRight: '5px' }}>
                    <p>
                        应付总额:
                          <span style={{ fontSize: '25px', color: 'red', marginLeft: '10px' }}>￥100</span>
                    </p>
                    <Button className={styles.cancel_btn} onClick={handlePay}>立即支付</Button>
                </div>
            </div>
        </div>
    );
};


export default connect(({  }) => ({  }))((selectPayWay));
