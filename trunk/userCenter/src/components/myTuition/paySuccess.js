import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Row, Col, Icon, Input, Button } from 'antd';

import styles from './index.css';

const paySuccess = ({ dispatch }) => {

    const payWay = "支付宝";
    const orderNum = "13213145455";
    const payAccount = "100025641";
    const payCount = "299";

    function handleGoBack(){
        dispatch(routerRedux.push('/payfees'));
        
    }

    return (
        <div style={{ backgroundColor: '#fff', height: '260px' }}>
            <Row>
                <Col span="6">
                    <div className={styles.pay_success}></div>
                </Col>
                <Col span="18">
                    <div style={{ padding: '50px' }}>
                        <h3 style={{ color: 'red', fontWeight: 'bold' }}>恭喜您！支付成功！</h3>
                        <br />
                        <Row>
                            <Col span="6">
                                支付方式 :
                            <span style={{ marginLeft: '15px' }}>{payWay}</span>
                            </Col>
                            <Col span="15" style={{ float: 'right' }}>
                                您的订单号 :
                            <span style={{ marginLeft: '15px' }}>{orderNum}</span>
                            </Col>
                        </Row>
                        <br />


                        <Row>
                            <Col span="6">
                                支付宝账号 :
                            <span style={{ marginLeft: '15px' }}>{payAccount}</span>
                            </Col>
                            <Col span="15" style={{ float: 'right' }}>
                                支付金额 :
                            <span style={{ marginLeft: '15px', color: 'red', fontSize: '18px' }}>{payCount}</span>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col span="5"><Button className={styles.cancel_btn} onClick={handleGoBack}>返回列表</Button></Col>
                        </Row>

                    </div>
                </Col>
            </Row>
            <br />


        </div>
    );
};



export default connect(({ }) => ({}))((paySuccess));
