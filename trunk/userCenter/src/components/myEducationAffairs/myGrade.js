import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Link } from 'dva/router'
import { Row, Col, Icon, Input, Table, Button } from 'antd';

import styles from './index.css';


const myGrade = ({ dispatch }) => {

  const data = [{
    classCode: '1234',
    className: '西方近代史',
    first: '85',
    second: '55',
    third: '65',
    fourth: '98',
    lastGrade: '150'

  }, {
    classCode: '1234',
    className: '西方近代史',
    first: '85',
    second: '55',
    third: '65',
    fourth: '30',
    lastGrade: '150'

  }, {
    classCode: '1641',
    className: '西方近代史',
    first: '85',
    second: '95',
    third: '65',
    fourth: '98',
    lastGrade: '150'

  }, {
    classCode: '96864',
    className: '经济学',
    first: '85',
    second: '55',
    third: '65',
    fourth: '0',
    lastGrade: '150'

  }, {
    classCode: '464',
    className: '管理学原理',
    first: '45',
    second: '55',
    third: '55',
    fourth: '30',
    lastGrade: '150'

  }, {
    classCode: '464',
    className: '管理学原理',
    first: '45',
    second: '55',
    third: '65',
    fourth: '98',
    lastGrade: '150'

  }, {
    classCode: '464',
    className: '管理学原理',
    first: '45',
    second: '88',
    third: '65',
    fourth: '47',
    lastGrade: '150'

  }, {
    classCode: '464',
    className: '管理学原理',
    first: '60',
    second: '55',
    third: '23',
    fourth: '98',
    lastGrade: '150'

  }
  ];



  const columns = [
    {
      title: '课程代码',
      dataIndex: 'classCode',
      key: 'classCode',
      fixed: 'left',
      width: 120
    },
    {
      title: '课程名称',
      dataIndex: 'className',
      key: 'className',
      fixed: 'left',
      width: 200

    }, {
      title: '2012年4月',
      dataIndex: 'first',
      key: 'first',
      width: 170,
      render: (text, record) => (
        record.first < 60 ? <span style={{ color: 'red' }}>{record.first}</span> : <span>{record.first}</span>
      )

    }, {
      title: '2012年10月',
      dataIndex: 'second',
      key: 'second',
      width: 170,
      render: (text, record) => (
        record.second < 60 ? <span style={{ color: 'red' }}>{record.second}</span> : <span>{record.second}</span>
      )
    }, {
      title: '2013年4月',
      dataIndex: 'third',
      key: 'third',
      width: 170,
      render: (text, record) => (
        record.third < 60 ? <span style={{ color: 'red' }}>{record.third}</span> : <span>{record.third}</span>
      )
    }, {
      title: '2013年10月',
      dataIndex: 'fourth',
      key: 'fourth',
      width: 170,
      render: (text, record) => (
        record.fourth < 60 ? <span style={{ color: 'red' }}>{record.fourth}</span> : <span>{record.fourth}</span>
      )
    },
    {
      title: '最终成绩',
      dataIndex: 'lastGrade',
      key: 'lastGrade',
      width: 150,
      fixed: 'right'
    }];

    function footerHtml(){
      const length = columns.length - 3;
      for (let i = 0; i < length; i++) {
        return  <span style={{marginLeft:'120px',cursor:'pointer'}}><span style={{ color: '#52c41a' }}><Icon type="check-circle" style={{ marginRight: '5px' }} /></span>
          <span style={{ color: 'red' }}><Icon type="exclamation-circle" style={{ marginRight: '5px' }} /></span></span>
      }
    }

  function footer() {
    return <div>
      <span style={{ width: '200px', marginLeft: '120px' }}>信息审核状态</span>
       {footerHtml()}
    </div>
  }



  const renderContent = (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 7) {
      obj.props.colSpan = 0;
    }
    return obj;
  };

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px' }}>
      <div >
        <Table
          bordered
          columns={columns}
          dataSource={data}
          pagination={false}
          scroll={{ x: 1150 }}
          footer={() => footer()}
        // scroll={{ x: '130%', y: 840 }}
        />
      </div>
      <br />
      <p style={{ fontSize: '13px' }}>温馨提示：请仔细查看自己的书籍记录，如无误请点击"
                   <span style={{ color: '#52c41a' }}><Icon type="check-circle" style={{ marginRight: '5px' }} />确认无误</span>"，如不正确请点击"
                   <span style={{ color: 'red' }}><Icon type="exclamation-circle" style={{ marginRight: '5px' }} />有异议</span>"，
                   确认完毕显示"已确认"</p>
    </div>
  );
};


export default connect(({ }) => ({}))((myGrade));
