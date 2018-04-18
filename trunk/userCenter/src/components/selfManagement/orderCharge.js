import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Link } from 'react-router';
import { Row, Col, Icon, Input, Button, Radio, List ,Avatar} from 'antd';
const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;

// import service from '../../service';

import styles from '../myTuition/index.css';

//订单结算
class OrderCharge extends React.Component {


    componentDidMount() {

    }

    handlePay() {
        this.props.dispatch(routerRedux.push('/paysuccess'));
    }




    render() {

        const data = this.props.detailList;
        
        const total = this.props.total;
    




        return (
            <div>
                <div style={{ height: '100%', backgroundColor: '#fff', padding: '10px', marginTop: '10px' }}>
                    <div className={styles.list_bread}>
                        选择支付方式
                 </div>
                    <div className={styles.pay_way_container}>
                        <RadioGroup>
                            <Radio value={1} style={{ width: '400px' }} ><div className={styles.wechat_pay}></div></Radio>
                            <Radio value={2}>
                                <div className={styles.ali_pay}></div>
                            </Radio>

                        </RadioGroup>
                    </div>
                    <div>
                        <List style={{ marginTop: '20px',padding:'20px' }}
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item actions={[<div style={{paddingRight:'20px'}}>实付款: <span style={{color:'red',marginLeft:'20px'}}>{item.PreferentialPrice}</span></div>]}>
                                    <List.Item.Meta
                                        avatar={<Avatar style={{width:'160px',height:'90px'}} src={item.CoverPath} ></Avatar>}
                                        title={<span>{item.Name}</span>}
                                        description={
                                            <div>
                                                <span>{item.JobTitle}</span>&nbsp;&nbsp;&nbsp;
                                            <span>{item.teachName}</span>&nbsp;&nbsp;&nbsp;
                                            <span> {item.TotalHours}课</span>&nbsp;&nbsp;&nbsp;
                                       </div>
                                        }
                                    />
                                </List.Item>
                            )}
                        />

                    </div>
                  <div  className={styles.pay_way_container}>
                    <p style={{ color: '#bfbfbf', fontSize: '13px',float:'left' }}>
                        提示 : 请在30分钟内支付完成，如未完成此订单将自动关闭，需重新购买！
                    </p>
                    <div style={{ float: 'right', textAlign: 'right', paddingRight: '5px' }}>
                        <p>
                            应付总额:
                          <span style={{ fontSize: '25px', color: 'red', marginLeft: '10px' }}>￥{total}</span>
                        </p>
                        <Button className={styles.cancel_btn} onClick={this.handlePay.bind(this)}>立即支付</Button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default connect(({ order }) => ({ order }))((OrderCharge));
