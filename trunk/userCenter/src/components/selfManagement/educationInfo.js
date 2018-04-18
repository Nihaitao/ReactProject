import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Button, Row, Col, Icon, Checkbox, Input, Form } from 'antd';
const FormItem = Form.Item;

import styles from './index.css';
class EducationInfo extends React.Component {
    state = {
       
    };


    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 18 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 10 },
                sm: { span: 18 },
            },
        };


        const { getFieldDecorator, getFieldsError } = this.props.form;


        return (
            <div style={{height:'370px'}}>
                    <Form layout="inline" style={{marginLeft:'20px'}}>
                     <Row>
                         <Col span="8">
                         <FormItem
                         {...formItemLayout}
                            label="类别"
                            colon={false}
                        >
                            {getFieldDecorator('type', {
                             initialValue: "自学考试",

                            })(
                                <Input className={styles.input} disabled/>
                            )}
                        </FormItem>
                         </Col>
                         <Col span="8">
                         <FormItem
                           {...formItemLayout}
                           label="学号"
                           colon={false}
                       >
                           {getFieldDecorator('phoneNumber', {
                            initialValue: "9706464464",

                           })(
                               <Input className={styles.input} disabled />
                           )}
                       </FormItem>
                         </Col>
                         </Row>
                         <Row style={{marginTop:'15px'}}>
                         <Col span="8">
                         <FormItem
                           {...formItemLayout}
                            label="学校"
                            colon={false}
                            
                        >
                            {getFieldDecorator('school', {
                                initialValue: "湖南大学",

                            })(
                                <Input className={styles.input} disabled />
                            )}
                        </FormItem>
                         </Col>
                         <Col span="8">
                         <FormItem
                           {...formItemLayout}
                           label="准考证号"
                           colon={false}
                       >
                           {getFieldDecorator('examNumber', {
                               initialValue: "464646464",

                           })(
                               <Input className={styles.input} disabled />
                           )}
                       </FormItem>
                         </Col>
                         </Row>
                         <Row style={{marginTop:'10px'}}>
                         <Col span="8">
                         <FormItem
                           {...formItemLayout}
                            label="专业"
                            colon={false}
                        >
                            {getFieldDecorator('profession', {
                                initialValue: "人力资源管理部",

                            })(
                                <Input className={styles.input} disabled />
                            )}
                        </FormItem>
                         </Col>
                         <Col span="8">
                         <FormItem
                           {...formItemLayout}
                           label="班主任"
                           colon={false}
                       >
                           {getFieldDecorator('leaderTeacher', {
                               initialValue: "李老师",

                           })(
                               <Input className={styles.input} disabled />
                           )}
                       </FormItem>
                         </Col>
                         </Row>
                         <Row style={{marginTop:'15px'}}>
                          <Col span="8">
                         <FormItem
                           {...formItemLayout}
                            label="年级"
                            colon={false}
                        >
                            {getFieldDecorator('grade', {
                                initialValue: "201204",

                            })(
                                <Input className={styles.input} disabled />
                            )}
                        </FormItem>
                         </Col>
                         <Col span="8">
                         <FormItem
                           {...formItemLayout}
                           label="学习形式"
                           colon={false}
                       >
                           {getFieldDecorator('studyType', {
                               initialValue: "面授",

                           })(
                               <Input className={styles.input} disabled />
                           )}
                       </FormItem>
                         </Col>
                         </Row>
                         <Row style={{marginTop:'15px'}}>
                         <Col span="8">
                         <FormItem
                           {...formItemLayout}
                            label="学习进度"
                            colon={false}
                        >
                            {getFieldDecorator('studyProgress', {
                                initialValue: "第二学期",

                            })(
                                <Input className={styles.input} disabled />
                            )}
                        </FormItem>
                         </Col>
                         </Row>
                       
                       
                    </Form>
   
                    <p className={styles.warning}>温馨提示：请仔细查看自己的报考信息，如无误请点击"
                            <span style={{color:'#52c41a'}}><Icon type="check-circle" style={{marginRight:'5px'}}/>确认无误</span>"，如不正确请点击"
                            <span style={{color:'red'}}><Icon type="exclamation-circle" style={{marginRight:'5px'}}/>有异议</span>"，
                         确认完毕显示"已确认"
                   </p>

                   <p className={styles.submit_area}>
                     <Icon type="check-circle" style={{marginRight:'10px',fontSize:'16px',color:'#52c41a',cursor:'pointer'}} /><Icon type="exclamation-circle" style={{fontSize:'16px',color:'red',cursor:'pointer'}} />
                  </p>
              
            </div>
        );
    }
}

export default connect(({ }) => ({

}))(Form.create()(EducationInfo));
