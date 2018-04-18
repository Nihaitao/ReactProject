import React from 'react';
import { connect } from 'dva';

import { Layout, Icon, Button, Breadcrumb, Timeline, Popover, Tabs } from 'antd';
const { Header, Footer, Content, Row, Col } = Layout;
const TabPane = Tabs.TabPane;

import HeaderComponent from '../../components/index/Header';
import SecondHeaderComponent from '../../components/index/SecondHeader';
import FooterComponent from '../../components/index/Footer';

import OrderCharge from '../../components/selfManagement/orderCharge';





import styles from '../IndexPage.less';

import privateStyles from './index.less';

class PayOrderPage extends React.Component {

    componentWillMount() {
        const orderId = this.props.params.orderId;
        this.props.dispatch({
            type: 'order/fetchOrderPayById',
            payload: {ID:orderId}
        });
        
    }


    render() {

        const data = this.props.order.orderPayList;

        
        return (
            <div>
                <Layout className={styles.normal}>
                    <Header className="header" style={{ height: '40px', backgroundColor: 'rgb(16, 13, 13)' }}>
                        <HeaderComponent />
                    </Header>
                    <Header className="header" style={{ height: '100px', backgroundColor: '#fff' }}>
                        <SecondHeaderComponent />
                    </Header>
                    <layout className={privateStyles.container} style={{ width: '1230px' }}>
                      <OrderCharge detailList={data.OrderPayDetailList} total ={data.Price} />
                      
                    </layout>

                        <Footer className={styles.foot}>
                            <FooterComponent />
                        </Footer>
                </Layout >
            </div >
                );
            }
        }
        
        
export default connect(({ order }) => ({ order }))((PayOrderPage));
