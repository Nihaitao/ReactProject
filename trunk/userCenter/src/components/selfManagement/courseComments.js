import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Button, Row, Col, Icon, Checkbox, Input, Avatar,List } from 'antd';

import styles from './index.css';
class CourseComments extends React.Component {
    state = {

    };

    componentWillMount() {
        const id = this.props.courserId;
        this.props.dispatch({
            type: 'course/fetchCourseCommentsList',
            payload: {
                ID: id,
                DID:617
            }
        });
    }




    render() {

        const data = this.props.course.courseCommentList;

        const listHtml = <List
            dataSource={data}
            renderItem={item => (
                <List.Item
                    key={item.ID}
                    avatar
                    
                >
                    <List.Item.Meta
                    avatar={<Avatar style={{ width: '100px', height: '100px' }} src={item.avatar} />}
                    title={<div style={{ marginTop: '20px' }}><h3>{item.StudentName}</h3></div>}
                    description={
                        <div>
                            {item.Content}<br />
                            {item.AddTime}
                        </div>
                    }
                />
                </List.Item>
            )}
        />

        const nodataHtml = <div className={styles.nodata_container}><div className={styles.nodata}></div></div>

        const content = data.length == 0 ? nodataHtml : listHtml;


        return (
            <div>
                {content}
            </div>
        );
    }
}

export default connect(({ course }) => ({ course }))((CourseComments));
