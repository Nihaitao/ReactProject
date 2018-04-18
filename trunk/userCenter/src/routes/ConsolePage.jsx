import React from 'react';
import { Link } from 'dva/router'
import { connect } from 'dva';
import { Layout, Menu, Icon, Button, Avatar, Badge } from 'antd';
const { Content, Row, Col } = Layout;

import styles from './console.css';




class ConsolePage extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.console_header}>
                    <div className={styles.first_section}>
                        <Avatar className={styles.avatar} shape="circle" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        <div className={styles.infoBox}>
                            <p>
                                <span style={{ color: '#333', fontWeight: 'bold', fontSize: '20px' }}>sx&nbsp;</span>
                                <span style={{ color: '#999', marginRight: '30px' }}>欢迎您!</span>
                                <span style={{ color: '#f97a1e', cursor: 'pointer' }}>查看更多&gt;&gt;</span>
                            </p>
                            <p>
                                <Icon type="mobile" className={styles.info_icon} />
                                <span style={{ marginLeft: '5px', marginRight: '40px' }}>不详</span>
                                <Icon type="mail" className={styles.info_icon} />
                                <span style={{ marginLeft: '5px' }}>不详</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.orderMsgBox}>
                        <div className={styles.myOrderBox}>
                          <Link to="order">
                            <div style={{ marginLeft: '10px' }}>
                                <Badge count={6}>
                                    <Icon type="schedule" />
                                </Badge>
                            </div>
                            <span style={{ lineHeight: '3',color:'#333' }}>我的订单</span>
                            </Link>
                        </div>
                        <div className={styles.myOrderBox}>
                         <Link to="messagecenter">
                            <div style={{ marginLeft: '10px' }}>
                                <Badge count={10}>
                                    <Icon type="bell" />
                                </Badge>
                            </div>
                            <span style={{ lineHeight: '3',color:'#333' }}>我的消息</span>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.console_header} style={{ marginTop: '20px',height:'200px' }}>
                    <div className={styles.noticeText}><h4>我的网课</h4></div>
                    <div className={styles.notAvailable}>
                        <p>
                          <Icon type="exclamation-circle-o" style={{color:'#f97a1e',fontSize:'30px'}}/>
                          <span className={styles.text}>您还没有报名过课程哟，快去找些感兴趣的课程吧！</span>
                        </p>
                        <p>
                            <Button className={styles.btn}>选课中心</Button>
                        </p>
                    </div>
                    </div>
                </div>
                );
            }
        }
        
        
export default connect()(ConsolePage);
