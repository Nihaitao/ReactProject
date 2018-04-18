import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Button, Row, Col, Icon, Input, List } from 'antd';


import styles from './index.css';

class CourseDownload extends React.Component {
    state = {

    };

    componentWillMount() {
        const id = this.props.courserId;

        this.props.dispatch({
            type: 'course/fetchCourseDownloadList',
            payload: {
                ID: id
            }
        });
    }




    render() {

        const data = this.props.course.downloadCourseDataList;

        const ButtonText = ({ type, text }) => (
            <span>
                <Button type={type} style={{ marginRight: 8 }}>{text}</Button>
            </span>
        );
        function showTotal(total) {
            return `共 ${total} 条`;
        }



        const listHtml = <List
            dataSource={data}
            renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[<a href={item.Path}><Button type="defalut" >下载</Button></a>]}
                >
                    <List.Item.Meta
                        title={<div style={{ marginTop: '20px', color: '#e4393c' }}>{item.DataInfoType == 1 ? '[教材]' : item.DataInfoType == 2 ? '[教辅]' : '[其他]'}<span style={{color:'#333',fontWeight:'bold',marginLeft:'12px'}}>{item.Title}</span></div>}
                        description={
                            <div>
                                上传时间 : <span>{item.AddTime.replace("T", " ").replace("+", " ")}</span>
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

export default connect(({ course }) => ({ course }))((CourseDownload));
