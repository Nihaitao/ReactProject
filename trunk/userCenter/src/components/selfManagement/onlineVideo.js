import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Link } from 'react-router';
import { Row, Col, Icon, Input, Tabs, Table, List, Avatar, Button, Checkbox } from 'antd';
const TabPane = Tabs.TabPane;

// import service from '../../service';

import styles from './index.css';

//视频播放
class OnlineVideo extends React.Component {


    componentDidMount() {

        // this.props.dispatch({
        //     type: 'order/fetchOrderList',
        //     payload: {
        //         PayStatus: 0,
        //         PageIndex: 1,
        //         PageSize: 10,
        //         PageStatus: 1
        //     }
        // });
    }




    render() {

        
        return (
            <div style={{ padding: '10px' }}>
                <video src="/i/movie.ogg" width="320" height="240" controls="controls">   
              </video>
            </div>
        );
    }
}


export default connect(({ course }) => ({ course }))((OnlineVideo));
