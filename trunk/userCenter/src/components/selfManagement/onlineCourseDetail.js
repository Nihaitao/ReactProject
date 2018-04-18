import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Link } from 'react-router';
import { Row, Col, Icon, Input, Tabs, Table, List, Avatar, Button, Checkbox } from 'antd';
const TabPane = Tabs.TabPane;

// import service from '../../service';

import styles from './index.css';

//课程详情
class OnlineCourseDetail extends React.Component {


    componentDidMount() {
        
    }




    render() {

        const data = this.props.order.orderList;

        function showTotal(total) {
            return `共 ${total} 条`;
        }

        const pagination = {
            showQuickJumper: true,
            pageSize: 10,
            current: 1,
            total: data.length,
            showTotal: showTotal,
            onChange: (() => { }),
        };


        return (
            <div style={{ padding: '10px' }}>
                <div style={{ marginBottom: '15px' }}>
                    <Checkbox >全选</Checkbox>  <Button style={{ marginLeft: '20px' }}>删除订单</Button>
                </div>
                <List
                    pagination={pagination}
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <div style={{ marginBottom: '15px', border: '1px solid #e8e8e8' }}>
                            <div className={styles.order_list_title}>
                                <span>订单编号: </span><span>{item.OrderNo}</span>
                                <span className={styles.order_time}>{item.PayTime.replace("T"," ").replace("+", " ")}</span>
                            </div>
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.OrderDetailList[0].CoverPath} style={{ width: '160px', height: '90px', marginLeft: '10px' }} />}
                                    title={<h3 style={{ paddingTop: '20px', marginLeft: '20px' }}>{item.OrderDetailList[0].Name}</h3>}
                                    description={<span style={{ marginLeft: '20px' }}>{item.OrderDetailList[0].TotalHours}课</span>}
                                />
                                <div style={{ width: '100%' }}>
                                    <Row>
                                        <Col span="6" className={styles.col_1}>
                                            <div className={styles.order_price}><span>￥</span>{item.OrderDetailList[0].PreferentialPrice}</div>
                                        </Col>
                                        <Col span="8" className={styles.col_2}>
                                            {item.PayStatus == 1 ? '已开通' : '未开通'}
                                        </Col>
                                        <Col span="10" className={styles.col_3}>
                                            <Button style={{ width: '120px' }} className={styles.cancel_btn}>开始学习</Button>
                                        </Col>
                                    </Row>
                                </div>

                            </List.Item>
                        </div>
                    )}
                />
            </div>
        );
    }
}


export default connect(({ order }) => ({ order }))((OnlineCourseDetail));
