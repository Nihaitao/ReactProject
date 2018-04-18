import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Row, Col, Icon, Input, List, Dropdown, Button, Menu, Select, Collapse } from 'antd';
const Option = Select.Option;
const Panel = Collapse.Panel;


import styles from './index.css';


const SelectCourseComponent = ({ startTest, dispatch }) => {
    const dataSource = startTest.courseList;
    debugger;

    function handleSubject(subject, disciplineId) {
        dispatch({
            type: 'startTest/fetchSubject',
            payload: {
                subject: subject,
                disciplineId: disciplineId
            }
        });
        dispatch(routerRedux.push('/starttest/'+disciplineId));
    }

    function handleClickSelect(id, props) {
        dispatch({
            type: 'startTest/fetchSubject',
            payload: {
                disciplineId: id,
                subject: props.props.children
            }
        });
        dispatch(routerRedux.push('/starttest'));

    }

    function callback(key) {

    }



    function renderOptions(items) {
        var text = items.ChildNodeList;
        const options = text.map((node) =>
            <Menu.Item key={node.ID}>{node.Name}</Menu.Item>
        );
        return (
            <Menu>
                {options}
            </Menu>
        );
    }

    function buttonText(item) {
        var text = item.ChildNodeList;
        const listItem = text.map((node) =>
            node.ChildNodeList.length == 0 ?
                <li key={node.ID} className={styles.button_list}>
                    <Button className={styles.button_text} onClick={() => handleSubject(node.Name, node.ID)}>{node.Name}</Button>
                </li>
                :
                <li key={node.ID} className="courseselct">
                    <Dropdown.Button overlay={renderOptions(node)}>
                       {node.Name}
                    </Dropdown.Button>
                </li>
        );
        return (
            <Collapse defaultActiveKey={text.ID} className="selectCourse">
                <Panel key={text.ID} >
                    <ul>{listItem}</ul>
                </Panel>
            </Collapse>
        );
    }




    const listHtml =
        <div className="selectCourserList">
            <List
                itemLayout="vertical"
                size="large"
                //pagination={pagination}
                dataSource={dataSource}
                renderItem={item => (
                    <List.Item
                        key={item.ID}
                    //extra={<div className={styles.toggle_area}>{item.showAll ? '收起全部' : '展开全部'}<Icon type="up" style={{ marginLeft: '10px' }} /></div>}
                    >
                        <List.Item.Meta
                            title={<div><i className={styles.sprites_ws}></i><a className={styles.classify_title} onClick={() => handleSubject(item.Name, item.ID)}>{item.Name}</a></div>}
                        />
                        {
                            buttonText(item)
                        }
                    </List.Item>
                )}
            />
        </div>

    const nodataHtml = <div className={styles.nodata_container}><div className={styles.nodata}></div></div>

    const content = dataSource.length == 1 ? nodataHtml : listHtml;


    return (
        <div>
            <div className={styles.main_body}>
                <div className={styles.subject_item} >
                    {content}
                </div>
            </div>
        </div>
    );
};


export default connect(({ startTest }) => ({ startTest }))((SelectCourseComponent));
