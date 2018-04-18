import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Popconfirm, Button, Icon, Input, message, Modal, Form, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;


import styles from '../../system.css';

const UpdatePasswordModal = ({ dispatch, userInfo, form: {
    getFieldDecorator,
    validateFieldsAndScroll
} }) => {


    function handleOk(e) {
        console.log(e);
        message.success('Click on Yes');
    }

    function handleCancel(e) {
        dispatch({
            type: 'userInfo/togglePasswordModal'
        });
    }

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

    return (


        <div>
            <Modal
                title="修改密码"
                visible={userInfo.passwordModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="保存"
                cancelText="取消"
            >
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="当前密码"
                    >
                        {getFieldDecorator('currentPsd', {

                        })(
                            <Input placeholder="请输入当前密码" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="新密码"
                    >
                        {getFieldDecorator('newPsd', {

                        })(
                            <Input placeholder="请输入8-20位新密码" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="验证新密码"
                    >
                        {getFieldDecorator('newPsdAgain', {

                        })(
                            <Input placeholder="请再次输入新密码" />
                        )}
                    </FormItem>
                </Form>
            </Modal>
        </div>
    );
};


export default connect(({ userInfo }) => ({ userInfo }))(Form.create()(UpdatePasswordModal));
