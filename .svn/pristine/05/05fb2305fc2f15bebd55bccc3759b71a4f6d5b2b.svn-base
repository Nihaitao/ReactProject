import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Link } from 'dva/router'
import { routerRedux } from 'dva/router';
import { Row, Col, Icon, Input, Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import styles from './index.css';


class StartTestingComponent extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const id = this.props.startTest.disciplineId;
            this.props.dispatch({
                type: 'startTest/fetchQuestionStore',
                payload: { ID: id }
            });
      
    }
 

     linkToChapter= () =>{
         this.props.dispatch({
             type: 'startTest/changeTabId',
             payload:"1"
         });
         

         this.props.dispatch(routerRedux.push('/testtab/'+this.props.startTest.disciplineId));

    }

     linkToExam= () =>{
        this.props.dispatch({
            type: 'startTest/changeTabId',
            payload:"2"
        });
        this.props.dispatch(routerRedux.push('/testtab/'+this.props.startTest.disciplineId));
    }

     linkToFormerExam= () =>{
        this.props.dispatch({
            type: 'startTest/changeTabId',
            payload:"3"
        });
        this.props.dispatch(routerRedux.push('/testtab/'+this.props.startTest.disciplineId));
    }

     goBack= () =>{                                                                                                                                                                                                                                                                                       
    }
    

    render() {

        
    
        const subject = this.props.startTest.subject;
        
        return (
            <div>
            <div className={styles.container} style={{ height: '60px', marginBottom: '10px' }}>
                <h3>当前科目 ：<span>{subject}</span></h3>
                <div style={{ float: 'right', color: '#40a9ff', cursor: 'pointer' }}><Icon type="setting" style={{ fontSize: '20px', marginRight: '8px' }} /><span style={{ fontSize: '17px' }} onClick={()=>goBack()}>设置科目</span></div>
            </div>


            <div className={styles.container} style={{ height: '310px', position: 'relative', padding: '0px' }}>
                <div style={{ float: 'left' }}>
                    <i className={styles.free_tk}></i>
                    <div className={styles.free_test}>
                        <p className={styles.h1}>免费题库</p>
                        <p className={styles.h2}>百万试题，免费开放</p>
                    </div>
                </div>
                <ul className={styles.modify}>
                    <li>
                    
                        <a onClick={this.linkToChapter}>
                            <i className={styles.tk_zj}></i>
                            <p>章节练习</p>
                        </a>
                        
                    </li>
                    <li>
                        <a onClick={()=>linkToExam}>
                            <i className={styles.tk_mn}></i>
                            <p>模拟试卷</p>
                        </a>
                    </li>
                    <li className={styles.t_zt} style={{ borderBottom: 'none' }}>
                        <a onClick={()=>linkToFormerExam}>
                            <i className={styles.tk_nn}></i>
                            <p>历年真题</p>
                        </a>
                    </li>
                    <li style={{ borderBottom: 'none' }}>
                        <a>
                            <i className={styles.tk_yc}></i>
                            <p>易错题</p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className={styles.makeinfo}>
                <ul>
                    <li>
                        <a>
                            <em>0</em>题
                                <p>我的收藏</p>
                        </a>

                    </li>
                    <li>
                        <a>
                            <em >0</em>题
                                <p> 我的错题</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <em>0</em>题
                                <p>做题记录</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <em>0</em>题
                                <p>我的笔记</p>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
        );
    }
}

export default connect(({ startTest }) => ({ startTest }))((StartTestingComponent));
