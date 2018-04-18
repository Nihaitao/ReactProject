import React from 'react';
import { connect } from 'dva';
import {Link } from "dva/router";

import { Layout, Icon, Button, Breadcrumb, Timeline, Popover, Tabs } from 'antd';
const { Header, Footer, Content, Row, Col } = Layout;
const TabPane = Tabs.TabPane;

import HeaderComponent from '../../components/index/Header';
import SecondHeaderComponent from '../../components/index/SecondHeader';
import FooterComponent from '../../components/index/Footer';

import CourseIntroduction from '../../components/selfManagement/courseIntroduction';
import CourseCatalog from '../../components/selfManagement/courseCatalog';
import CourseDownload from '../../components/selfManagement/courseDownload';
import CourseComments from '../../components/selfManagement/courseComments';

import styles from '../IndexPage.less';

import privateStyles from './index.less';

class OnlineCourseDetailPage extends React.Component {

    componentWillMount() {
       
        this.props.dispatch({
            type: 'course/fetchCourseDetail',
            payload: { ID: this.props.params.courseId }
        });
        
    }


    render() {

        const courseDetail = this.props.course.courseDetail;

        const id = this.props.params.courseId;
        
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

                        <Breadcrumb className={privateStyles.breadcrumb}>
                            <span><Icon type="environment-o" style={{ fontSize: '15px' }} />当前位置：</span>
                            <Breadcrumb.Item><Link to="/home">首页</Link></Breadcrumb.Item>
                            <Breadcrumb.Item>课程详情 </Breadcrumb.Item>
                        </Breadcrumb>

                        <div id="showDetail" className={privateStyles.Pro_showDetail}>
                            <div className={privateStyles.Pro_care} style={{ float: 'left' }}>

                           { 
                           courseDetail.CoverPath ? <img alt="" width="329" height="185" src={ courseDetail.CoverPath } /> :  <div className={privateStyles.null_image} style={{width:'329px',height:'165px'}} ></div> 
                           }
                                
                            </div>
                            <div className={privateStyles.Pro_titleMsgBox} style={{ float: 'left' }}>
                                <div class="clearfix" style={{ width: '100%' }}>
                                    <h3 class="Pro-title">
                                        {courseDetail.Name ? courseDetail.Name :''}
                                </h3>
                                </div>
                                <p className={privateStyles.Pro_detail}>暂无介绍</p>
                                <div style={{ marginTop: '25px' }}><span style={{ fontWeight: '600' }}>主讲老师：</span><span>{courseDetail.TeacherDetail_Name ? courseDetail.TeacherDetail_Name :''}</span></div>
                                <div style={{ marginTop: '10px' }}><span style={{ fontWeight: '600' }}>价格：</span><span className={privateStyles.price}>{courseDetail.IsPay ? (courseDetail.IsPay == 1 ? '已购买' :'立即购买') :''}</span></div>
                            </div>
                        </div>
                        <div style={{ clear: 'both' }} />

                        <div className={privateStyles.Cur_introduce}>
                            <div className={privateStyles.Cur_introduce_info}>
                                <Tabs defaultActiveKey="2" >
                                    <TabPane tab="课程介绍" key="1"><CourseIntroduction /></TabPane>
                                    <TabPane tab="课程目录" key="2"><CourseCatalog courserId ={id} /></TabPane>
                                    <TabPane tab="资料下载" key="3"><CourseDownload courserId ={id} /></TabPane>
                                    <TabPane tab="学员评论" key="4"><CourseComments courserId ={id} /></TabPane>
                                </Tabs>
                            </div>
                            <div className={privateStyles.Cur_introduce_Tinfo}>
                                <h3>授课老师</h3>
                                <div className={privateStyles.teacher_photo}>
                                    <img alt="" style={{width:'100px',height:'100px',borderRadius:'50%'}} src="http://ctfive.oss-cn-hangzhou.aliyuncs.com/Course/2018/02/01/03bae3c958f0464f8bb9e6f7cb16a3670069.jpg" />
                               </div>
                               <div className={privateStyles.teacher_name}>
                                   郑老师
                               </div>
                               <div className={privateStyles.teacher_info}>
                               201711300910add
                               </div>

                                </div>
                            </div>




                    </layout>

                        <Footer className={styles.foot}>
                            <FooterComponent />
                        </Footer>
                </Layout >
            </div >
                );
            }
        }
        
        
export default connect(({ course }) => ({ course }))((OnlineCourseDetailPage));
