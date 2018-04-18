import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Button, Row, Col, Icon, Checkbox, Input, Form } from 'antd';
const FormItem = Form.Item;

import styles from './index.css';
class editPassword extends React.Component {
    state = {
       
    };

    handleReset = () => {
        this.props.form.resetFields();
      }

    handleSubmit = (e) => {
        e.preventDefault();
       
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.dispatch({
                    type: 'studentInfo/EditStudentInfoByStuId',
                    payload: values,
                })
            }
        }); 
    }


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
                <div className={styles.des_area}>
                        <p>* 温馨提示 : 为了您的账号安全，请及时修改初始密码，防止盗号(初始密码为身份证后六位);</p>
                        <p>密码最好不要设置成生日、电话号码、车牌和门牌号码</p>
                </div>
                    <Form style={{marginTop:'15px'}} onSubmit={this.handleSubmit.bind(this)}>
                        <FormItem
                            {...formItemLayout}
                            label="原始密码"
                            colon={false}
                        >
                            {getFieldDecorator('OldPassword', {

                            })(
                                <Input type="password" />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="新密码"
                            colon={false}
                        >
                            {getFieldDecorator('newPassword', {

                            })(
                                <Input type="password" />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="确认密码"
                            colon={false}
                            extra="密码可以为6-16位英文字母、数字、'.' 、'_'、 '?' .且下划线不能在最后"
                        >
                            {getFieldDecorator('code', {

                            })(
                                <Input type="password" /> 
                            )}
                        </FormItem>
                        <FormItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" style={{ marginRight:'10px' }} className={styles.function_btn}>修改密码</Button>
                            <Button onClick={this.handleReset}>重置</Button>
                        </FormItem>
                    </Form>
              
            </div>
        );
    }
}

export default connect(({ }) => ({

}))(Form.create()(editPassword));
