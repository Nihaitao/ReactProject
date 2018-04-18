import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Link } from 'react-router';
import { Row, Col, Icon, Input, Tabs, Table, List, Avatar, Button } from 'antd';
const TabPane = Tabs.TabPane;

// import service from '../../service';

import styles from './index.css';

//历年真题
class FormerExam extends React.Component {
    state = {
        currentindex: 0
    };

    componentDidMount() {
        const storeId = this.props.startTest.questionStoreList[0].ID;
        // service.fetchExamPaper(storeId)
        // .then(data=> {   
        // })
        // .catch(error=> {
        // });
        this.props.dispatch({
            type: 'startTest/fetchExamPaperList',
            payload: { ID: storeId, type: 1 }
        });
    }

    handleClick(index, id) {
        this.setState({ currentindex: index });
        this.props.dispatch({
            type: 'startTest/fetchExamPaperList',
            payload: { ID: id, type: 1 }
        });
    }

    enterExaminationRoom(id) {
        this.props.dispatch({
            type: 'startTest/fetchExamPaperInfo',
            payload: { ID: id }
          });

        this.props.dispatch(routerRedux.push('/mockexam/'+id));
    }


    render() {

        const data = this.props.startTest.examPaperList;

        let currentIndex = this.state.currentindex;

        const course = this.props.startTest.questionStoreList;

        const nodataHtml = <div className={styles.nodata_container}><div className={styles.nodata}></div></div>


        return (
            <div>
                <div className={styles.courseName} >
                    <span>课程</span>
                    <ul className={styles.items}>
                        {course.map((node, index) =>
                            index == currentIndex ? <li className={styles.active} key={node.ID} onClick={this.handleClick.bind(this, index, node.ID)}>{node.Name}</li> : <li key={node.ID} onClick={this.handleClick.bind(this, index, node.ID)}>{node.Name}</li>
                        )}
                    </ul>
                </div>
                <div style={{ border: '1px solid #f0f2f5' }}></div>
                {data.length == 0 ? nodataHtml :
                    <List style={{ marginTop: '20px' }}
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item actions={[<Button type="defalut" onClick={this.enterExaminationRoom.bind(this,item.ID)}>进入考场</Button>]}>
                                <List.Item.Meta
                                    avatar={<Avatar className={styles.tag} ><span>真</span></Avatar>}
                                    title={<span>{item.Title}</span>}
                                    description={
                                        <div>
                                            <span>总题 : {item.TotalQuestions}</span>&nbsp;&nbsp;&nbsp;
                                            <span>考试时长 : {item.Time}分钟</span>&nbsp;&nbsp;&nbsp;
                                            <span>总分 : {item.TotalScore}</span>&nbsp;&nbsp;&nbsp;
                                       </div>
                                    }
                                />
                            </List.Item>
                        )}
                    />
                }

            </div>

        );
    }
}


export default connect(({ startTest }) => ({ startTest }))((FormerExam));
