import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import {
    Button,
    Row,
    Col,
    Icon,
    Checkbox,
    Input,
    Form
} from 'antd';
const FormItem = Form.Item;

import styles from './index.css'

class PasswordTab extends React.Component {
    constructor(props){
        super(props)
    }

    linkToConsolePage = (e) => {}
    handleSubmit = (e) => {
        e.preventDefault();
        var form = {
            // CardNumber:"13548610895",
            // Password:"13548610895",
            LoginType:1
            // LoginSource:1,
        };
        this.props.form.validateFields((err, values) => {
                if (!err) {
                    // form.CardNumber = values.IDcardNo;
                    // form.Password = values.pwd;
                }
            });
        this.props.dispatch({
            type: 'login/login', 
            payload: form , 
            })
        // this.props.dispatch(routerRedux.push('/console'));
    }

    render() {
        const formItemLayout = {
            labelCol: {
                xs: {
                    span: 30
                },
                sm: {
                    span: 18
                }
            },
            wrapperCol: {
                xs: {
                    span: 18
                },
                sm: {
                    span: 8
                }
            }
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0
                },
                sm: {
                    span: 16,
                    offset: 10
                }
            }
        };

        const {getFieldDecorator, getFieldsError} = this.props.form;
        return (
            <div>
                <Form
                    style={{
                    marginTop: '15px'
                }}
                    onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem {...formItemLayout} label="" colon={false}>
                        {getFieldDecorator('IDcardNo', {})(<Input
                            placeholder="身份证号码"
                            style={{
                            width: '320px',
                            height: '48px'
                        }}/>)}
                    </FormItem>
                    <FormItem {...formItemLayout} label="" colon={false}>
                        {getFieldDecorator('pwd', {})(<Input
                            type="password"
                            placeholder="密码"
                            style={{
                            width: '320px',
                            height: '48px'
                        }}/>)}
                    </FormItem>
                    <FormItem {...formItemLayout}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{
                            width: '320px',
                            height: '48px',
                            fontSize: '18px'
                        }}>登录</Button>
                    </FormItem>
                </Form>
                <Checkbox style={{
                    float: 'left'
                }}>记住账号</Checkbox>
                <div
                    style={{
                    float: 'right'
                }}
                    className={styles.register}>
                    <a>忘记密码</a>
                    |
                    <a>注册</a>
                </div>

            </div>
        );
    }
}

export default connect(({}) => ({}))(Form.create()(PasswordTab));
