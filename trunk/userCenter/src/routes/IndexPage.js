import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';

import { Layout, Menu, Icon, Button } from 'antd';
const { Header, Sider, Footer, Content, Row, Col } = Layout;
const SubMenu = Menu.SubMenu;

import HeaderComponent from '../components/index/Header';
import SecondHeaderComponent from '../components/index/SecondHeader';
import SiderBarComponent from '../components/index/SiderBar';
import FooterComponent from '../components/index/Footer';

class IndexPage extends React.Component {
  state = {
    collapsed: false,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout className={styles.normal}>
        <Header className="header" style={{ height: '40px', backgroundColor: 'rgb(16, 13, 13)' }}>
          <HeaderComponent />
        </Header>
        <Header className="header" style={{ height: '100px', backgroundColor: '#fff' }}>
          <SecondHeaderComponent />
        </Header>
        <Layout>
          <Sider>
            <SiderBarComponent />
          </Sider>
          <div id="main_content" className={styles.main_content}>
            {this.props.children}
          </div>
        </Layout>
        <Footer className={styles.foot}>
           <FooterComponent />
        </Footer>
      </Layout>
    );
  }
}

export default connect()(IndexPage);
