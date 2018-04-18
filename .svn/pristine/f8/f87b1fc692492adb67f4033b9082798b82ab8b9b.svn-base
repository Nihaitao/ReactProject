import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button, Avatar,Icon, Modal } from 'antd';
import {Link} from 'dva/router'
import styles from './indexComponent.css';

const Header = ({ }) => {

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                
                <Link to="home">
                <span>网校中心</span>
                 </Link>
                 <span style={{ marginLeft: '10px', marginRight: '10px' }}>|</span>
                 <span style={{ marginLeft: '10px' }}>手机端</span>
          </div>
          <div className={styles.userSection}>
                 <span>周可可，欢迎您</span>
                 <span style={{ marginLeft: '10px', marginRight: '10px' }}>|</span>
                 <span  style={{ marginLeft: '10px', marginRight: '10px' }}><a href="/login">退出</a></span>
                 <span style={{ marginLeft: '10px', marginRight: '10px' }}>|</span>
                 <span style={{ marginLeft: '10px' }}>客服中心</span>
          </div>
          
        </div>
    );
};

export default Header;
