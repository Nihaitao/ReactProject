import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Button, Row, Col, Icon, Checkbox, Input, Form, Select, Cascader, Avatar } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

import styles from './index.css';
class BasicInfo extends React.Component {
    state = {

    };

    componentDidMount() {
        this.props.dispatch({
            type: 'studentInfo/fetchStudentInfoSet',
        });
        this.props.dispatch({
            type: 'studentInfo/fetchHDictionaryList',
        });
    }

    
        handleSubmit = (e) => {
            e.preventDefault();
           
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    this.props.dispatch({
                        type: 'studentInfo/EditStudentInfoByStuId',
                        payload: values,
                    })
                }
            }); 
        }
       
    

    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 18 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 8 },
                sm: { span: 8 },
            },
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 10,
                    offset: 8,
                },
            },
        };

        // const options = [{
        //     value: 'hunan',
        //     label: '湖南',
        //     children: [{
        //       value: 'changsha',
        //       label: '长沙市',
        //       children: [{
        //         value: 'yueluqu',
        //         label: '岳麓区',
        //       }],
        //     }],
        //   }, {
        //     value: 'jiangsu',
        //     label: 'Jiangsu',
        //     children: [{
        //       value: 'nanjing',
        //       label: 'Nanjing',
        //       children: [{
        //         value: 'zhonghuamen',
        //         label: 'Zhong Hua Men',
        //       }],
        //     }],
        //   }];



        const { getFieldDecorator, getFieldsError } = this.props.form;

        const data = this.props.studentInfo.infoList[0];

        const formData = data && data.Childs.length > 0 ? data.Childs : [];

        const value = formData && formData.length > 0 ? true : false;

        const dictionaryList = this.props.studentInfo.dictionaryList;


        const optionsList = this.props.studentInfo.dictionaryList.map((node) =>

            <Option value={node.ID.toString()}>{node.Description}</Option>
        );




        return (
            <div>
                <Form style={{ marginTop: '20px' }} onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem
                        {...formItemLayout}
                        label="姓名"
                        colon={false}
                    >
                        {getFieldDecorator('Name', {
                            initialValue: value ? formData[0].Value : ''

                        })(
                            <Input className={styles.input} disabled />
                        )}
                    </FormItem>
                    {/* <FormItem
                            {...formItemLayout}
                            label="性别"
                            colon={false}
                        >
                            {getFieldDecorator('sex', {
                                initialValue: "女",

                            })(
                                <Input className={styles.input} disabled />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="出生日期"
                            colon={false}
                        >
                            {getFieldDecorator('borndate', {
                                initialValue: "1995-12-15",

                            })(
                                <Input className={styles.input} disabled />
                            )}
                        </FormItem> */}
                    <FormItem
                        {...formItemLayout}
                        label="身份证号"
                        colon={false}
                    >
                        {getFieldDecorator('CardNumber', {
                            initialValue: value ? formData[1].Value : ''

                        })(
                            <Input className={styles.input} disabled />
                        )}
                    </FormItem>
                    {/* <FormItem
                            {...formItemLayout}
                            label="籍贯"
                            colon={false}
                        >
                            {getFieldDecorator('native', {
                                initialValue: "",

                            })(
                                <Cascader options={options} style={{marginLeft:'20px'}} placeholder="请选择" />
                            )}
                        </FormItem> */}
                    <FormItem
                        {...formItemLayout}
                        label="手机号码"
                        colon={false}
                    >
                        {getFieldDecorator('Phone', {
                            initialValue: value ? formData[2].Value : ''

                        })(
                            <Input className={styles.input} disabled />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="学历"
                        colon={false}
                    >
                        {getFieldDecorator('Education_ID', {
                            initialValue: value ? formData[3].Value : ''

                        })(
                            <Select style={{ width: 120, marginLeft: '20px' }} >
                                {/* <Option value="226">博士后</Option>
                                <Option value="2">研究生</Option>
                                <Option value="3">博士</Option>
                                <Option value="4">本科</Option>
                                <Option value="5">大专</Option>
                                <Option value="6">高中</Option>
                                <Option value="7">中学</Option>
                                <Option value="8">小学</Option>  */}
                                {optionsList}

                            </Select>
                        )}
                    </FormItem>

                    {/* <FormItem
                            {...formItemLayout}
                            label="第二联系号码"
                            colon={false}
                        >
                            {getFieldDecorator('idCard', {
                                initialValue: "15489452258",

                            })(
                                <Input className={styles.input} disabled />
                            )}
                        </FormItem> 
                        <FormItem
                            {...formItemLayout}
                            label="QQ号码"
                            colon={false}
                        >
                            {getFieldDecorator('borndate', {
                                initialValue: "774913431",

                            })(
                                <Input style={{marginLeft:'20px'}} disabled />
                            )}
                        </FormItem> */}
                    {/* <FormItem
                            {...formItemLayout}
                            label="Email"
                            colon={false}
                        >
                            {getFieldDecorator('email', {
                                initialValue: "774913431@qq.com",

                            })(
                                <Input style={{marginLeft:'20px'}} disabled />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="身份证地址"
                            colon={false}
                        >
                            {getFieldDecorator('idCard', {
                                initialValue: "湖南省株洲市建设中路",

                            })(
                                <Input  style={{marginLeft:'20px'}} disabled />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="现居地"
                            colon={false}
                        >
                            {getFieldDecorator('idCard', {
                                initialValue: "湖南省株洲市建设中路",

                            })(
                                <Input style={{marginLeft:'20px'}} disabled />
                            )}
                        </FormItem> */}
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" style={{ width: '100px', backgroundColor: 'red', borderColor: 'red', color: '#fff' }}>保存</Button>
                    </FormItem>
                </Form>

                {/* <div className={styles.submit_area}>
                     <Button className={styles.cancel_btn} style={{marginRight:'5px'}}>有异议</Button>
                     <Button className={styles.ok_btn}>确认无误</Button>
                  </div> */}
                <div className={styles.basic_avatar}>
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" shape="square" size="large" style={{ width: '130px', height: '130px' }} />
                </div>

            </div>
        );
    }
}

export default connect(({ studentInfo }) => ({ studentInfo }))(Form.create()(BasicInfo));
