import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Button, Row, Col, Icon, Checkbox, Input, Form } from 'antd';
const FormItem = Form.Item;

import styles from './index.css'

class VerifyCodeTab extends React.Component {
    state = {
       
    };


    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 30 },
                sm: { span: 18 },
            },
            wrapperCol: {
                xs: { span: 18 },
                sm: { span: 8 },
            },
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 10,
                },
            },
        };



        const { getFieldDecorator, getFieldsError } = this.props.form;


        return (
            <div>
                    <Form style={{marginTop:'15px'}}>
                        <FormItem
                            {...formItemLayout}
                            label=""
                            colon={false}
                        >
                            {getFieldDecorator('phoneNumber', {

                            })(
                                <Input placeholder="手机号码" style={{width:'320px',height:'48px'}} />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label=""
                            colon={false}
                        >
                            {getFieldDecorator('phoneNumber', {

                            })(
                                <div>
                                 <Input placeholder="验证码" style={{width:'320px',height:'48px'}} />
                                   <span className={styles.verify_code}>获取验证码</span>
                               </div>
                                
                            )}
                        </FormItem>
                        <FormItem 
                            {...formItemLayout}
                        >
                            <Button type="primary" htmlType="submit" style={{width:'320px',height:'48px',fontSize:'18px'}}>登录</Button>
                        </FormItem>
                    </Form>
                    <Checkbox style={{float:'left'}}>记住账号</Checkbox>
                    <div style={{float:'right'}} className={styles.register}><a>忘记密码</a> | <a>注册</a></div>
              
            </div>
        );
    }
}

export default connect(({login}) => ({login}))(Form.create()(VerifyCodeTab));
