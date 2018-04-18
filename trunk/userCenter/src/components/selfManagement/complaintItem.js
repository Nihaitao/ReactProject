import React from 'react';
import ReactDOM from 'react-dom';
import {Link, routerRedux} from 'dva/router';
import {connect} from 'dva';
import {
    Row,
    Col,
    Icon,
    Input,
    Tabs,
    Table,
    List,
    Avatar,
    Button,
    Timeline,
    Modal
} from 'antd';
import NoDataView from '../common/nodata';
const TabPane = Tabs.TabPane;
const {TextArea} = Input;

class complaintItem extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false
        }
    }
    handleOk() {
        this.setState({loading: true});
        this.props.dispatch({type: 'askComplaint/postComplaint', content: '哈师大噶几安福发大师', hideModal:()=>this.hideModal()})

    }
    handleCancel() {
        this.hideModal();
    }
    showModal() {
        this.props.dispatch({type: 'modals/complaintVisible', visible: true})
    }
    hideModal() {
        this.setState({loading: false});
        this.props.dispatch({type: 'modals/complaintVisible', visible: false})
    }
    render() {
        let {modals,askComplaint} = this.props;
        const columns = [
          {
              title: '提交时间',
              dataIndex: 'AddTime',
              key: 'AddTime'
          }, {
              title: '提问内容',
              dataIndex: 'Title',
              key: 'title'
          }, {
              title: '状态',
              dataIndex: 'Status',
              key: 'Status',
              render: (text, record) => (record.Status
                  ? <span>已处理</span>
                  : <span style={{
                      color: '#f97a1e'
                  }}>未处理</span>)
          }, {
              title: '操作',
              dataIndex: 'operation',
              key: 'operation',
              render: (text, record) => (
                  <span>
                      <Button>删除</Button>
                      <Button
                          type="primary"
                          onClick={() => this.props.dispatch(routerRedux.push("/compliantdetails/" + record.ID))}
                          style={{
                          marginLeft: '10px'
                      }}>查看</Button>
                  </span>
              )
          }
      ];
        return (
            <div>
                <Table columns={columns} dataSource={askComplaint.Complaints} pagination={false}/>
                <br/>
                <div style={{
                    float: 'right'
                }}>
              <Button type="danger" onClick={()=> this.showModal()}>我要投诉</Button>
              
                    <Modal
                        title="提问"
                        visible={modals.complaintVisible}
                        onOk={() => this.handleOk()}
                        onCancel={() => this.handleCancel()}
                        footer={[ 
                        < Button key = "submit" type = "primary" loading = { this.state.loading } onClick = { () => this.handleOk() } > 提交 </Button>, 
                        ]}>
                        <TextArea rows={4} onChange={(e)=>this.onChangeValue(e)} />
                        </Modal>
                </div>

            </div>
        )

    }
}

export default connect(({askComplaint,modals}) => ({askComplaint,modals}))((complaintItem));
