import React from 'react';
import { connect } from 'dva';

import { Layout, Icon, Button, Breadcrumb, Timeline, Popover } from 'antd';
const { Header, Footer, Content, Row, Col } = Layout;

import classnames from 'classnames';

import MockExamInfo from '../../components/questionBank/mockExamInfo';
import HeaderComponent from '../../components/index/Header';
import SecondHeaderComponent from '../../components/index/SecondHeader';
import FooterComponent from '../../components/index/Footer';

import SingleChoiceQuestion from '../../components/questionBank/singleChoiceQuestion';
import MultiChoiceQuestion from '../../components/questionBank/multiChoiceQuestion';

import styles from '../IndexPage.less';
import privateStyles from './index.css';


class DoExcercisePage extends React.Component {

    componentWillMount() {
        const id = this.props.params.examId;
        this.props.dispatch({
            type: 'startTest/fetchExamPaperQuestions',
            payload: { ID: id }
        });
    }


    render() {

        const paperInfo = this.props.startTest.paperInfo;

        const questionType = this.props.startTest.questionType;

        const questionNum = questionType.length > 0 ? questionType.map(function (item) {
            return item.Question.length
        }).reduce(function (per, cur) {
            return per + cur
        }) : '';

        const content = (
            <div className={privateStyles.txt_size}>
                <a href="javascript:;" >大</a>
                <a href="javascript:;" >中</a>
                <a href="javascript:;" >小</a>
            </div>
        );

        function renderQuestionType(questionType) {
            const options = questionType.map((node, index) =>
                <a key={index} className={privateStyles.btn}>{node.TypeInfo.QuestionType_Name}</a>
            );
            return (
                <div className={privateStyles.navBox} id="page-rules">
                    {options}
                </div>
            );
        }

        for (let i = 0; i < questionType.length; i++) {
            switch (questionType[i].TypeInfo.QuestionType_ID) {
                case 1:
                    questionType[i].TypeInfo.stem = (i + 1) + '、(单选题)本题共' + questionType[i].Question.length + '小题，每小题' + questionType[i].TypeInfo.Sorce + '分，共' + questionType[i].TypeInfo.Sorce * questionType[i].TypeInfo.Num + '分，在每小题给出的几个选项中，只有一项是符合题目要求的。';
                    break;
                case 2:
                    questionType[i].TypeInfo.stem = (i + 1) + '、(多选题)本题共' + questionType[i].Question.length + '小题，每小题' + questionType[i].TypeInfo.Sorce + '分，共' + questionType[i].TypeInfo.Sorce * questionType[i].TypeInfo.Num + '分，多选、少选、错选、不选均不得分。';
                    break;
                case 3:
                    questionType[i].TypeInfo.stem = (i + 1) + '、(填空题)本题共' + questionType[i].Question.length + '小题，每小题' + questionType[i].TypeInfo.Sorce + '分，共' + questionType[i].TypeInfo.Sorce * questionType[i].TypeInfo.Num + '分';
                    break;
                case 4:
                    questionType[i].TypeInfo.stem = (i + 1) + '、(判断题)本题共' + questionType[i].Question.length + '小题，每小题' + questionType[i].TypeInfo.Sorce + '分，共' + questionType[i].TypeInfo.Sorce * questionType[i].TypeInfo.Num + '分';
                    break;
                case 5:
                    questionType[i].TypeInfo.stem = (i + 1) + '、(问答题)本题共' + questionType[i].Question.length + '小题，每小题' + questionType[i].TypeInfo.Sorce + '分，共' + questionType[i].TypeInfo.Sorce * questionType[i].TypeInfo.Num + '分';
                    break;
                case 6:
                    questionType[i].TypeInfo.stem = (i + 1) + '、(计算题)本题共' + questionType[i].Question.length + '小题，每小题' + questionType[i].TypeInfo.Sorce + '分，共' + questionType[i].TypeInfo.Sorce * questionType[i].TypeInfo.Num + '分';
                    break;
                case 7:
                    questionType[i].TypeInfo.stem = (i + 1) + '、(组合题)本题共' + questionType[i].Question.length + '小题，每小题' + questionType[i].TypeInfo.Sorce + '分，共' + questionType[i].TypeInfo.Sorce * questionType[i].TypeInfo.Num + '分';
                    break;
            }
        }


        function getQuestionTypeHead(questionType) {
            const options = questionType.map((node, index) =>
                <div>
                    <div className={privateStyles.m_secpart}>
                        {node.TypeInfo.stem}
                    </div>

                    <div>
                        {node.TypeInfo.QuestionType_ID == 1 ?
                            //   单选题                 
                            <SingleChoiceQuestion data={node.Question} />
                            :
                            //多选题
                            (node.TypeInfo.QuestionType_ID == 2 ?
                                <MultiChoiceQuestion data={node.Question} />
                                :
                                (node.TypeInfo.QuestionType_ID == 3 ? '3的内容' :
                                    (node.TypeInfo.QuestionType_ID == 4 ? '4的内容' : '5的内容'
                                    )
                                )
                            )

                        }
                    </div>
                </div>
            );
            return (
                <div>
                    {options}
                </div>
            );
        }

        function renderSingleChoiceNum() {
            const options = text.map((node) =>
                <Menu.Item key={node.ID}>{node.Name}</Menu.Item>
            );
            return (
                <Menu>
                    {options}
                </Menu>
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
                        <div className={styles.third_content}>
                            <div className={privateStyles.m_examHead}>
                                <h2 className={privateStyles.h2}>{paperInfo ? paperInfo.Title : ''}</h2>
                                <div className={privateStyles.info} id="info"><p>◇ 本卷共分为{questionType ? questionType.length : ''}大题{questionType ? questionNum : ''}小题，作答时间为{paperInfo ? paperInfo.Time : ''}分钟，总分100分，{paperInfo ? paperInfo.PassScore : ''}分及格。</p> <p>◇ 试卷来源：出头教育 </p> </div>
                                <div className={privateStyles.info_two}> 本套试卷含有主观题，针对主观题请自行参考解析评分 </div>
                            </div>
                            <div className={privateStyles.ui_progress}>
                                <div id="m__ruleInfo" className={privateStyles.ui_progress_sub} >
                                    {questionType.length > 0 ? renderQuestionType(questionType) : ''}
                                </div>
                            </div>

                            <div id="rulesTab" style={{ width: '915px' }}>
                                <div class="m__ruleTitle">
                                    {questionType.length > 0 ? getQuestionTypeHead(questionType) : ''}
                                </div>
                                {/* 题型区域 */}
                                <div className="Rulesclass">
                                    {/* 单选 */}



                                </div>
                            </div>


                            <div style={{ position: 'absolue', width: '265px', top: '0px', right: '0px' }}>
                                <div className={privateStyles.pra_right_con}>
                                    <div className={privateStyles.pra_r_set}>
                                        <ul>
                                            <li><a><Icon type="rollback" /><p>返回列表</p></a></li>
                                            <li><a><Icon type="calculator" /><p>计算器</p></a></li>
                                            <Popover placement="bottomLeft" content={content} title="字体设置" trigger="click" style={{ width: '260px', height: '100px' }}>
                                                <li><a><Icon type="file-excel" /><p>字体</p></a> </li>
                                            </Popover>

                                        </ul>
                                    </div>

                                    <div className={privateStyles.bor} style={{ height: '550px', marginTop: '20px' }}>
                                        <div className={privateStyles.y_time}>
                                            <span ><Icon type="clock-circle-o" style={{ fontSize: '23px', marginRight: '10px' }} />剩余时间：
                                              <em id="e_timer">01:07:17</em>
                                            </span>

                                        </div>
                                        <div className={privateStyles.hd}>
                                            <span className={privateStyles.title}>答题卡</span>
                                            <span className={privateStyles.count}>2/11</span>
                                        </div>
                                        <div className={privateStyles.bd}>
                                            {/* 单选题 */}
                                            <div>
                                                <dl className={privateStyles.panel_item}>
                                                    <dt>单选题<span style={{ fontWeight: 'normal', marginLeft: '5px' }}></span></dt>
                                                    <dd className={styles.panel_order}>

                                                        <a href="#258">1</a>
                                                        <a>2</a>
                                                        <a>3</a>
                                                        <a>4</a>
                                                        <a>5</a>
                                                    </dd>
                                                </dl>

                                            </div>
                                            {/* 多选题 */}
                                            <div>
                                                <dl className={privateStyles.panel_item}>
                                                    <dt>多选题<span style={{ fontWeight: 'normal', marginLeft: '5px' }}></span></dt>
                                                    <dd className={styles.panel_order}>

                                                        <a href="#258">1</a>
                                                        <a>2</a>
                                                        <a>3</a>
                                                        <a>4</a>
                                                        <a>5</a>
                                                    </dd>
                                                </dl>

                                            </div>

                                            {/* 问答题 */}
                                            <div>
                                                <dl className={privateStyles.panel_item}>
                                                    <dt>问答题<span style={{ fontWeight: 'normal', marginLeft: '5px' }}></span></dt>
                                                    <dd className={styles.panel_order}>

                                                        <a href="#258">1</a>
                                                        <a>2</a>
                                                        <a>3</a>
                                                        <a>4</a>
                                                        <a>5</a>
                                                    </dd>
                                                </dl>

                                            </div>

                                        </div>
                                        <div className="cad-color clear">
                                            <div className={privateStyles.panel_order_notice}>
                                                <em>已做</em><i className={privateStyles.doit}></i>
                                                <em style={{ marginLeft: '20px' }}>未做</em><i className={privateStyles.normal}></i>
                                            </div>
                                        </div>


                                    </div>

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


export default connect(({ startTest }) => ({ startTest }))((DoExcercisePage));
