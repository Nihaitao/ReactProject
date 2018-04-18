import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber, Select, Form, Radio } from 'antd';
const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

import styles from '../../system.css';

class AddNewUserItem extends React.Component {
    state = {

    };
    onClickToGoBack() {
        this.props.dispatch({
            type: 'usermanage/changeUserManageItemId',
            payload: 1,
        });
    }

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

        const { getFieldDecorator } = this.props.form;


        return (
            <div>
                <div className={styles.promotion_head} style={{ borderBottom: '10px solid #f1f1f1' }}>
                    <div style={{ margin: '0', padding: '0' }}>
                        <div style={{ float: 'left', fontSize: '40px', width: '3%', marginRight: '55px' }}>
                            <Icon type="left" style={{ marginTop: '10px', cursor: 'pointer' }} onClick={this.onClickToGoBack.bind(this)} />
                        </div>
                        <div style={{ width: '120%' }} >
                            <h4>新增用户</h4>
                            <p>新建客服人员的账号和资料</p>
                        </div>
                    </div>
                </div>
                <div className={styles.promotion_head}>
                    <Form>
                        <FormItem
                            {...formItemLayout}
                            label="登录邮箱"
                            extra="将向此邮箱发送一封激活邀请邮件，成员确认激活后才能启用账号"
                        >
                            {getFieldDecorator('type', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="真实姓名"
                        >
                            {getFieldDecorator('realName', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="工号"
                        >
                            {getFieldDecorator('number', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="服务上限"
                            extra="客服人员最多能同时接待的对话数，设为0则此客服不会被自动分配到对话，体验版客户最大可以设置为2"
                        >
                            {getFieldDecorator('serviceLimit', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="所属分组"
                        >
                            {getFieldDecorator('group', {

                            })(
                                <Select>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="角色"
                        >
                            {getFieldDecorator('role', {

                            })(
                                <Select>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="权限范围"
                        >
                            {getFieldDecorator('roleLimit', {

                            })(
                                <RadioGroup>
                                    <Radio value={1}>仅自己</Radio>
                                    <Radio value={2}>全部</Radio>
                                    <Radio value={3}>部分</Radio>
                                </RadioGroup>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="验证码"
                        >
                            {getFieldDecorator('verifyCode', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                    </Form>
                </div>

            </div>
        );
    }
}


export default connect(({ usermanage }) => ({ usermanage }))(Form.create()(AddNewUserItem));
