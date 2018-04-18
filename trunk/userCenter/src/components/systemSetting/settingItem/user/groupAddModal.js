import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Popconfirm, Button, Icon, Input, message, Modal, Form, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;


import styles from '../../system.css';

const GroupAddModal = ({ dispatch, usermanage, form: {
    getFieldDecorator,
    validateFieldsAndScroll
} }) => {

    function handleOk(e) {
        console.log(e);
        message.success('Click on Yes');
    }

    function handleCancel(e) {
        dispatch({
            type: 'usermanage/toggleModal'
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
                title="新建分组"
                visible={usermanage.modalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="保存"
                cancelText="取消"
            >
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="名称"
                    >
                        {getFieldDecorator('type', {

                        })(
                            <Input />
                        )}
                    </FormItem>
                </Form>
            </Modal>
        </div>
    );
};


export default connect(({ usermanage }) => ({ usermanage }))(Form.create()(GroupAddModal));
