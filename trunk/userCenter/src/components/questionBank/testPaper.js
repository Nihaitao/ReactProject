import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Row, Col, Icon, Input, Tabs, Table, List, Avatar, Button } from 'antd';
const TabPane = Tabs.TabPane;

import styles from './index.css';

//模拟试卷
class TestPaper extends React.Component {
    state = {
        currentindex: 0
    };

    componentDidMount() {
        const storeId = this.props.startTest.questionStoreList[0].ID;
        this.props.dispatch({
            type: 'startTest/fetchExamPaperList',
            payload: { ID: storeId, type: 0 }
        });
    }

    handleClick(index) {
        this.setState({ currentindex: index });
        this.props.dispatch({
            type: 'startTest/fetchExamPaperList',
            payload: { ID: id, type: 0 }
        });
    }


    render() {


        const data = this.props.startTest.examPaperList;

        const listHtml = <List style={{ marginTop: '20px' }}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item actions={[<Button type="defalut" onClick={() => enterExaminationRoom()}>进入考场</Button>]}>
                    <List.Item.Meta
                        avatar={<Avatar className={styles.tag} ><span>模</span></Avatar>}
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

        const nodataHtml = <div className={styles.nodata_container}><div className={styles.nodata}></div></div>

        const content = data.length == 0 ? nodataHtml : listHtml;

        const course = this.props.startTest.questionStoreList;

        let currentIndex = this.state.currentindex;


        return (
            <div>
                <div className={styles.courseName}>
                    <span>课程</span>
                    <ul className={styles.items}>
                        {course.map((node, index) =>
                            index == currentIndex ? <li className={styles.active} key={node.ID} onClick={this.handleClick.bind(this, index)}>{node.Name}</li> : <li key={node.ID} onClick={this.handleClick.bind(this, index)}>{node.Name}</li>
                        )
                        }
                    </ul>
                </div>
                <div style={{ border: '1px solid #f0f2f5' }}></div>
                {content}

            </div>
        );
    }
}


export default connect(({ startTest }) => ({ startTest }))((TestPaper));
