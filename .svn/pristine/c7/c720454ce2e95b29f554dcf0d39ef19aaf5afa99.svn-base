import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Popconfirm, Button, Icon, Input, message, Modal, Form, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;


import styles from '../../system.css';

const UpdateEmailModal = ({ dispatch, userInfo, form: {
    getFieldDecorator,
    validateFieldsAndScroll
} }) => {


    function handleOk(e) {
        console.log(e);
        message.success('Click on Yes');
    }

    function handleCancel(e) {
        dispatch({
            type: 'userInfo/toggleEmailModal'
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
                title="修改邮箱"
                visible={userInfo.emailModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="发送验证"
                cancelText="取消"
            >
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="新邮箱地址"
                        extra="我们将会发送一封验证邮件到您的新邮箱"
                    >
                        {getFieldDecorator('currentPsd', {

                        })(
                            <Input placeholder="请输入常用邮箱" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="验证码"
                    >
                        {getFieldDecorator('newPsd', {

                        })(
                            <Input />
                        )}
                    </FormItem>
                </Form>
            </Modal>
        </div>
    );
};


export default connect(({ userInfo }) => ({ userInfo }))(Form.create()(UpdateEmailModal));
