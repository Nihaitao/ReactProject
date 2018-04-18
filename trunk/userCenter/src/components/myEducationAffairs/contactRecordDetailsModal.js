import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Popconfirm, Button, Icon, Input, message, Modal, Form } from 'antd';
const FormItem = Form.Item;

import styles from './index.css';


const contactRecordDetailsModal = ({ dispatch, contactRecords, form: {
    getFieldDecorator,
    validateFieldsAndScroll
} }) => {

    function handleOk(e) {
        dispatch({
            type: 'contactRecords/toggleModal'
        });
    }

    function handleCancel(e) {
        dispatch({
            type: 'contactRecords/toggleModal'
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
                title="基本信息"
                visible={contactRecords.modalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="确认"
                cancelText="关闭"
                footer={null}
            >
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="学生名称"
                        colon={false}
                    >
                        {getFieldDecorator('studentName', {
                          initialValue: "ss"

                        })(
                           <Input disabled className={styles.input} />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="联系方式"
                        colon={false}
                    >
                        {getFieldDecorator('contactWay', {
                            initialValue: "QQ",

                        })(
                            <Input disabled className={styles.input} />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="联系时间"
                        colon={false}
                    >
                        {getFieldDecorator('contactTime', {
                            initialValue: "2017-05-12 00:00:00",

                        })(
                            <Input disabled className={styles.input} />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="记录时间"
                        colon={false}
                        labelstyle={{color:'#333'}}
                    >
                        {getFieldDecorator('recordTime', {
                            initialValue: "2017-05-12 00:00:00",

                        })(
                            <Input disabled className={styles.input} />
                        )}
                    </FormItem>
                </Form>
            </Modal>
        </div>
    );
};


export default connect(({ contactRecords }) => ({ contactRecords }))(Form.create()(contactRecordDetailsModal));
