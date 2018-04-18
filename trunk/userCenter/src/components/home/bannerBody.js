import React from 'react';
import {connect} from 'dva';
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
    Carousel
} from 'antd';
import styles from './banner.less';
import BannerLogin from './bannerLogin';

//首页 banner 长背景+轮播图
const BannerBody = ({homeData}) => {
  let {bannerList } = homeData;
  return (
    <div className={styles.banner_body_container}>
    <Row type="flex"  align="top" className={styles.banner_content}>
      <Col span={15} push={5} className={styles.banner_center}>
      <Carousel autoplay>
        {bannerList&&bannerList.map((item,i)=>
          <a key={i}>
           <img className={styles.banner_img} src={item.PicUrl}/>
          </a>
        )}
      </Carousel>
      </Col>
      <Col span={4} push={5} className={styles.banner_right}>
        <BannerLogin/>
      </Col>
    </Row>
    </div>
  );
}
export default  connect(({ homeData}) => ({homeData}))((BannerBody));