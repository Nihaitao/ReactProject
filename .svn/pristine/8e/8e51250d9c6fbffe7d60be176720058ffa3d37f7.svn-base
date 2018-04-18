import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Input } from 'antd';


import styles from '../../system.css';

class DialogInvitationItem extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {

    };

    onClickEditInvitationPattern() {
        this.props.dispatch({
            type: 'dialogInvitation/changeInvitationItemId',
            payload: 2,
          });

    }


    render() {

        return (
            <div>
                <div className={styles.promotion_head} style={{ borderBottom: '10px solid #f1f1f1' }} style={{ borderBottom: '10px solid #f1f1f1' }}>
                    <h4>对话邀请</h4>
                    <p>你可以在这里设置对话邀请的外观和规则</p>
                </div>
                <div className={styles.promotion_head} style={{ borderBottom: '10px solid #f1f1f1' }}>
                    <h4>邀请外观</h4>
                    <p>定制邀请框的外观与文案，让它更契合你的网站</p>
                    <div style={{ marginTop: '10px', color: '#63B8FF' }}  >设置邀请外观</div>
                </div>
                <div className={styles.promotion_head}>
                    <h4>邀请机制</h4>
                    <p>顾客访问你的网站时，定制采用何种方式发送邀请</p>
                    <div style={{ marginTop: '10px', color: '#63B8FF', cursor:'pointer' }}  onClick={this.onClickEditInvitationPattern.bind(this)} >设置邀请机制</div>
                </div>
            </div>
        );
    }
}



export default connect(({ dialogInvitation }) => ({ dialogInvitation }))((DialogInvitationItem));
