import { Link } from 'dva/router';
import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import styles from './indexComponent.css';


const SideBar = ({ dispatch }) => {
// class SideBar extends React.Component {
  
    const changeMenu= (options)=>{
      let {key} = options;
      let payload = {};
      switch (key){
        case "2":
        break;
        case "":
        break;
        case "":
        break;
        case "":
        break;
      }
    }

    return (
      <div>
        <Menu
          onSelect={changeMenu}
          mode="inline"
          theme="light"
          style={{ height: '100%' }}
          defaultOpenKeys={['sub1','sub2',  'sub6']}
        >
           <Menu.Item key="0">
        
        <Link to="/console">
          <span>首页</span>
        </Link>
      </Menu.Item>
      <SubMenu key="sub1" title={<span>我的网课</span>}>

        <Menu.Item key="1">
          <Link to="/classmanage">
            <Icon type="file-text" />课程管理
              </Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/classrecord">
            <Icon type="clock-circle-o" />听课记录
             </Link>
        </Menu.Item>
      </SubMenu>
       <SubMenu key="sub2" title={<span>我的题库</span>}>
        <Menu.Item key="3">
          <Link to="/selectcourse">
            <Icon type="copy" />开始做题
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/testrecord">
            <Icon type="clock-circle-o" />做题记录
          </Link>
        </Menu.Item>
      </SubMenu>
      {/*<SubMenu key="sub3" title={<span>我的学费</span>}>
        <Menu.Item key="5">
          <Link to="/payfees">
            <Icon type="pay-circle-o" />立即缴费
        </Link>
        </Menu.Item>
      </SubMenu>
       <SubMenu key="sub4" title={<span>我的教务</span>}>
        <Menu.Item key="6">
             <Link to="/mygrade"><Icon type="switcher" />我的成绩
             </Link>
             </Menu.Item>
        <Menu.Item key="7">
            <Link to="/myexam"><Icon type="form" />我的报考
            </Link>
            </Menu.Item>
        <Menu.Item key="8">
           <Link to="/mybook"><Icon type="book" />我的书籍
          </Link>
        </Menu.Item>
        <Menu.Item key="9">
          <Link to="/contactrecords"><Icon type="phone" />联系记录</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub5" title={<span>我的毕业</span>}>
        <Menu.Item key="10"><Icon type="clock-circle-o" />学习进度</Menu.Item>
        <Menu.Item key="11"><Icon type="idcard" />论文答辩</Menu.Item>
      </SubMenu> */}
      <SubMenu key="sub6" title={<span>个人管理</span>}>
        <Menu.Item key="12">
           <Link to="/order">
            <Icon type="solution" />我的订单
            </Link>
        </Menu.Item>
        <Menu.Item key="13">
          <Link to="/account"><Icon type="user" />账号设置</Link>
        </Menu.Item>
        <Menu.Item key="14">
          <Link to="/complaint">
            <Icon type="question-circle-o" />投诉提问
           </Link>
        </Menu.Item>
        <Menu.Item key="15">
          <Link to="/messagecenter">
            <Icon type="message" />消息中心
           </Link>
        </Menu.Item>
      </SubMenu>
      {/* <SubMenu key="sub7" title={<span>过程性考核</span>}>
        <Menu.Item key="16"><Icon type="calculator" />开始学习</Menu.Item>
        <Menu.Item key="17"><Icon type="hourglass" />培养计划</Menu.Item>
        <Menu.Item key="18"><Icon type="check-circle-o" />选课管理</Menu.Item>
        <Menu.Item key="19"><Icon type="search" />成绩查询</Menu.Item>
      </SubMenu>
      <SubMenu key="sub8" title={<span>学分认定</span>}>
        <Menu.Item key="20"><Icon type="star-o" />开始学习</Menu.Item>
      </SubMenu> */}
        </Menu>
      </div>
    );
}


export default connect(({ }) => ({}))((SideBar));