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


class SingleChoiceOptions extends React.Component {
    state = {
        currentindex: 0
    };




    render() {

        const data = this.props.data;
        const answerObj = eval('(' + data + ')');

        function renderOptions(answerObj) {
            const arry = [1, 1, 1, 1];
            const options = arry.map((node) => {
                for (var key in answerObj) {
                   return  
                   <div>
                        <Radio value={key}></Radio>
                        <span>{key}. {answerObj[key]}</span>
                    </div>
                }
            }

            );
            return (
                <div>
                    {options}
                </div>
            );


        }








        return (
            <div>
                {renderOptions(answerObj)}
            </div>

        );
    }
}


export default connect(({ startTest }) => ({ startTest }))((SingleChoiceOptions));
