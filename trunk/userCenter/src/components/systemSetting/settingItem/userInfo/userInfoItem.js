import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber, Avatar, Form } from 'antd';
const ButtonGroup = Button.Group;
const FormItem = Form.Item;

import styles from '../../system.css';
import privateStyles from './userInfoItem.css';

import PasswordModal from './updatePasswordModal';
import EmailModal from './updateEmailModal';

const UserInfoItem = ({ dispatch,userInfo,form: {
    getFieldDecorator,
    validateFieldsAndScroll
} }) => {

    function showPasswordModal(){
        dispatch({
            type: 'userInfo/togglePasswordModal'
        });
    }

    function showEmailModal(){
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

    return (
        <div>
            <div id="promotion_head" className={styles.promotion_head} >
                <h4>账号信息</h4>
                <p>除头像外，账号信息只会展示给团队成员，顾客不会看见</p>
            </div>
            <div id="promotion_head" className={styles.promotion_head} >
               <div style={{padding:'15px'}}>
                <Avatar size="large" shape="circle" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className={privateStyles.avatar}/>
                <div className={privateStyles.change_avatar}>
                      <a>换一个新头像</a><br/>
                      <p style={{marginTop:'5px'}}>你可以选择jpg,gif,png格式的图片，最大5Mb</p>
                    </div>
                </div>
                <div>
                    <PasswordModal />
                    <EmailModal />
                <Form style={{marginTop:'30px'}}>
                    <FormItem
                        {...formItemLayout}
                        label="登录邮箱"
                    >
                        {getFieldDecorator('email', {

                        })(
                           <span style={{marginLeft:'20px'}}>774913431@qq.com<a onClick={showEmailModal} style={{marginLeft:'50px'}}>修改邮箱</a></span>
                           
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="密码"
                    >
                        {getFieldDecorator('password', {

                        })(
                            <a onClick={showPasswordModal} style={{marginLeft:'20px'}}>修改密码</a>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="真实姓名"
                    >
                        {getFieldDecorator('realName', {

                        })(
                            <span style={{marginLeft:'20px'}}>超级管理员1</span>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="工号"
                    >
                        {getFieldDecorator('number', {

                        })(
                            <span></span>
                        )}
                    </FormItem>
                </Form>
                    </div>
            </div>
        </div>
    );
};


export default connect(({ userInfo }) => ({ userInfo }))(Form.create()(UserInfoItem));
