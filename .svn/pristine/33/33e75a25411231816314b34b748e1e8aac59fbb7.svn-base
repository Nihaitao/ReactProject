import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber, List } from 'antd';
const ButtonGroup = Button.Group;

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';


import styles from '../../system.css';

const ImplantPluginItem = ({ }) => {
    const jsCode = "<script type = 'text/javascript'>(function(m,ei,q,i,a,j,s){m[i]=m[i]function(){ (m[i].a = m[i].a || []).push(arguments)}; j=ei.createElement(q), s=ei.getElementsByTagName(q)[0]; j.aync = true; j.charset='UTF-8', j.src='https://static.meiqia.com/dist/meiqia.js?_=t'; s.parentNode.insertBefore(j,s);})(window,document,'script','_MEIQIA')";
    const codeString = '(num) => num + 1';

    return (
        <div>
            <div className={styles.promotion_head}>
                <h4>网页嵌入代码</h4>
                <p>将此代码嵌入到你的网站页面标签body之前即可启用快聊精灵</p>
            </div>
            <div className={styles.promotion_head}>
                <SyntaxHighlighter language='javascript' style={docco}>{codeString}</SyntaxHighlighter>
            </div>
            <div className={styles.promotion_head}>
                <h4>相关文档</h4>
            </div>
            <div className={styles.promotion_head} style={{ height: '200px' }}>
                <h4 style={{ color:'rgb(64, 169, 255)' }}>Javascript网站插件接口说明</h4>
            </div>
        </div>
    );
};



export default ImplantPluginItem;
