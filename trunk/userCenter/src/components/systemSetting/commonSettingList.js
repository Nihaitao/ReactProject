import React from 'react';
import { Table, Popconfirm, Button, Content, Row, Col, Icon } from 'antd';
import styles from './system.css';
import { Link } from 'dva/router'

const CommonSettingList = ({ }) => {
    return (
        <div style={{ height: '100%' }}>
            <div className={styles.settingGroup} id="common">
                <span className={styles.setting_group_title}>通用</span>
                <div className={styles.groupItem}>
                    <Link to="/userinfo">
                        <a style={{ color: '#333' }}>
                            <Icon type="smile" style={{ fontSize: '30px' }} />
                            <p>个人信息</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.groupItem}>
                    <a style={{ color: '#333' }} >
                        <Icon type="smile" style={{ fontSize: '30px' }} />
                        <p>界面设置</p>
                    </a>
                </div>
                <div className={styles.groupItem}>
                    <Link to="/shortcut">
                        <a style={{ color: '#333' }} href="">
                            <Icon type="smile" style={{ fontSize: '30px' }} />
                            <p>快捷键</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.groupItem}>
                    <Link to="/msgnotice">
                        <a style={{ color: '#333' }}>
                            <Icon type="smile" style={{ fontSize: '30px' }} />
                            <p>消息通知</p>
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.settingGroup} id="management">
                <span className={styles.setting_group_title}>管理</span>
                <div className={styles.groupItem}>
                    <Link to="/enterprise">
                        <a style={{ color: '#333' }}>
                            <Icon type="smile" style={{ fontSize: '30px' }} />
                            <p>企业信息</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.groupItem}>
                    <Link to="/user">
                        <a style={{ color: '#333' }}>
                            <Icon type="smile" style={{ fontSize: '30px' }} />
                            <p>用户管理</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.groupItem}>
                    <Link to="/user">
                        <a style={{ color: '#333' }}>
                            <Icon type="smile" style={{ fontSize: '30px' }} />
                            <p>角色权限</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.groupItem}>
                    <Link to="/securitty">
                        <a style={{ color: '#333' }}>
                            <Icon type="smile" style={{ fontSize: '30px' }} />
                            <p>安全设置</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.groupItem}>
                    <Link to="/idsearch">
                        <a style={{ color: '#333' }}>
                            <Icon type="smile" style={{ fontSize: '30px' }} />
                            <p>ID查询</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.groupItem}>
                    <Link to="/payment">
                        <a style={{ color: '#333' }}>
                            <Icon type="smile" style={{ fontSize: '30px' }} />
                            <p>企业付款</p>
                        </a>
                    </Link>
                </div>
            </div>

            <div className={styles.settingGroup} id="access">
                <span className={styles.setting_group_title}>接入</span>
                <div className={styles.groupItem}>
                    <Link to="/plugin">
                        <a style={{ color: '#333' }}>
                            <Icon type="smile" style={{ fontSize: '30px' }} />
                            <p>网页插件</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.groupItem}>
                    <Link to="/link">
                        <a style={{ color: '#333' }}>
                            <Icon type="smile" style={{ fontSize: '30px' }} />
                            <p>聊天链接</p>
                        </a>
                    </Link>
                </div>
            </div>

            <div className={styles.settingGroup} id="supporter" style={{ height: '220px' }}>
                <span className={styles.setting_group_title}>客服</span>
                <div className={styles.groupItem}>
                    <Link to="/link">
                        <a style={{ color: '#333' }}>
                            <Icon type="smile" style={{ fontSize: '30px' }} />
                            <p>快捷回复</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.groupItem}>
                    <Link to="/automessage">
                        <a style={{ color: '#333' }}>
                            <Icon type="smile" style={{ fontSize: '30px' }} />
                            <p>自动消息</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.groupItem}>
                    <Link to="/allocate">
                        <a style={{ color: '#333' }}>
                            <Icon type="smile" style={{ fontSize: '30px' }} />
                            <p>客服分配</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.groupItem}>
                    <Link to="/dialoginvitation">
                        <a style={{ color: '#333' }}>
                            <Icon type="smile" style={{ fontSize: '30px' }} />
                            <p>对话邀请</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.groupItem}>
                    <Link to="/dialoginvitation">
                        <a style={{ color: '#333' }}>
                            <Icon type="smile" style={{ fontSize: '30px' }} />
                            <p>对话规则</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.groupItem}>
                    <Link to="/lineup">
                        <a style={{ color: '#333' }}>
                            <Icon type="smile" style={{ fontSize: '30px' }} />
                            <p>排队</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.groupItem}>
                    <Link to="/order">
                        <a style={{ color: '#333' }}>
                            <Icon type="smile" style={{ fontSize: '30px' }} />
                            <p>询前表单</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.groupItem}>
                    <a style={{ color: '#333' }} href="/order">
                        <Icon type="smile" style={{ fontSize: '30px' }} />
                        <p>客服评价</p>
                    </a>
                </div>
                <div className={styles.groupItem}>
                    <Link to="/tag">
                        <a style={{ color: '#333' }}>
                            <Icon type="smile" style={{ fontSize: '30px' }} />
                            <p>标签</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.groupItem}>
                    <Link to="/blacklist">
                        <a style={{ color: '#333' }}>
                            <Icon type="smile" style={{ fontSize: '30px' }} />
                            <p>黑名单</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.groupItem}>
                    <Link to="/districtallocate">
                        <a style={{ color: '#333' }}>
                            <Icon type="smile" style={{ fontSize: '30px' }} />
                            <p>访客地区分配</p>
                        </a>
                    </Link>
                </div>
                <div className={styles.groupItem}>
                <Link to="/customer">
                    <a style={{ color: '#333' }}>
                        <Icon type="smile" style={{ fontSize: '30px' }} />
                        <p>顾客管理</p>
                    </a>
                    </Link>
                </div>
            </div>

            <div className={styles.settingGroup} id="order">
                <span className={styles.setting_group_title}>工单</span>
                <div className={styles.groupItem}>
                <Link to="/customer">
                    <a style={{ color: '#333' }}>
                        <Icon type="smile" style={{ fontSize: '30px' }} />
                        <p>工单设置</p>
                    </a>
                    </Link>
                </div>
                <div className={styles.groupItem}>
                    <a style={{ color: '#333' }}>
                        <Icon type="smile" style={{ fontSize: '30px' }} />
                        <p>工单分类</p>
                    </a>
                </div>
                <div className={styles.groupItem}>
                    <a style={{ color: '#333' }}>
                        <Icon type="smile" style={{ fontSize: '30px' }} />
                        <p>分配规则</p>
                    </a>
                </div>
            </div>
        </div>
    );
};



export default CommonSettingList;
