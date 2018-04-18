import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber, Avatar, Form } from 'antd';
const ButtonGroup = Button.Group;
const FormItem = Form.Item;

import styles from '../../system.css';
import privateStyles from './userInfoItem.css';

const SupporterBusinessCardItem = ({ dispatch, userInfo, form: {
    getFieldDecorator,
    validateFieldsAndScroll
} }) => {

    function showPasswordModal() {
        dispatch({
            type: 'userInfo/togglePasswordModal'
        });
    }

    function showEmailModal() {
        dispatch({
            type: 'userInfo/toggleEmailModal'
        });

    }

    const formItemLayout = {
        labelCol: {
            xs: { span: 15 },
            sm: { span: 4 },
        },
        wrapperCol: {
            xs: { span: 15 },
            sm: { span: 16 },
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
            offset: 8,
          },
        },
      };

    return (
        <div>
            <div id="promotion_head" className={styles.promotion_head} >
                <h4>客服名片</h4>
                <p>名片里面的信息将会被展示给对话中的顾客</p>
            </div>
            <div id="promotion_head" className={styles.promotion_head} style={{height:'690px'}}>
                <div>

                    <Form>
                        <FormItem
                            {...formItemLayout}
                            label="名称"
                        >
                            {getFieldDecorator('email', {

                            })(
                                <Input />

                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="客服"
                        >
                            {getFieldDecorator('password', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="自定义签名"
                            extra="您可以在自定义签名中填写如 [职位名称] 、[特别说明] 甚至您的 [座右铭]"
                        >
                            {getFieldDecorator('realName', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="座机"
                        >
                            {getFieldDecorator('number', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="手机"
                        >
                            {getFieldDecorator('number', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="邮箱"
                        >
                            {getFieldDecorator('number', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="QQ"
                        >
                            {getFieldDecorator('number', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="微信"
                        >
                            {getFieldDecorator('number', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                    </Form>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" style={{width:'100px'}}>保存</Button>
                    </FormItem>
                </div>
            </div>
        </div>
    );
};


export default connect(({ userInfo }) => ({ userInfo }))(Form.create()(SupporterBusinessCardItem));
