import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Link } from 'react-router';
import { Row, Col, Icon, Input, Tabs, Table, List, Avatar, Button, Radio, Checkbox } from 'antd';
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

import styles from './index.css';

//做题类型.多选题
class MultiChoiceQuestion extends React.Component {
    state = {
        currentindex: 0
    };




    render() {

        const data = this.props.data;

        function renderOptions(items) {
            var content = "";
            var answerBody = items.Body;
            var answerObj = eval('(' + answerBody + ')');
            debugger;

            for (let i = 0; i < items.AnswerCount; i++) {
                content =
                    <div>
                        <div>
                            <Radio value={1}></Radio>
                            <span>A. {answerObj.A}</span>
                        </div>
                        <div>
                            <Radio value={2}></Radio>
                            <span>B. {answerObj.B}</span>
                        </div>
                        <div>
                            <Radio value={3}></Radio>
                            <span>C. {answerObj.C}</span>
                        </div>
                        <div>
                            <Radio value={4}></Radio>
                            <span>D. {answerObj.D}</span>
                        </div>
                    </div>
            }
            return content;
            // debugger;
            // const options = items.map((node) =>
            //     <div>
            //         <Radio value={2}></Radio>
            //         <span>B.</span>2
            //     </div>
            // );
            // return (
            //     <dd className="m-question-option">
            //         {options}
            //     </dd>
            // );
        }



        function multiChoiceText(data) {
            const listItem = data.map((node, index) =>
                <div>
                    <div className={styles.sub_dotitle}>
                        <em>{index + 1}、</em>
                        <span>{node.Title.replace(/<(?:.|\s)*?>/g, "")}</span>
                    </div>
                    <dl className={styles.sub_answer} style={{ backgroundColor: '#fff' }}>
                        <RadioGroup>
                            {
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
                        <div className={styles.sub_dotitle}> <em>1、</em><span><p><span>克服组织变革阻力的方法有</span></p></span></div>
                        <dl className={styles.sub_answer} style={{ backgroundColor: '#fff' }}><dd className="m-question-option"><i></i><span>A.</span>开诚布公地与员工沟通</dd><dd class="m-question-option"><i></i><span>B.</span>让员工参与到变革中</dd><dd class="m-question-option"><i></i><span>C.</span>利用成功的变革模式</dd><dd class="m-question-option"><i></i><span>D.</span>减少不确定性</dd><dd class="m-question-option"><i></i><span>F.</span>谈判</dd></dl>

                    </div>
                </div>

            </div>

        );
    }
}


export default connect(({ startTest }) => ({ startTest }))((MultiChoiceQuestion));
