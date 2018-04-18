import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Popconfirm, Button, Icon, Input, message, Modal, Form, Select, TreeSelect } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const SHOW_PARENT = TreeSelect.SHOW_PARENT;


import styles from '../../system.css';

const EditDistrictModal = ({ dispatch, customerDistrict, form: {
    getFieldDecorator,
    validateFieldsAndScroll
} }) => {

    function handleOk(e) {
        console.log(e);
        message.success('Click on Yes');
    }

    function handleCancel(e) {
        dispatch({
            type: 'customerDistrict/toggleModal'
        });
    }

    const treeData = [{
        label: '湖北',
        value: '0-0',
        key: '0-0',
        children: [{
            label: '武汉',
            value: '0-0-0',
            key: '0-0-0',
        }],
    }, {
        label: '湖南',
        value: '0-1',
        key: '0-1',
        children: [{
            label: '长沙',
            value: '0-1-0',
            key: '0-1-0',
        }, {
            label: '湘潭',
            value: '0-1-1',
            key: '0-1-1',
        }, {
            label: '岳阳',
            value: '0-1-2',
            key: '0-1-2',
        }],
    }];

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

    const tProps = {
        treeData,
        //value: this.state.value,
       // onChange: this.onChange,
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
        //searchPlaceholder: 'Please select',
        style: {
            width: 317,
        },
    };




    return (


        <div>
            <Modal
                title="VIP客服组可以看到的"
                visible={customerDistrict.modalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="保存"
                cancelText="取消"
            >
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="类别"
                    >
                        {getFieldDecorator('type', {

                        })(
                            <Select defaultValue="1">
                                <Option value="1">所有访客</Option>
                                <Option value="2">仅能看到以下地区访客</Option>
                                <Option value="3">除了以下地区以外访客</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="地区"
                    >
                        {getFieldDecorator('district', {

                        })(
                            <TreeSelect {...tProps} />
                        )}
                    </FormItem>
                </Form>
            </Modal>
        </div>
    );
};


export default connect(({ customerDistrict }) => ({ customerDistrict }))(Form.create()(EditDistrictModal));
