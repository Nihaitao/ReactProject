import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Button, Content, Row, Col, Icon, Checkbox, Input, InputNumber, List, Form, Select, Cascader } from 'antd';
const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const Option = Select.Option;


import styles from '../../system.css';

const InformationItem = ({ dispatch,

    form: {
        getFieldDecorator,
        validateFieldsAndScroll
    } }) => {

    const options = [{
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
            value: 'hangzhou',
            label: 'Hangzhou'
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

    return (

        <div>
            <div className={styles.promotion_head}>
                <h4>企业信息</h4>
                <p>2017年05月12日 注册</p>
            </div>
            <div id="promotion_msg_edit" className={styles.promotion_head} style={{ height: '500px' }}>
                {/* <div style={{ paddingTop: '10px' }}>
                    <h4>团队/企业全称</h4>
                    <Input placeholder="例如：湖南米未文化传媒股份有限公司" />
                    <h4>团队/企业简称</h4>
                    <Input placeholder="可能会展示给你的顾客; 例如：米未文化" />
                </div> */}
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="团队/企业全称"
                    >
                        {getFieldDecorator('enterpriseName', {

                        })(
                            <Input placeholder="湖南米未文化传媒有限公司" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="团队/企业简称"
                    >
                        {getFieldDecorator('enterpriseShortName', {

                        })(
                            <Input placeholder="可能会展示给顾客的名称; 例如：湖南米未文化" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="所在行业"
                    >
                        {getFieldDecorator('occupation', {

                        })(
                            <Select defaultValue="lucy" placeholder="请选择">
                                <Option value="jack">医生</Option>
                                <Option value="lucy">老师</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="所在地区"
                    >
                        {getFieldDecorator('district', {

                        })(
                            <Cascader options={options} placeholder="请选择" />
                        )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" style={{ width:'100px' }}>保存</Button>
                    </FormItem>
                </Form>
            </div>
        </div>
    );
};


// export default Lists;
export default connect(({ }) => ({

}))(Form.create()(InformationItem));
