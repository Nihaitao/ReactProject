import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Button, Row, Col, Icon, Checkbox, Input, Form } from 'antd';
const FormItem = Form.Item;

import styles from './index.css';
class phoneBinding extends React.Component {
    state = {
       
    };


    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 18 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 8 },
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
                 <div className={styles.des_area} style={{height:'65px'}}>
                        <p>* 重新绑定手机请验证您的用户信息</p>
                </div>
               
                    <Form style={{marginTop:'15px'}}>
                        <FormItem
                            {...formItemLayout}
                            label="登录密码"
                            colon={false}
                        >
                            {getFieldDecorator('password', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="绑定手机号"
                            colon={false}
                        >
                            {getFieldDecorator('phoneNumber', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="短信验证码"
                            colon={false}
                        >
                            {getFieldDecorator('code', {

                            })(
                               
                                <Input /> 
                               
                            )}
                        </FormItem>
                        <Button className={styles.code_btn}>发送验证码</Button>
                        <FormItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" style={{ width: '100px',backgroundColor:'#f97a1e',borderColor:'#f97a1e',color:'#fff' }}>重新绑定</Button>
                        </FormItem>
                    </Form>
              
            </div>
        );
    }
}

export default connect(({ }) => ({

}))(Form.create()(phoneBinding));
