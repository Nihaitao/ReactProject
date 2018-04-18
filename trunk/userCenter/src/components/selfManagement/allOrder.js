import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Link } from 'react-router';
import { Row, Col, Icon, Input, Tabs, Table, List, Avatar, Button, Checkbox } from 'antd';
const TabPane = Tabs.TabPane;

// import service from '../../service';

import styles from './index.css';

//我的订单，所有订单
class AllOrder extends React.Component {


    componentDidMount() {

        this.props.dispatch({
            type: 'order/fetchOrderList',
            payload: {
                PayStatus: -1,
                PageIndex: 1,
                PageSize: 10,
                PageStatus: 1
            }
        });
    }

    handleStartLearn(courseId) {
        debugger;
        this.props.dispatch(routerRedux.push('/coursedetail/' + courseId));

    }

    handleOrderCharge(orderId){
        this.props.dispatch(routerRedux.push('/ordercharge/' + orderId));

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

        function renderMultiListItem(childNodes) {
            const content = childNodes.OrderDetailList.map((childItems, index) =>
                <div>
                    <li>{index}</li>
                </div>
            )
            return "aa"
            //   <div style={{ marginBottom: '15px', border: '1px solid #e8e8e8' }}>
            //     <div className={styles.order_list_title}>
            //         <span>订单编号: </span><span>{childNodes.OrderNo}</span>
            //         <span className={styles.order_time}>{childNodes.PayTime.replace("T", " ").replace("+", " ")}</span>
            //     </div>
            //     {content}
            // </div>
        }


        return (
            <div style={{ padding: '10px' }}>
                <div style={{ marginBottom: '15px' }}>
                    <Checkbox >全选</Checkbox>  <Button style={{ marginLeft: '20px' }}>删除订单</Button>
                </div>
                <List
                    pagination={pagination}
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item =>
                        <div style={{ marginBottom: '15px', border: '1px solid #e8e8e8' }}>
                            <div className={styles.order_list_title}>
                                <span>订单编号: </span><span>{item.OrderNo}</span>
                                <span className={styles.order_time}>{item.PayTime.replace("T", " ").replace("+", " ")}</span>
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
                                            {item.PayStatus == 1 ? '已开通' : '等待付款'}
                                        </Col>
                                        <Col span="10" className={styles.col_3}>
                                            {
                                                item.PayStatus == 1 ?
                                                    <Button style={{ width: '120px' }} className={styles.cancel_btn} onClick={this.handleStartLearn.bind(this, item.OrderDetailList[0].Course_ID)}>开始学习</Button>
                                                    :
                                                    <Button style={{ width: '120px' }} className={styles.cancel_btn} onClick={this.handleOrderCharge.bind(this, item.OrderId)}>立即支付</Button>
                                            }
                                            
                                        </Col>
                                    </Row>
                                </div>

                            </List.Item>
                        </div>
                    } />
            </div>
        );
    }
}


export default connect(({ order }) => ({ order }))((AllOrder));
