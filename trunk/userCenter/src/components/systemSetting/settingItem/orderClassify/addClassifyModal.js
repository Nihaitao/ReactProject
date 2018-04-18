import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Popconfirm, Button, Icon, Input, message, Modal, Form, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;


import styles from '../../system.css';

const AddClassifyModal = ({ dispatch, orderClassify, form: {
    getFieldDecorator,
    validateFieldsAndScroll
} }) => {

    function handleOk(e) {
        console.log(e);
        message.success('Click on Yes');
    }

    function handleCancel(e) {
        dispatch({
            type: 'orderClassify/toggleModal'
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
            <Modal
                title="添加自动规则"
                visible={orderClassify.modalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="保存"
                cancelText="取消"
            >
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="工单分类"
                    >
                        {getFieldDecorator('type', {

                        })(
                            <Select defaultValue="1">
                                <Option value="1">售后服务</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="分配给"
                    >
                        {getFieldDecorator('allocateTo', {

                        })(
                            <Select defaultValue="1">
                                <Option value="1">售后客服</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="抄送给"
                    >
                        {getFieldDecorator('copyTo', {

                        })(
                            <Select defaultValue="1">
                                <Option value="1">售后管理</Option>
                            </Select>
                        )}
                    </FormItem>
                </Form>
            </Modal>
        </div>
    );
};


export default connect(({ orderClassify }) => ({ orderClassify }))(Form.create()(AddClassifyModal));
