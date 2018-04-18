import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Layout, Icon, Button, Breadcrumb, Timeline } from 'antd';
const { Header, Footer, Content, Row, Col } = Layout;

import classnames from 'classnames';

import MockExamInfo from '../../components/questionBank/mockExamInfo';
import HeaderComponent from '../../components/index/Header';
import SecondHeaderComponent from '../../components/index/SecondHeader';
import FooterComponent from '../../components/index/Footer';

import styles from '../IndexPage.less';
import privateStyles from './index.css';


class MockExamInfoPage extends React.Component {

    componentWillMount() {
        const id = this.props.params.examId;
        this.props.dispatch({
            type: 'startTest/fetchExamPaperType',
            payload: { ID: id }
        });
    }

    handleEnterExam() {  
        
        const id = this.props.params.examId;
        this.props.dispatch(routerRedux.push('/doexcersise/'+id));
    }


    render() {
        var rightContentClass = classnames({
            'exam_info_txt': true
        });


        const examInfo = this.props.startTest.examItem[0];

        const examType = this.props.startTest.examPaperType;


        function renderItems(examType) {
            const options = examType.map((node) =>
                <li key={node.ID}>
                   <i></i>
                    <h3 className="f-f16">{node.Title}</h3>
                    <p className="f-f14">
                        本题共{node.Num}小题，每小题{node.Sorce}分，共{node.Num * node.Sorce}分。
                   </p>
                </li>
            );
            return (
                <ul className={privateStyles.timeline_block} id="TypeList">
                    {options}
                </ul>
            );
        }


        return (
            <div>
                <Layout className={styles.normal}>
                    <Header className="header" style={{ height: '40px', backgroundColor: 'rgb(16, 13, 13)' }}>
                        <HeaderComponent />
                    </Header>
                    <Header className="header" style={{ height: '100px', backgroundColor: '#fff' }}>
                        <SecondHeaderComponent />
                    </Header>
                    <Layout style={{ marginTop: '20px' }}>
                        <div className={styles.second_content}>
                            <Breadcrumb>
                                <span><Icon type="environment-o" style={{ fontSize: '15px' }} />您当前所在位置：</span>
                                <Breadcrumb.Item><a>学习中心首页</a></Breadcrumb.Item>
                                <Breadcrumb.Item><a>模拟试卷 </a></Breadcrumb.Item>
                                <Breadcrumb.Item>{examInfo ? examInfo.Title : ''}</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className={privateStyles.exampaper_info}>
                                <div className={privateStyles.lead}>
                                    <h1>{examInfo ? examInfo.Title : ''}</h1>
                                </div>
                                <div className={privateStyles.exam_info}>
                                    <div className={privateStyles.media_left}>
                                        <div className={privateStyles.tk_pic} />
                                    </div>
                                    <div className={privateStyles.media_body}>
                                        <div className={privateStyles.exam_info_txt}>
                                            <ul className={privateStyles.info}>
                                                <li>
                                                    <span className={privateStyles.info_item}>年份：</span>
                                                    <span className={privateStyles.sub_info} id="Addtimes">{examInfo ? examInfo.Year : ''}年</span>
                                                </li>
                                                <li>
                                                    <span className={privateStyles.info_item}>类型：</span>
                                                    <span className={privateStyles.sub_info} id="ModelName">{examInfo ? (examInfo.ExamPaperDo ? '手动组卷' : '自动组卷') : ''}</span>
                                                </li>
                                                <li>
                                                    <span className={privateStyles.info_item}>合格分数：</span>
                                                    <span className={privateStyles.sub_info} id="Pass">{examInfo ? examInfo.PassScore : ''}分</span>
                                                </li>
                                                <li>
                                                    <span className={privateStyles.info_item}>总分：</span>
                                                    <span className={privateStyles.sub_info} id="sunMark">{examInfo ? examInfo.Counts : ''}分</span>
                                                </li>
                                                <li>
                                                    <span className={privateStyles.info_item}>作答：</span>
                                                    <span className={privateStyles.sub_info} id="Minute">{examInfo ? examInfo.Time : ''}</span>
                                                </li>
                                            </ul>
                                            <div className={privateStyles.other}>
                                                <Icon type="search" style={{ fontSize: '18px', marginRight: '10px' }} />
                                                <span>{examInfo ? examInfo.DoCount : ''}</span><span>人做过</span>
                                            </div>

                                            <div className={privateStyles.btn_container}>
                                                <Button className={privateStyles.btn} onClick={this.handleEnterExam.bind(this)}>进入考试</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={privateStyles.exampaper_info} style={{ padding: '20px' }}>
                                <div className={privateStyles.title}>
                                    <h4>题型介绍</h4>
                                </div>
                                <div>
                                      {examType ? renderItems(examType) : ''} 
                                </div>
                            </div>
                        </div>
                    </Layout>
                    <Footer className={styles.foot}>
                        <FooterComponent />
                    </Footer>
                </Layout>
            </div>
        );
    }
}


export default connect(({ startTest }) => ({ startTest }))((MockExamInfoPage));
