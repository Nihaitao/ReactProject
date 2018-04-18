import React from 'react';
import { connect } from 'dva';
import styles from './home.css';
import footerStyles from './IndexPage.less';
import { Layout, Form, Icon, Input, Button, Checkbox, Tabs } from 'antd';
const { Header, Sider, Footer, Content, Row, Col } = Layout;

import HeaderComponent from '../components/index/Header';
import SecondHeaderComponent from '../components/index/SecondHeader';
import FooterComponent from '../components/index/Footer';
import TopSerach from '../components/home/topSearch';
import Banner from '../components/home/banner';
import Lesson from '../components/home/lesson';

class HomePage extends React.Component {
	
	render(){
		return (
			<Layout className={styles.container}>
        <Header className="header" style={{ height: '40px', backgroundColor: 'rgb(16, 13, 13)' }}>
          <HeaderComponent />
        </Header>
        <div className={styles.content}>
			<TopSerach/>
			<Banner/>
			<Lesson/>
      </div>
    <Footer className={footerStyles.foot} style={{marginTop:'0'}}>
       <FooterComponent />
   </Footer>
   </Layout>
		);
	}
};

export default connect(({ homeData }) => ({ homeData }))((HomePage));
