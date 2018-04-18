import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber } from 'antd';
const ButtonGroup = Button.Group;



import styles from '../../system.css';

const LineUpItem = ({ }) => {
    
    return (
        <div>
            <div className={styles.promotion_head} >
                <h4>顾客排队</h4>
                <p style={{ width:'70%'}}>当客服服务达到上限时，顾客会进入排队等待状态，同时可以进行留言</p>
                <Switch defaultChecked className={styles.cell_switch} style={{ position: 'absolute', top: '20px', right: '20px' }}/>
            </div>
            <div className={styles.promotion_head} >
                <h4>提示文案</h4>
                <div style={{ overflow:'scroll' ,overflowX:'hidden',border:'1px solid rgb(236, 226, 226)',borderRadius:'5px' }} >
                   <div style={{padding:'15px'}}>抱歉，当前所有客服已经达到服务上限，请耐心等待，我们很快就来接待您，谢谢</div>
                </div>
            </div>
            <div className={styles.promotion_head} >
                <h4>排队上限</h4>
                <div style={{ position: 'absolute', top: '20px', right: '20px',color:'#bfbfbf',fontSize:'11px' }}>*共有两个客服人员，最大接待上限为4</div>
                <p style={{ color:'#333' }}>当排队人数超过20人时，后续新进入的对话自动转到留言</p>
            </div>
        </div>
    );
};



export default LineUpItem;
