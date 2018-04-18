import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'dva';
import {Link} from 'dva/router';
import {
  Button,
  Row,
  Col,
  Icon,
  Checkbox,
  Input,
  Form,
  List,
  Card,
  Divider
} from 'antd';

import styles from './lesson.less';
const noneData = 'http://wangxiaocenter.chutoukj.com/Resources/images/def.jpg';

//首页 课程列表 单行
export default class LessonBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      nodeId: 0,
      ChildNodeList: 'ID',
      DisciplinePIds: '624,1015'
    };
  }
  //控制 课程类型左右滑动
  handleScroll(type) {
    var content = this.refs.listCenter;
    let left = content.scrollLeft;
    if (type === 'left') {
      content.scrollLeft = left - 400;
    } else {
      content.scrollLeft = left + 400;
    }
  }
  selectLessonType(nodeId) {
    this.setState({nodeId});
  }

  //顶部 标题 + 类型选择滑块
  contentTop(data) {
    let list = data.ChildNodeList
    let {nodeId} = this.state;
    return (
      <Row className={styles.top_content}>
        <Col span={6}>
          <Divider type="vertical" className={styles.divider}/>
          <span className={styles.top_title}>{data.Name}</span>
        </Col>
        <Col span={18} className={styles.top_list}>
          <Row>
            <Col span={1}>
              <Icon
                onClick={() => this.handleScroll('left')}
                type="left"
                className={styles.btn_left}/>
            </Col>
            <Col span={22}>
              <div className={styles.list_center} ref="listCenter">
                <span className={ nodeId===0? styles.btn_center_selected: styles.btn_center}
                onClick={() => this.selectLessonType(0)}>全部</span>
                {list && list.map((item, i) => {
                  return (
                    <span
                      key={i}
                      className={item.ID===nodeId? styles.btn_center_selected: styles.btn_center}
                      onClick={() => this.selectLessonType(item.ID)}>{item.Name}</span>
                  )
                })}
              </div>
            </Col>
            <Col span={1}>
              <Icon
                onClick={() => this.handleScroll('right')}
                type="right"
                className={styles.btn_right}/>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }

  render() {
    let {data, nodeId} = this.state;

    return (
      <div className={styles.content}>
        {this.contentTop(data)}
        <List
          grid={{
          gutter: 45,
          column: 4
        }}
          dataSource={data.CourseList}
          renderItem={item => {
          if (parseInt(nodeId) > 0) {
            if ((',' + item.DisciplinePIds + ',').search(nodeId) < 0) {
              return <span style={{
                display: 'none'
              }}/>;
            }
          }
          return (
            <List.Item>
              <div className={styles.lesson_item}>
                <div className={styles.item_top}>
                  <Link to={"/coursedetail/"+item.ID}>
                    <img className={styles.img} src={item.CoverPath || noneData}/>
                  </Link>
                  <span className={styles.tag}>{item.TeachingMethod_Name}</span>
                </div>
                <div className={styles.item_center}>
                  <span>
                    {item.Name}
                  </span>
                </div>
                <Row className={styles.item_bottom} justify="space-around">
                  <Col span={18}>
                    <span className={styles.price}>¥&nbsp;{item.PreferentialPrice}</span>
                  </Col>
                  <Col
                    span={6}
                    style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                  }}>
                    <span><Icon type="user"/>&nbsp;{item.BuyBase}人</span>
                  </Col>
                </Row>
              </div>
            </List.Item>
          )
        }}/>
      </div>
    );
  }
}
