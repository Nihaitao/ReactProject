import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import {
  Button,
  Row,
  Col,
  Icon,
  Checkbox,
  Input,
  Form
} from 'antd';
const FormItem = Form.Item;

import styles from './index.css'

const formItemLayout = {
  labelCol: {
      xs: { span: 30 },
      sm: { span: 18 },
  },
  wrapperCol: {
      xs: { span: 18 },
      sm: { span: 8 },
  },
};

const CustomizedForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
})((props) => {
  const {getFieldDecorator} = props.form;
  function getLogin() {
    let baseForm ={};
    props.form.validateFields((err, values) => {
      if (!err) {
          baseForm.CardNumber = values.IDcardNo;
          baseForm.Password = values.pwd;
      }
    });
    props.dispatch({
      type: 'login/login', 
      payload: baseForm,
    })

  }
  return (
    <Form style={{
      marginTop: '15px'
    }}>
      <FormItem {...formItemLayout} label="" colon={false}>
        {getFieldDecorator('IDcardNo', {})(<Input
          placeholder="身份证号码"
          style={{
          width: '320px',
          height: '48px'
        }}/>)}
      </FormItem>
      <FormItem {...formItemLayout} label="" colon={false}>
        {getFieldDecorator('pwd', {})(<Input
          type="password"
          placeholder="密码"
          style={{
          width: '320px',
          height: '48px'
        }}/>)}
      </FormItem>
      <FormItem {...formItemLayout}>
        <Button 
          onClick = {getLogin}
          type="primary"
          htmlType="submit"
          style={{
          width: '320px',
          height: '48px',
          fontSize: '18px'
        }}>登录</Button>
      </FormItem>
    </Form>
  );
});

class PwdTab extends React.Component {
  state = {
    fields: {
      username: {
        value: 'benjycui'
      }
    }
  };
  handleFormChange = (changedFields) => {
    this.setState(({fields}) => ({
      fields: {
        ...fields,
        ...changedFields
      }
    }));
  }
  render() {
    const fields = this.state.fields;
    return (
          <CustomizedForm {...fields} onChange={this.handleFormChange} dispatch={this.props.dispatch}/>
    );
  }
}
export default PwdTab;
