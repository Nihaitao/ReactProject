import React from 'react';
import PropTypes from 'prop-types';
import {
    Input,
    Popconfirm,
    Button,
    Avatar,
    Icon,
    Row,
    Col,
    Select,
    Divider,
    List,
} from 'antd';
import {connect} from 'dva';
import {Link } from 'dva/router'
import styles from './banner.less';
const data = [
  {title:'中国近代史纲要上线了'},
  {title:'恭喜网校中心正式上线'},
  {title:'中国近代史纲要上线了'},
]
function msgList(){
  return (
  <List
    itemLayout="horizontal"
    dataSource={data}
    split={0}
    size="small"
    renderItem={item => (
      <List.Item style={{fontSize:"12px",padding:"4px",}}>
           - {item.title}
      </List.Item>
    )}
  />)
}

const BannerLogin = ({user,myClass}) => {
  const lessonRecord = myClass.MyLessonRecords.length>0&&myClass.MyLessonRecords[0][0]||null;
  const {info } = user;
  const headImg = info&&info.HeadImg? 'http://ctfive.oss-cn-hangzhou.aliyuncs.com/Course/2018/03/29/e58804dd2ba1489aaeed1f2bd98e6ff80309.png':require('../../assets/images/head.png');
  console.log(user)
  return (
      <div className={styles.login_container}>
        <div className={styles.login_top}>
         {/* <div className={styles.login_img}/> */}
         <img  className={styles.login_img} src={ headImg}/>
         {user.info&&
         
         <div>hi, {user.info.Name}</div>}
         </div>
        
        {user.info?
          <div className={styles.logined_center}>
            <div className={styles.record}>{lessonRecord&&"最近学习到《"+lessonRecord.Name+"》"}</div>
            <Link to="/console"><span >前往个人中心</span></Link>
          </div>
          :<div className={styles.login_center}><Link to="/login">
        <Button size="large" type="primary" className={styles.login_btn}>登录</Button>
        </Link>
          <Button size="large" className={styles.login_btn} >注册</Button></div>}
        
        <Divider style={{margin:15}}/>
        <div className={styles.login_bottom} style={{marginLeft:"-30px"}}>
        <div ><Icon type="sound" /> 最新消息 </div>
        {msgList()}
        </div>
      </div>
  );
}
export default connect(({user,myClass})=>({user,myClass}))(BannerLogin);