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
  const {dispatch, login, form:{getFieldDecorator,validateFields} } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    var baseForm = {
      Phone: "",
      PhoneCode: "",
      LoginType:2,
      LoginSource:1,
    };
    validateFields((err, values) => {
        if (!err) {
          baseForm.Phone = values.Phone;
          baseForm.PhoneCode = values.PhoneCode;
        }
    });
    dispatch({
      type: 'login/loginByPhone',
      payload: baseForm,
    })
}

const handleGetCode = (e) => {
    e.preventDefault();
    var baseForm = {
        Phone: "",
    };
    validateFields((err, values) => {
            if (!err) {
              baseForm.Phone = values.Phone;
            }
        });
     dispatch({
      type: 'login/sendCode4Login', 
      payload: baseForm,
      timerLoading
    })
}
var Seconds = 60;
var tipText = login.tipText;
//倒计时
const timerLoading = ()=>{
  var timer = setInterval(function () {
    Seconds = Seconds - 1;
    if (Seconds > 0)
        tipText = Seconds + "秒";
    else {
        clearInterval(timer);
        tipText = "获取验证码";
        dispatch({
          type: 'login/sendCodeState', 
          payload: {sendCodeState:false}
        })
    }
    dispatch({
      type: 'login/updateSendCodeText', 
      tipText
    })
  }, 1000); 
}
  return (
    <Form style={{marginTop:'15px'}} onSubmit={handleSubmit}>
      <FormItem {...formItemLayout} label="" colon={false} >
          {getFieldDecorator('Phone', {  })(
              <Input placeholder="手机号码" style={{width:'320px',height:'48px'}} />
          )}
      </FormItem>
      <FormItem {...formItemLayout} label="" colon={false} >
          {getFieldDecorator('PhoneCode', { })(
              <div style={{position:'relative'}}>
                <Input  placeholder="验证码" style={{width:'320px',height:'48px'}} />
                  <span onClick={handleGetCode}
                  className={styles.verify_code}>{login.tipText}</span>
              </div>
          )}
      </FormItem>
      <FormItem {...formItemLayout} >
          <Button name="login"  type="primary" htmlType="submit"
          style={{width:'320px',height:'48px',fontSize:'18px'}}>登录</Button>
      </FormItem>
    </Form>
  );
});

class LoginByPhoneTab extends React.Component {
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
          <CustomizedForm {...fields} onChange={this.handleFormChange} 
          dispatch={this.props.dispatch}  
          login={this.props.login}/>
    );
  }
}

export default connect(({login})=>({login}))(LoginByPhoneTab);
