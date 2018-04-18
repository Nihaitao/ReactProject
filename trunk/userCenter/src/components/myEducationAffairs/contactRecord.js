import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Link } from 'dva/router'
import { Row, Col, Icon, Input, Table,Button } from 'antd';

import styles from './index.css';

import DetailsModal from './contactRecordDetailsModal.js'

const contactRecord = ({ contactRecords,dispatch }) => {

    function showDetailsModal(){
        dispatch({
            type: 'contactRecords/toggleModal'
        });

    }

  const columns = [{
    title: '联系时间',
    dataIndex: 'contactTime',
    key: 'contactTime',
  },{
    title: '联系方式',
    dataIndex: 'contactWay',
    key: 'contactWay',
  },{
    title: '记录内容',
    dataIndex: 'content',
    key: 'content',
  },{
    title: '记录人',
    dataIndex: 'contactor',
    key: 'contactor',
  },{
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    render: (text, record) => (
        <span>
            <Button type="primary" onClick={showDetailsModal}>查看</Button>
        </span>
    ),
  }];

  const data = [{
    contactTime:'2017-05-12 00:00:00',
    contactWay:'QQ',
    content:'请问发票怎么开，我今天查询了还是不知道',
    contactor:'周可可'
  },{
    contactTime:'2017-05-12 00:00:00',
    contactWay:'QQ',
    content:'请问发票怎么开，我今天查询了还是不知道',
    contactor:'周可可'
  }];

    const listHtml = <Table columns={columns} dataSource={data} pagination={false} />

    const nodataHtml = <div className={styles.nodata_container}><div className={styles.nodata}></div></div>

    const content = data.length == 1 ? nodataHtml : listHtml;


  return (
    <div style={{ backgroundColor:'#fff',padding:'20px' }}>
      <div >
          <DetailsModal />
          {content}
      </div>
    </div>
  );
};


export default connect(({ contactRecords }) => ({ contactRecords  }))((contactRecord));
