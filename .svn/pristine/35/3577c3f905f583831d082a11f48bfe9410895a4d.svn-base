import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Row, Col, Icon, Input, Tabs, Table, Button } from 'antd';
const TabPane = Tabs.TabPane;

import styles from './index.css';


class chapterTest extends React.Component {
  state = {
    currentindex: 0
  };

  componentDidMount() {
    const storeId = this.props.startTest.questionStoreList[0].ID;
    this.props.dispatch({
      type: 'startTest/fetchChapterQuestion',
      payload: { ID: storeId }
    });
  }


  handleClick(index,id) {
    this.setState({ currentindex: index });
    this.props.dispatch({
      type: 'startTest/fetchChapterQuestion',
      payload: { ID: id }
    });
  }

  

  render() {

    const tabId = this.props.startTest.testTabId;

    const columns = [{
      title: '章节',
      dataIndex: 'Name',
      key: 'Name',
    }, {
      title: '已做 / 总题',
      dataIndex: 'alreadyCount',
      key: 'alreadyCount',
      render: (text, record) =>
        <div>
          <span style={{ color: 'red' }}>{record.AlreadyCounts}</span>
          <span style={{ marginLeft: '5px', marginRight: '5px' }}>/</span>
          <span>{record.QuestionCounts}</span>
        </div>
    }, {
      title: '',
      dataIndex: '',
      key: '',
      render: (text, record) =>
        <div>
          <Button type="primary">开始做题</Button>
        </div>
    }];

    const data = this.props.startTest.chapterQuestionList;

    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].Children.length > 0) {
          data[i].children = data[i].Children;
        }
      }
    }


    const listHtml = <Table columns={columns} dataSource={data} rowKey={record => record.ID} />

    const nodataHtml = <div className={styles.nodata_container}><div className={styles.nodata}></div></div>

    const content = data.length == 0 ? nodataHtml : listHtml;


    const course = this.props.startTest.questionStoreList;

    //let classNames = classnames(styles.sideMenu, { [styles.active]: this.props.menuOpen });

    let currentIndex = this.state.currentindex;


    return (
      <div>
        <div className={styles.courseName}>
          <span>课程</span>
          <ul className={styles.items}>
            {course.map((node, index) =>
              index == currentIndex ? <li className={styles.active} key={node.ID} onClick={this.handleClick.bind(this, index,node.ID)}>{node.Name}</li> : <li key={node.ID} onClick={this.handleClick.bind(this, index,node.ID)}>{node.Name}</li>
            )}
          </ul>
        </div>
        <div style={{ border: '1px solid #f0f2f5' }}></div>
        <div style={{ marginTop: '20px', backgroundColor: '#fff' }}>
          {content}
        </div>

      </div>
    );
  }
}


export default connect(({ startTest }) => ({ startTest }))((chapterTest));
