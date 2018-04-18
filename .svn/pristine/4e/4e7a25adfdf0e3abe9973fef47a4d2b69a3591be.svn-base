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
    Divider,
    List,
} from 'antd';
import styles from './lesson.less';
import LessonBlock from './lessonBlock.js';
 
//首页 课程列表
const Lesson = ({ homeData }) => {
  let courseList = homeData.courseList;
  const lesson2=[{}];

  return (
      <div className={styles.container}>
           {courseList&&courseList.map((item,i)=> 
             <LessonBlock data={item} key={i}/>     
            )}
      </div>
  );
};

export default connect(({ homeData}) => ({homeData}))((Lesson));