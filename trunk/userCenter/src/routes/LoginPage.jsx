import React from 'react';
import { connect } from 'dva';
import styles from './Login.less'
import footerStyles from './IndexPage.less';
import { Layout, Form, Icon, Input, Button, Checkbox, Tabs } from 'antd';
const { Footer } = Layout;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

import FooterComponent from '../components/index/Footer';
// import PasswordTab from '../components/login/passwordTab'; 
// import VerifyCodeTab from '../components/login/verifyCodeTab';
import PasswordTab from '../components/login/loginByPwdTab'; 
import VerifyCodeTab from '../components/login/loginByPhoneTab'; 

const LoginPage = ({
  dispatch,
  login,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll
  }
}) => {
  //const { loginLoading } = login;

  function handelSubmit() {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return;
      }
      dispatch({
        type: 'login/login',
        payload: values,
      });
    });
  }
 function handleFormChange(){
 }

  return (
    <div>
    <div className={styles.login}>
      <div className={styles.login_block}>
        <img className="headerLogo" alt="" style={{ width: '232px', height: '60px' }} src="http://ctfive.oss-cn-hangzhou.aliyuncs.com/Course/2018/03/01/36308049b4de4a6aab85de7dffd01f790006.png" />
        <div className={styles.login_form}>
          <Tabs defaultActiveKey="1" style={{paddingTop:'20px'}} className="loginTab">
            <TabPane tab="密码登录" key="1">
               <PasswordTab  dispatch={dispatch} onChange={handleFormChange}/>
            </TabPane>
            <TabPane tab="验证码登录" key="2"><VerifyCodeTab  dispatch={dispatch}/></TabPane>
          </Tabs>
          <Checkbox style={{ float: 'left' }}>记住账号</Checkbox>
          <div style={{  float: 'right' }}  className={styles.register}><a>忘记密码</a>&nbsp;|&nbsp;<a>注册</a> </div>
        </div>
      </div>
    </div>
    <Layout>
    <Footer className={footerStyles.foot} style={{marginTop:'800px'}}>
       <FooterComponent/>
   </Footer>
   </Layout>
   </div>
  );
};

// export default Lists;
export default connect(({ login }) => ({
  login,
}))(Form.create()(LoginPage));
