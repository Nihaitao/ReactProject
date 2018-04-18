import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'dva/router';
import { connect } from 'dva';
import { Row, Col, Icon, Input, List, Button } from 'antd';

import styles from './index.css';

const MessageDetails = ({ messageCenter ,dispatch }) => {

    const data = [{
            title: '关于研究生学位论文开题报告有关事项通知',
            source: '中南大学',
            time: '2017-07-15 10:54:21',
            content:'此处省略一万字'
        }];

    function goBack(){
        dispatch({
            type:'messageCenter/setMessageContent',
            payload:'main'
        })

        }


    return (
        <div>
            <div style={{ height: '400px', backgroundColor: '#fff', padding: '10px' }}>
            <a style={{float:'right', marginRight:'15px',cursor:'pointer'}} onClick={()=>goBack()}>返回上一级</a>
                <div className={styles.list_bread}>
                    消息详情
                </div>
               
                <List style={{ padding: '10px' }}
                    itemLayout="vertical"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={<h4>{item.title}</h4>}
                                description={<span style={{color:'rgba(0, 0, 0, 0.65)'}}>{item.content}</span>}
                            />
                            <div style={{color:'#bfbfbf'}}><span>{item.time}</span><span style={{marginLeft:'10px'}}>{item.source}</span></div>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
};


export default connect(({ messageCenter }) => ({ messageCenter }))((MessageDetails));
