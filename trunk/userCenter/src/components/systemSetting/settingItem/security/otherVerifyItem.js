import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber, Form } from 'antd';
const ButtonGroup = Button.Group;
const FormItem = Form.Item;


import styles from '../../system.css';

const SecuritySettingItem = ({ form: {
    getFieldDecorator,
    validateFieldsAndScroll
} }) => {

    const formItemLayout = {
        labelCol: {
            xs: { span: 15 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 18 },
            sm: { span: 17 },
        },
    };

    return (
        <div>
            <div className={styles.promotion_head} >
                <h4>安全设置</h4>
                <p style={{width:'75%'}}>开启后企业员工每次登录时会调用其三方资源库进行企业员工身份验证</p>
                <Switch defaultChecked className={styles.cell_switch} style={{ position: 'absolute', top: '20px', right: '20px' }} />
            </div>
            <div className={styles.promotion_head} >
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="第三方验证地址"
                    >
                        {getFieldDecorator('address', {

                        })(
                            <Input placeholder="请输入已开启的第三方验证地址" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="secret_key"
                    >
                        {getFieldDecorator('secret_key', {

                        })(
                            <Input placeholder="secret_key：请设置企业私钥，支持16/23/64位" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="retry_times"
                    >
                        {getFieldDecorator('retry_times', {

                        })(
                            <Input placeholder="retry_times：请设置链接失败时的重试次数" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="success_result"
                    >
                        {getFieldDecorator('success_result', {

                        })(
                            <Input placeholder="success_result：请设置验证成功返回值" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="identity_key"
                    >
                        {getFieldDecorator('identity_key', {

                        })(
                            <Input placeholder="identity_key：用户标识关键字，目前仅支持email" />
                        )}
                    </FormItem>
                    <FormItem
                        wrapperCol={{
                            xs: { span: 24, offset: 0 },
                            sm: { span: 18, offset: 8 },
                        }}
                    >
                        <Button type="primary" htmlType="submit">保存</Button>
                        <Button style={{marginLeft:'10px'}} >重置</Button>
                    </FormItem>
                </Form>
            </div>
            <div className={styles.promotion_head} >
                <h4>文件设置</h4>
                <p>管理网站插件中是否开启文件传输功能</p>
                <Switch className={styles.cell_switch} style={{ position: 'absolute', top: '20px', right: '20px' }} />
            </div>
        </div>
    );
};



export default connect(({ }) => ({}))(Form.create()(SecuritySettingItem));
