import React from 'react';
import { connect } from 'dva';
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
  Menu,
  Dropdown
} from 'antd';
import styles from './bannerNav.less';

const InputGroup = Input.Group;
const Search = Input.Search;
const Option = Select.Option;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

//首页 菜单右边 悬浮子菜单 
function mutiMenu(data, key) {
  return (
    <SubMenu
      key={key}
      title={<span> {data.Name} </span>}
      className={styles.menu_nav}>
      {data.Childs.map((item, i) => <Menu.Item key={key + i}>{item.Name}</Menu.Item>)}
    </SubMenu>

  )
}

//首页 菜单左边
const navLeft=(navLeftData)=> (
  <Col span={5} className={styles.menu}>
    <div className={styles.menu_top}>
      <a className={styles.link}>进入我的网校</a>
    </div>
    <div className={styles.detail}>
      <ul>
        {navLeftData && navLeftData.map((item, index) => {
          return <div key={index}>
            <dt>
              <a className={styles.link}>{item.Name}</a>
            </dt>
            {item.ChildNodeList && item.ChildNodeList.map((it, i) => <li key={i}>
                <a className={styles.link}>{it.Name}</a>
              </li>)}
          </div>
        })}
      </ul>
    </div>
  </Col>
)
//首页 菜单右边
const navRight=(navRightData)=> (
  <Col span={19} className={styles.menu_right}>
    <Menu mode="horizontal">
      {navRightData && navRightData.map((item, index) => {
        if (item.Childs.length>0) {
          return mutiMenu(item, index);
        } else {
          return (
            <Menu.Item key={index} className={styles.menu_nav}>
              {item.Name}
            </Menu.Item>
          )
        }
      })}
    </Menu>
  </Col>
)

//首页 菜单
const BannerNav = ({homeData}) => {
  let {disciplineList,menuList} = homeData
  return (
    <Row type="flex" align="top" className={styles.container}>
      {navLeft(disciplineList)}
      {navRight(menuList)}
    </Row>
  );
}
export default connect(({ homeData}) => ({homeData}))((BannerNav));