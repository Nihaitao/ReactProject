import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button, Avatar, Icon } from 'antd';
import styles from './indexComponent.css';

const Footer = ({ }) => {
    return (
        <div>
            <ul className={styles.info}>
                <li>eol简介</li>
                <li>联系方式</li>
                <li>招聘信息</li>
                <li>京IC证140769号</li>
                <li>京IC备12045350号</li>
                <li>京IC网文[2014]2106-306号</li>
                <li>京公网安备&nbsp;11010802020236号</li>
            </ul>
            <p className="copyright">2强526256</p>
        </div>
    );
};

export default Footer;
