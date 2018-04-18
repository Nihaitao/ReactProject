import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button, Avatar, Icon, Row, Col } from 'antd';
import styles from './indexComponent.css';
import {connect } from 'dva';
import {Link, routerRedux } from 'dva/router';


const SecondHeader = ({dispatch }) => {
    return (
        <div className={styles.second_header} >
            <div className={styles.logo}>
                 <span style={{color:'#333',fontSize:'40px',lineHeight:'100px',marginLeft:'230px'}}>
                   <Link to="/home" >
                   <img   src="http://ctfive.oss-cn-hangzhou.aliyuncs.com/Student/2018/01/19/fee1056a47664fc0bb37a43b2f80579a0002.png"/>
                    </Link>
                 </span>
          </div>
          <div className={styles.userSection}>
                 <span style={{lineHeight:'108px',fontSize:'14px',marginRight:'10px',color:'#333'}}>当前专业</span>
                 <span><Button icon="bar-chart" style={{border:'1px solid red',color:'red',position: 'absolute',top:'78px'}}>自考试-本科-人力资源管理</Button></span>
          </div>
        </div>
    );
};

export default connect()(SecondHeader);
