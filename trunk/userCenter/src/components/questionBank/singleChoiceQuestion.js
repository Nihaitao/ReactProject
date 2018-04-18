import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Link } from 'react-router';
import { Row, Col, Icon, Input, Tabs, Table, List, Avatar, Button, Radio } from 'antd';
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;

import SingleChoiceOptions from './singleChoiceOptions';

import styles from './index.css';

//做题类型.单选题
class SingleChoiceQuestion extends React.Component {
    state = {
        currentindex: 0
    };




    render() {

        const data = this.props.data;

        function renderOptions(items) {
            var answerBody = items.Body;
            var answerObj = eval('(' + answerBody + ')');
            // var arry = [];
            // for (let i = 0; i < items.AnswerCount; i++) {
            //     arry.push[i];
            // }
            var arry = [1, 2, 3, 4]

            var options = "";
            for (var key in answerObj) {
                options =
                    <div>
                        <div>
                            <Radio value={1}></Radio>
                            <span>{key}. {answerObj[key]}</span>
                        </div>
                        <div>
                            <Radio value={2}></Radio>
                            <span>{key}. {answerObj[key]}</span>
                        </div>
                        <div>
                            <Radio value={3}></Radio>
                            <span>{key}. {answerObj[key]}</span>
                        </div>
                        <div>
                            <Radio value={4}></Radio>
                            <span>{key}. {answerObj[key]}</span>
                        </div>
                    </div>
            }
            return options

        }



        function singleChoiceText(data) {
            const listItem = data.map((node, index) =>
                <div>
                    <div className={styles.sub_dotitle}>
                        <em>{index + 1}、</em>
                        <span dangerouslySetInnerHTML={{ __html: node.Title }}></span>
                    </div>
                    <dl className={styles.sub_answer} style={{ backgroundColor: '#fff' }}>
                        <RadioGroup>
                            {
                                // <SingleChoiceOptions data={node.Body}/>
                                renderOptions(node)
                            }
                        </RadioGroup>
                    </dl>
                </div>
            );
            return (
                <div className="sub-content2 sub-conanswer">
                    {listItem}
                </div>
            );
        }

        return (
            <div>
                <div className={styles.subject_con}>
                    <div className="sub-content2 sub-conanswer">
                        {singleChoiceText(data)}
                    </div>
                </div>

            </div>

        );
    }
}


export default connect(({ startTest }) => ({ startTest }))((SingleChoiceQuestion));
