import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Button, Content, Row, Col, Icon, Checkbox, Input, InputNumber, List, Form, Select, Cascader, Upload, Modal } from 'antd';
const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const Option = Select.Option;


import styles from '../../system.css';

class SupporterBusinessCardItem extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [{
            uid: -1,
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }],
    };
    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => this.setState({ fileList })

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

        const uploadButton = (
            <div>
                <h4>换一个新头像</h4>
            </div>
        );

        const { getFieldDecorator, getFieldsError } = this.props.form;

        const fileList = this.state.fileList;
        const previewVisible = this.state.previewVisible;
        const previewImage = this.state.previewImage;


        return (
            <div>
                <div className={styles.promotion_head}>
                    <h4>企业客服名片</h4>
                    <p>开启无消息访客过滤时企业客服名片将会展示给访客</p>
                </div>
                <div className={styles.promotion_head}>
                    <div className="clearfix">
                        <Upload
                            action="//jsonplaceholder.typicode.com/posts/"
                            listType="picture-card"
                            fileList={fileList}
                            //onPreview={this.handlePreview}
                           // onChange={this.handleChange}
                        >
                            {fileList.length >= 3 ? null : uploadButton}
                        </Upload>
                       
                    </div>
                    <Form>
                        <FormItem
                            {...formItemLayout}
                            label="名称"
                        >
                            {getFieldDecorator('supporterName', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="自定义签名"
                        >
                            {getFieldDecorator('customizedSignature', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="座机"
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
                            label="QQ"
                        >
                            {getFieldDecorator('qq', {

                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="微信"
                        >
                            {getFieldDecorator('weichat', {

                            })(
                                <Input />
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

}))(Form.create()(SupporterBusinessCardItem));
