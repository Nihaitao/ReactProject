import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Button, Row, Col, Icon, Checkbox, Input, Form, Select, Cascader, Avatar } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

import styles from './courseCatalog.css';

import OnlineVideo from './onlineVideo';

class CourseCatalog extends React.Component {
    state = {
        videoUrl:''


    };

    componentDidMount() {
        const id = this.props.courserId;

        this.props.dispatch({
            type: 'course/fetchCourseCatalogList',
            payload: {
                ID:id  
            }
        });
    }

    handleClickVideo(node){
     const url = "http://wangxiaocenter.chutoukj.com/usercenter/onlinecourse/Video.shtml?ID="+node.ID+"&Course_ID="+node.Course_ID+"&CourseWare_ID="+node.CourseWare_ID;
       this.setState({
        videoUrl: url,
    });

    }


    render() {

        const data = this.props.course.courserCatalogList;

        const videoUrl = this.state.videoUrl;

        

        function renderChild(node) {
            const options = node.ChildNodeList.map((item, index) =>
           
              
               <li key={item.ID}>
                  <a href={videoUrl} target="_blank">
                   <Icon type="video-camera" className={styles.camera_icon} />
                   <span style={{ color: '#666' }}>{item.Name}</span>
                 </a>
            </li>
            

               
               
            );
            return <ul className={styles.course_list}>
                       {options}
                   </ul>

        }


        return (

            <div>
                <ul className={styles.chapter_list}>
                    {
                        data.map((node, index) =>
                            <li key={node.ID} onClick={this.handleClickVideo.bind(this,node)}>
                                    <i className={styles.chapter_icon}></i>
                                    <span>{node.Name}</span>
                                    <Icon type="down" style={{ float: 'right', color: '#333' }} />
                                {renderChild(node)}
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default connect(({ course }) => ({ course }))(Form.create()(CourseCatalog));
