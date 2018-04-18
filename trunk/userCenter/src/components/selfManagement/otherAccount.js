import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Button, Row, Col, Icon, Checkbox, Input, Form } from 'antd';
const FormItem = Form.Item;

import styles from './index.css';
class otherAccount extends React.Component {
    state = {
       
    };


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
                    span: 16,
                    offset: 10,
                },
            },
        };



        const { getFieldDecorator, getFieldsError } = this.props.form;


        return (
            <div>
                <div className={styles.des_area} style={{height:'65px'}}>
                        <p>绑定第三方账号，可以使用第三方账号直接登录</p>
                </div>
                <Row>
                    <Col span="7"></Col>
                    <Col span="5"> 
                       <div className={styles.wechat_bind}></div>
                       <p style={{textAlign:'center',marginRight:'30'}}>未绑定</p>
                       <Button style={{width:'100px',marginLeft:'50px'}} className={styles.function_btn}>绑定账号</Button>
                    </Col>
                    <Col span="1"></Col>
                    <Col span="8"> 
                       <div className={styles.qq_bind}></div>
                       <p style={{textAlign:'center',marginRight:'160'}}>已绑定</p>
                       <Button style={{width:'100px',marginLeft:'50px'}}>取消绑定</Button>
                    </Col>

                    </Row>
              
            </div>
        );
    }
}

export default connect(({ }) => ({

}))(Form.create()(otherAccount));
