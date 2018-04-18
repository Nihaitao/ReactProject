import React from 'react';
import PropTypes from 'prop-types';
import {Link } from 'dva/router';
import {
    Input,
    Popconfirm,
    Button,
    Avatar,
    Icon,
    Row,
    Col,
    Select,
} from 'antd';
import styles from './banner.less';
const InputGroup = Input.Group;
const Search = Input.Search;
const Option = Select.Option;

const logoSrc = "http://ctfive.oss-cn-hangzhou.aliyuncs.com/Student/2018/01/19/fee1056a47664fc0bb37a43b2f80579a0002.png";
const course = [{title:'语文',value:'cn'},{title:'数学',value:'math'},{title:'英语',value:'en'}];

const selectBefore = (
    <Select defaultValue="course" style={{ width: 90 ,backgroundColor:'#fff',}} size="large">
      <Option value="course">课程</Option>
      {course&&course.map((item,i)=>
        <Option key={i} value={item.value}>{item.title}</Option>
      )}
    </Select>
  );

//首页 顶部logo+搜索
const TopSearch = ({}) => {

    return (
        <Row type="flex"   align="middle" className={styles.top_search_container} >
            <Col span={10} >
            <Link to="home">
                    <img alt=""
                        src={logoSrc}/>
                </Link>
            </Col>
            <Col span={10}  className={styles.search}>
            <InputGroup compact>
                {selectBefore}
                <Search  style={{ width: '60%' }} placeholder="请输入课程名字" enterButton="搜索" size="large"/>
             </InputGroup>
             </Col>
        </Row>
    );
};
export default TopSearch;
