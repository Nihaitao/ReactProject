import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Button, Content, Row, Col, Icon, Checkbox, Input, InputNumber, List, Form, Select, Cascader, Upload, Modal } from 'antd';
const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const Option = Select.Option;


import styles from '../../system.css';

class AdminInfoItem extends React.Component {
    state = {
       
    };


    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 15 },
                sm: { span: 5 },
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



        const { getFieldDecorator, getFieldsError } = this.props.form;


        return (
            <div>
                <div className={styles.promotion_head}>
                    <h4>超级管理员</h4>
                    <p>只有超级管理员才可以修改本设置和付费页面的设置</p>
                </div>
                <div className={styles.promotion_head} style={{ height:'130px'}}>
                    <Select defaultValue="1" style={{ width: '150px' }}>
                        <Option value="1">超级管理员</Option>
                        <Option value="2">普通用户</Option>
                    </Select>
                    <div className={styles.toolBar}>
                        <Button type="primary" htmlType="submit" style={{ width: '80px' }}>保存</Button>
                        <Button style={{ width: '80px',marginLeft:'10px' }}>取消</Button>
                    </div>
                </div>
                <div className={styles.promotion_head} style={{ height:'560px'}}>
                    <Form>
                        <FormItem
                            {...formItemLayout}
                            label="姓名"
                        >
                            {getFieldDecorator('name', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="电话"
                        >
                            {getFieldDecorator('phoneNumber', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="邮箱"
                        >
                            {getFieldDecorator('email', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="邮寄地址"
                        >
                            {getFieldDecorator('address', {

                            })(
                                <Input placeholder="公司详细地址" />
                            )}
                        </FormItem>
                        
                        <FormItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" style={{ width: '100px' }}>保存</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

export default connect(({ }) => ({

}))(Form.create()(AdminInfoItem));
