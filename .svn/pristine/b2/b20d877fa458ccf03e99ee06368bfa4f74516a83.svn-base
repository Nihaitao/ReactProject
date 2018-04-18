import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva'
import { Row, Col, Icon, Input, Tabs, List, Avatar, Button, Timeline } from 'antd';
import NoDataView from '../common/nodata';
const TabPane = Tabs.TabPane;


const MyNotes = ({myClass}) => {
    const data = myClass.MyNotes;
    // const data = [
    //     {
    //         title: '辛亥革命，中国近代史的里程碑',
    //         class: '中国近代史',
    //         chapter: '第一章',
    //         time: '2017-08-19 19：02',
    //     },
    //     {
    //         title: '辛亥革命，中国近代史的里程碑',
    //         class: '中国近代史',
    //         chapter: '第一章',
    //         time: '2017-08-19 19：02',
    //     },
    //     {
    //         title: '辛亥革命，中国近代史的里程碑',
    //         class: '中国近代史',
    //         chapter: '第一章',
    //         time: '2017-08-19 19：02',
    //     }
    // ];

    const ButtonText = ({ type, text }) => (
        <span>
            <Button disabled type={type} style={{ marginRight: 8 }}>{text}</Button>
        </span>
    );
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



    return (
        data.length>0? 
        <List style={{paddingLeft:'20px'}}
                        pagination={pagination}
                        itemLayout="horizontal"
                        size="large"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item
                                key={item.title}
                                actions={[<ButtonText type="defalut" text="开始听课" />]}
                            >
                                <List.Item.Meta
                                    title={<div style={{ marginTop: '20px' }}><h4>{item.title}</h4></div>}
                                    description={
                                        <div>
                                            {item.description}<br />
                                            已学至
                                            <span style={{ color: '#f97a1e', marginRight: '8px' }}>{item.progress}</span>
                                              用时
                                              <span style={{ color: '#f97a1e', marginRight: '8px' }}>{item.time}</span>
                                              课程介绍
                                              <span style={{color:'#f97a1e',marginLeft:'10px'}}><Icon type="play-circle" style={{marginRight:'5px'}}/>继续学习</span>
                                        </div>
                                    }
                                />
                            </List.Item>
                        )}
                    />: <NoDataView/>
    );
};



export default connect(({myClass})=>({myClass}))(MyNotes);
